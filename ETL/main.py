from io import StringIO
import gc
import csv
import json
from time import sleep
from datetime import datetime, timedelta

import os

import pandas as pd

from shapely.geometry import LineString
from shapely.wkt import loads

import vertica_python
import psycopg2
from sqlalchemy import create_engine

postgres_configuration = {
    "host": "postgres",
    "port": 5432,
    "user": "postgres",
    "password": "congestiometro",
    "dbname": "postgres",
}
postgres_conn = psycopg2.connect(**postgres_configuration)
engine = create_engine(
    "postgresql+psycopg2://postgres:congestiometro@postgres:5432/postgres"
)
vertica_configuration = {
    "host": os.environ["VERTICA_HOST"],
    "port": os.environ["VERTICA_PORT"],
    "user": os.environ["VERTICA_USER"],
    "password": os.environ["VERTICA_PASSWORD"],
    "database": os.environ["VERTICA_DATABASE"],
    "read_timeout": 600,
    "unicode_error": "strict",
    "ssl": False,
}
vertica_conn = vertica_python.connect(**vertica_configuration)


def vertica_iterator(slice_start):
    sleep_time = 1
    last_n_rows = 0
    with open("./sql/vertica_query.sql") as query_string:
        q = query_string.read()
    while True:
        try:
            with vertica_conn.cursor() as cursor:
                lastUpdate = cursor.execute(
                    "select max(lastUpdateMillis) from public.Jams"
                ).fetchone()[0]
                print(
                    f"{datetime.now()}: Vertica last update: {pd.to_datetime(lastUpdate, unit='ms' ) - timedelta(hours=3)}"
                )
                print(f"{datetime.now()}: Executing query...")
                cursor.execute(q, {"slice_start": slice_start})
                print(f"{datetime.now()}: Query executed...")
                cols = [d.name for d in cursor.description]
                i = 0
                for i, c in enumerate(cursor.iterate()):
                    row = dict(zip(cols, c))
                    yield row
                    slice_start = max(
                        row["lastUpdate"] - timedelta(seconds=1), slice_start
                    )
                if i < 10 + last_n_rows:
                    sleep_time = min(max(1, sleep_time * 2), 10 * 60)
                elif i > 100 + last_n_rows:
                    sleep_time = min(max(1, sleep_time / 2), 10 * 60)
                yield None
                last_n_rows = i
                print(f"{datetime.now()}: Query shielded {i + 1} rows")
                print(f"{datetime.now()}: Sleeping {sleep_time} seconds...")
                vertica_conn.commit()
                sleep(sleep_time)
        except:
            pass


lines = pd.read_sql("SELECT street_id, line_id, line FROM jam_lines", engine).set_index(
    "line"
)
slice_start = pd.read_sql(
    "SELECT coalesce(max(end_timestamp), make_date(1970, 1, 1)) FROM jams", engine
).iloc[0, 0]
iterator = vertica_iterator(slice_start)
print(f"{datetime.now()}: Last local update: {slice_start}")

with vertica_conn.cursor() as cursor:
    lastUpdate = cursor.execute(
        "select max(lastUpdateMillis) from public.Jams"
    ).fetchone()[0]
    print(
        f"{datetime.now()}: Last Vertica update: {pd.to_datetime(lastUpdate, unit='ms' ) - timedelta(hours=3)}"
    )

if lines.shape[0] < 1:
    print(f"{datetime.now()}: Initializing DB")
    admin_levels = pd.read_csv("./barrios_badata_wgs84.csv")
    admin_levels.index = admin_levels.index + 1
    admin_levels["greater_admin_level_id"] = admin_levels["COMUNA"].astype(int)
    admin_levels["greater_admin_level_name"] = admin_levels[
        "greater_admin_level_id"
    ].apply(lambda x: f"comuna {x}")
    admin_levels["lower_admin_level_id"] = admin_levels.index
    admin_levels["lower_admin_level_name"] = admin_levels["BARRIO"].str.lower()
    admin_levels["shape"] = admin_levels["WKT"].apply(lambda x: loads(x).wkb_hex)
    admin_levels["lines_ids"] = "[]"
    admin_levels["streets_ids"] = "[]"
    admin_levels["last_update"] = datetime.now()

    buffer = StringIO()
    admin_levels[
        [
            "greater_admin_level_id",
            "greater_admin_level_name",
            "lower_admin_level_id",
            "lower_admin_level_name",
            "lines_ids",
            "streets_ids",
            "shape",
            "last_update",
        ]
    ].to_csv(buffer, header=False, index=False)
    buffer.seek(0)
    with postgres_conn.cursor() as cursor:
        cursor.copy_from(buffer, "admin_levels", sep=",")
        postgres_conn.commit()

    print(f"{datetime.now()}: Getting lines")
    with vertica_conn.cursor() as cursor:
        cursor.execute(
            "SELECT line_json AS line, min(street) as street_base_name, max(roadType) as street_type from public.Jams group by 1"
        )
        lines = pd.DataFrame(
            cursor.fetchall(), columns=[d.name for d in cursor.description]
        )
    lines["line"] = lines["line"].apply(
        lambda x: LineString([(s["x"], s["y"]) for s in json.loads(x)]).wkb_hex
    )
    lines = lines[lines.street_base_name.str.strip().str.len() > 3]

    buffer = StringIO()
    lines[["street_base_name", "line", "street_type"]].to_csv(
        buffer, header=False, index=False
    )
    buffer.seek(0)
    print(f"{datetime.now()}: Filtering lines")
    with postgres_conn.cursor() as cursor:
        cursor.execute("DROP TABLE IF EXISTS public.temp_jam_lines")
        cursor.execute(
            """
        CREATE TABLE public.temp_jam_lines (
            street_base_name text,
            line geometry(LINESTRING),
            street_type integer
        )
        """
        )
        cursor.copy_from(buffer, "temp_jam_lines", sep=",")
        postgres_conn.commit()

        poly = pd.read_sql(
            "select ST_asTEXT(ST_Buffer(ST_MakePolygon(St_ExteriorRing(St_union(shape))), 0.0001)) as shape from admin_levels",
            engine,
        ).iloc[0, 0]
        lines = pd.read_sql(
            f"""
            SELECT *, degrees(ST_Azimuth(ST_StartPoint(line), ST_EndPoint(line))) as bearing
            from public.temp_jam_lines
            where st_contains('{poly}'::geometry, line)
        """,
            engine,
        )
        cursor.execute("DROP TABLE IF EXISTS public.temp_jam_lines")
        postgres_conn.commit()
    lines["sense"] = (((lines.bearing // 45) + 1) % 8) // 2
    lines["direction"] = lines["sense"] % 2
    lines = lines.drop("direction", axis=1).join(
        pd.crosstab(lines.street_base_name, lines.direction)
        .idxmax(axis=1)
        .rename("direction"),
        on="street_base_name",
    )
    lines["sense_ns"] = pd.Series(" (S)", index=range(lines.shape[0])).where(
        (lines.bearing > 90) & (lines.bearing < (90 * 3)), " (N)"
    )
    lines["sense_ew"] = pd.Series(" (O)", index=range(lines.shape[0])).where(
        (lines.bearing > 180), " (E)"
    )
    lines["street_sufix"] = lines["sense_ns"].where(
        lines["direction"] == 0, lines["sense_ew"]
    )
    lines = lines.join(
        lines.groupby("street_base_name").street_sufix.nunique().rename("is2way") > 1,
        on="street_base_name",
    )
    lines["street_sufix"] = lines["street_sufix"].where(lines["is2way"], "")
    lines["street_name"] = lines["street_base_name"]
    lines["street_id"] = (
        (lines["street_name"] + lines["street_sufix"]).astype("category").cat.codes
    )
    lines["line_id"] = lines["line"].astype("category").cat.codes
    lines["last_update"] = datetime.now()

    buffer = StringIO()
    lines[["street_id", "line"]].to_csv(buffer, header=False, index=False)
    buffer.seek(0)
    print(f"{datetime.now()}: Processing streets")
    with postgres_conn.cursor() as cursor:
        cursor.execute("DROP TABLE IF EXISTS public.temp_streets")
        cursor.execute(
            """
        CREATE TABLE public.temp_streets (
            street_id integer,
            line geometry(LINESTRING)
        )
        """
        )
        cursor.copy_from(buffer, "temp_streets", sep=",")
        cursor.execute(
            "SELECT street_id, ST_union(line) as line from public.temp_streets group by 1"
        )
        streets = pd.DataFrame(
            cursor.fetchall(), columns=[d.name for d in cursor.description]
        )
        cursor.execute("DROP TABLE IF EXISTS public.temp_streets")
        postgres_conn.commit()

    streets = streets.join(
        lines.drop_duplicates(["street_id"]).set_index("street_id")[
            [
                "street_type",
                "street_base_name",
                "street_name",
                "street_sufix",
                "last_update",
            ]
        ],
        on="street_id",
    )

    buffer = StringIO()
    streets[
        [
            "street_id",
            "street_type",
            "street_base_name",
            "street_name",
            "street_sufix",
            "line",
            "last_update",
        ]
    ].to_csv(buffer, header=False, index=False)
    buffer.seek(0)
    with postgres_conn.cursor() as cursor:
        cursor.copy_from(buffer, "streets", sep=",")
        postgres_conn.commit()
    del streets

    buffer = StringIO()
    lines[["line_id", "street_id", "line", "last_update"]].to_csv(
        buffer, header=False, index=False
    )
    buffer.seek(0)
    with postgres_conn.cursor() as cursor:
        cursor.copy_from(buffer, "jam_lines", sep=",")
        postgres_conn.commit()

    print(f"{datetime.now()}: Adding lines and streets to admin_levels")
    with postgres_conn.cursor() as cursor:
        cursor.execute("DELETE FROM admin_levels")
        postgres_conn.commit()

    lines_ids = []
    streets_ids = []

    for shape in admin_levels["WKT"]:
        lines = pd.read_sql(
            f"""
            SELECT DISTINCT line_id, street_id
            from public.jam_lines
            where st_contains(st_buffer('{shape}', 0.0001), line)
        """,
            engine,
        )
        lines_ids.append(json.dumps(lines.line_id.unique().tolist()))
        streets_ids.append(json.dumps(lines.street_id.unique().tolist()))

    admin_levels["lines_ids"] = lines_ids
    admin_levels["streets_ids"] = streets_ids

    admin_levels[
        [
            "greater_admin_level_id",
            "greater_admin_level_name",
            "lower_admin_level_id",
            "lower_admin_level_name",
            "lines_ids",
            "streets_ids",
            "shape",
            "last_update",
        ]
    ].to_sql("admin_levels", engine, if_exists="append", index=False)

    lines = pd.read_sql(
        "SELECT street_id, line_id, line FROM jam_lines", engine
    ).set_index("line")

    cols = [
        "uuid",
        "line_id",
        "start_timestamp",
        "end_timestamp",
        "hour",
        "is_working_day",
        "delay",
        "length",
        "speed",
        "level",
    ]
    rows = {}
    for i, row in enumerate(iterator):
        if row is None:
            break
        try:
            row["line"] = LineString(
                [(s["x"], s["y"]) for s in json.loads(row["line"])]
            ).wkb_hex
            row["street_id"] = int(lines.loc[row["line"], "street_id"])
            row["line_id"] = int(lines.loc[row["line"], "line_id"])
            row["is_working_day"] = int(row["is_working_day"])
            row["hour"] = str(
                set(
                    pd.Series(
                        pd.date_range(
                            pd.Timestamp(row["start_timestamp"]).floor(freq="H"),
                            row["end_timestamp"],
                            freq="H",
                        )
                    ).dt.hour.tolist()
                )
            )
            rows[row["uuid"]] = [row[c] for c in cols]
            if len(rows) % 500000 == 0:
                print(
                    f"{datetime.now()}: Read {len(rows)} rows of initial db load. Initial iterator yielded {i + 1}"
                )
        except:
            continue
    total_rows = len(rows)
    print(f"{datetime.now()}: Have {len(rows)} rows for initial db load")
    buffer = StringIO()
    writer = csv.writer(buffer)
    for uuid in list(rows.keys()):
        writer.writerow(rows[uuid])
        del rows[uuid]
    print(
        f"{datetime.now()}: Executing insert of {total_rows} rows. Initial iterator yielded {i + 1}"
    )
    with postgres_conn.cursor() as cursor:
        buffer.seek(0)
        cursor.copy_from(buffer, "jams", sep=",")
        postgres_conn.commit()
    print(f"{datetime.now()}: Initial db load done.")
    del buffer
    gc.collect()

f"{datetime.now()}: Starting live update..."
with open("./sql/posgis_insert.sql") as insert_query:
    q = insert_query.read().replace(") s", ")s")
    with postgres_conn.cursor() as cursor:
        total_rows = 0
        rows = []
        for i, row in enumerate(iterator):
            try:
                row["line"] = LineString(
                    [(s["x"], s["y"]) for s in json.loads(row["line"])]
                ).wkb_hex
                row["is_working_day"] = int(row["is_working_day"])
                row["street_id"] = int(lines.loc[row["line"], "street_id"])
                row["line_id"] = int(lines.loc[row["line"], "line_id"])
                row["hour"] = str(
                    set(
                        pd.Series(
                            pd.date_range(
                                pd.Timestamp(row["start_timestamp"]).floor(freq="H"),
                                row["end_timestamp"],
                                freq="H",
                            )
                        ).dt.hour.tolist()
                    )
                )
                rows.append(row)
            except:
                pass
            if len(rows) < 10:
                continue
            if (row is None) or (len(rows) % 10000 == 0):
                total_rows += len(rows)
                last_timestamp = rows[-1]["lastUpdate"]
                print(
                    f"{datetime.now()}: Executing insert of {len(rows)}. Last known date {last_timestamp}. Total so far {total_rows}. Iterator yielded {i + 1}"
                )
                cursor.executemany(q, rows)
                postgres_conn.commit()
                rows = []
