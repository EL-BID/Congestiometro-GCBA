CREATE EXTENSION btree_gist SCHEMA public;
CREATE EXTENSION btree_gin SCHEMA public;
--
--  dictionaries
--
CREATE TABLE public.streets (
  street_id SERIAL PRIMARY KEY,
  street_type integer NOT NULL,
  street_base_name TEXT NOT NULL,
  street_name TEXT NOT NULL,
  street_sufix text,
  line geometry NOT NULL,
  last_update TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE public.streets OWNER TO postgres;
---
CREATE TABLE public.jam_lines (
  line_id SERIAL PRIMARY KEY,
  street_id integer REFERENCES streets NOT NULL,
  line geometry(LINESTRING) UNIQUE,
  last_update TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE public.jam_lines OWNER TO postgres;
CREATE INDEX jam_lines_geom_index ON public.jam_lines USING GIST (line);
CREATE INDEX jam_lines_street_id_index ON public.jam_lines (street_id);
CREATE INDEX jam_lines_comb_index ON public.jam_lines USING GIST (line, street_id);
--
CREATE TABLE public.admin_levels (
  greater_admin_level_id integer NOT NULL,
  greater_admin_level_name text NOT NULL,
  lower_admin_level_id integer NOT NULL,
  lower_admin_level_name text NOT NULL,
  lines_ids text NOT NULL,
  streets_ids text NOT NULL,
  shape geometry(MultiPolygon) NOT NULL,
  last_update TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE public.admin_levels OWNER TO postgres;
--
-- main  tables
--
CREATE TABLE public.jams (
  uuid integer NOT NULL PRIMARY KEY,
  line_id integer NOT NULL,
  start_timestamp timestamp without time zone NOT NULL,
  end_timestamp timestamp without time zone NOT NULL,
  hour integer [] NOT NULL,
  is_working_day integer NOT NULL,
  delay real NOT NULL,
  length real NOT NULL,
  speed real NOT NULL,
  level integer NOT NULL
);
ALTER TABLE public.jams OWNER TO postgres;
CREATE INDEX jam_start_index ON public.jams (start_timestamp);
CREATE INDEX jam_end_index ON public.jams (end_timestamp);
CREATE INDEX jam_daterange_index ON public.jams (start_timestamp, end_timestamp DESC);
CREATE INDEX jam_hour_index ON public.jams USING GIN (hour);
CREATE INDEX jam_line_id_index ON public.jams (line_id);
CREATE INDEX jam_working_day_index ON public.jams (is_working_day);
CREATE INDEX jam_comb_index ON public.jams USING GIN (
  line_id,
  start_timestamp,
  end_timestamp,
  hour,
  is_working_day
);
---
CREATE TABLE public.users (
  id SERIAL,
  username TEXT PRIMARY KEY,
  hash TEXT NOT NULL,
  refreshToken TEXT,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()
);
ALTER TABLE public.users OWNER TO postgres;
---
-- pseudo tables for return type in functions
---
CREATE TABLE public.jams_agg_line (
  line_id integer NOT NULL,
  level integer NOT NULL
);
ALTER TABLE public.jams_agg_line OWNER TO postgres;
---
CREATE TABLE public.simple_line_type (line_id integer, street_id integer);
ALTER TABLE public.simple_line_type OWNER TO postgres;
---
CREATE TABLE public.histogram_type (
  index timestamp without time zone,
  val real NOT NULL,
  duration real NOT NULL,
  keep boolean
);
ALTER TABLE public.histogram_type OWNER TO postgres;
---
CREATE TABLE public.evolutivo_type (index text NOT NULL, val real NOT NULL);
ALTER TABLE public.evolutivo_type OWNER TO postgres;
---
CREATE TABLE public.comparativo_type (
  year integer NOT NULL,
  month integer NOT NULL,
  val real NOT NULL
);
ALTER TABLE public.comparativo_type OWNER TO postgres;
---
-- FUNCTIONS for graphql queries
---
CREATE OR REPLACE FUNCTION public.last_agg (anyelement, anyelement) RETURNS anyelement LANGUAGE sql IMMUTABLE STRICT PARALLEL SAFE AS 'SELECT $2';
CREATE AGGREGATE public.last (anyelement) (
  SFUNC = public.last_agg,
  STYPE = anyelement,
  PARALLEL = safe
);
---
CREATE OR REPLACE FUNCTION get_jams(
    date_from timestamp,
    date_to timestamp,
    hours int [],
    lines int [],
    working_days int []
  ) RETURNS SETOF jams AS $$
SELECT *
FROM public.jams
WHERE line_id = ANY(lines)
  AND hour && hours
  AND is_working_day = ANY(working_days)
  AND end_timestamp >= date_from
  AND start_timestamp <= date_to $$ LANGUAGE sql STABLE;
--
CREATE OR REPLACE FUNCTION get_jams_lines(
    date_from timestamp,
    date_to timestamp,
    hours int [],
    lines int [],
    working_days int [],
    agg_func text
  ) RETURNS SETOF jams_agg_line AS $$
SELECT line_id,
  CASE
    WHEN agg_func = 'mean' THEN round(avg(level), 0)
    WHEN agg_func = 'max' THEN max(level)
    WHEN agg_func = 'last' THEN last(level)
  END as level
FROM get_jams(
    date_from,
    date_to,
    hours,
    lines,
    working_days
  )
GROUP BY 1 $$ LANGUAGE sql STABLE;
---
CREATE OR REPLACE FUNCTION get_histogram(
    date_from timestamp,
    date_to timestamp,
    hours int [],
    lines int [],
    working_days int [],
    metric text
  ) RETURNS SETOF histogram_type AS $$ WITH selected_jams as (
    SELECT start_timestamp as s,
      end_timestamp as e,
      CASE
        WHEN metric = 'delay' THEN delay
        WHEN metric = 'length' THEN length
        WHEN metric = 'speed' THEN speed
      END as v
    FROM get_jams(
        date_from,
        date_to,
        hours,
        lines,
        working_days
      )
  ),
  hist_base as (
    SELECT f,
      sum(m) as m,
      sum(jam_count) as jam_count
    FROM (
        SELECT s as f,
          v as m,
          1 as jam_count
        FROM selected_jams
        UNION ALL
        (
          SELECT e as f,
            -1 * v as m,
            -1 as jam_count
          FROM selected_jams
        )
        UNION ALL
        (
          SELECT generate_series as f,
            0 as m,
            0 as jam_count
          from generate_series(
              date_from,
              date_to + interval '1 hour',
              INTERVAL '1 hour'
            )
        )
      ) temp
    GROUP BY 1
  ),
  hist_advance as (
    SELECT f as index,
      sum(m) over(
        ORDER BY f
      ) val,
      CASE
        WHEN metric = 'speed' THEN sum(jam_count) over(
          ORDER BY f
        )
        ELSE 1
      END as jam_count,
      EXTRACT(
        EPOCH
        FROM lead(f) over(
            order by f
          ) - f
      ) as duration
    FROM hist_base
  )
SELECT index,
  case
    when jam_count > 0 then val / jam_count
    else 0
  end as val,
  duration,
  case
    when metric = 'speed' then jam_count > 0
    and val > 0
    else true
  end as keep
FROM hist_advance $$ LANGUAGE sql STABLE;
---
CREATE OR REPLACE FUNCTION get_evolutivo(
    date_from timestamp,
    date_to timestamp,
    hours int [],
    lines int [],
    working_days int [],
    metric text,
    agg_func text
  ) RETURNS SETOF evolutivo_type AS $$
SELECT CASE
    WHEN date_from::date = date_to::date THEN extract(
      hour
      from index
    )::text
    ELSE index::date::text
  END as index,
  CASE
    WHEN agg_func = 'mean' THEN CASE
      WHEN metric = 'speed' THEN sum(val * duration) / sum(duration)
      ELSE CASE
        WHEN date_from::date = date_to::date THEN sum(val * duration) / (60 * 60)
        ELSE sum(val * duration) / (array_length(hours, 1) * 60 * 60)
      END
    END
    WHEN agg_func = 'max' THEN CASE
      WHEN metric = 'speed' THEN min(val)
      ELSE max(val)
    END
    WHEN agg_func = 'last' THEN last(val)
  END as val
FROM get_histogram(
    date_from,
    date_to,
    hours,
    lines,
    working_days,
    metric
  )
WHERE extract(
    hour
    from index
  ) = any(hours)
  AND index BETWEEN date_from AND date_to
  AND keep
group by 1
order by 1 $$ LANGUAGE sql STABLE;
---
CREATE OR REPLACE FUNCTION get_comparativo(
    date_from timestamp,
    date_to timestamp,
    hours int [],
    lines int [],
    working_days int [],
    metric text,
    agg_func text
  ) RETURNS SETOF comparativo_type AS $$
SELECT extract(
    year
    from index
  ) as year,
  extract(
    month
    from index
  ) as month,
  CASE
    WHEN agg_func = 'mean' THEN CASE
      WHEN metric = 'speed' THEN sum(val * duration) / sum(duration)
      ELSE sum(val * duration) / (30.5 * array_length(hours, 1) * 60 * 60)
    END
    WHEN agg_func = 'max' THEN CASE
      WHEN metric = 'speed' THEN min(val)
      ELSE max(val)
    END
    WHEN agg_func = 'last' THEN last(val)
  END as val
FROM get_histogram(
    date_from,
    date_to,
    hours,
    lines,
    working_days,
    metric
  )
WHERE extract(
    hour
    from index
  ) = any(hours)
  AND index BETWEEN date_from AND date_to
  AND keep
group by 1,
  2
order by 1,
  2 $$ LANGUAGE sql STABLE;
----
CREATE OR REPLACE FUNCTION get_summary(
    date_from timestamp,
    date_to timestamp,
    hours int [],
    lines int [],
    working_days int [],
    agg_func text
  ) RETURNS SETOF evolutivo_type AS $$
SELECT *
FROM (
    SELECT 'delay' as index,
      CASE
        WHEN agg_func = 'mean' THEN avg(val)
        WHEN agg_func = 'max' THEN max(val)
        WHEN agg_func = 'last' THEN last(val)
      END as val
    from get_evolutivo(
        date_from,
        date_to,
        hours,
        lines,
        working_days,
        'delay',
        agg_func
      )
  ) t
UNION ALL
(
  SELECT 'length' as index,
    CASE
      WHEN agg_func = 'mean' THEN avg(val)
      WHEN agg_func = 'max' THEN max(val)
      WHEN agg_func = 'last' THEN last(val)
    END as val
  FROM get_evolutivo(
      date_from,
      date_to,
      hours,
      lines,
      working_days,
      'length',
      agg_func
    )
)
UNION ALL
(
  SELECT 'speed' as index,
    CASE
      WHEN agg_func = 'mean' THEN avg(val)
      WHEN agg_func = 'max' THEN max(val)
      WHEN agg_func = 'last' THEN last(val)
    END as val
  FROM get_evolutivo(
      date_from,
      date_to,
      hours,
      lines,
      working_days,
      'speed',
      agg_func
    )
) $$ LANGUAGE sql STABLE;
----
CREATE OR REPLACE FUNCTION get_predictivo(
    date_from timestamp,
    date_to timestamp,
    hours int [],
    lines int [],
    working_days int [],
    metric text,
    agg_func text
  ) RETURNS SETOF evolutivo_type AS $$
select index,
  avg(val)
from (
    select CASE
        WHEN date_from::date = date_to::date THEN index
        ELSE (index::date + INTERVAL '7 DAYS')::date::text
      END as index,
      val
    from get_evolutivo(
        date_from::timestamp - INTERVAL '7 DAYS',
        date_to::timestamp - INTERVAL '7 DAYS',
        hours,
        lines,
        working_days,
        metric,
        agg_func
      )
    union all
    (
      select CASE
          WHEN date_from::date = date_to::date THEN index
          ELSE (index::date + INTERVAL '14 DAYS')::date::text
        END as index,
        val
      from get_evolutivo(
          date_from::timestamp - INTERVAL '14 DAYS',
          date_to::timestamp - INTERVAL '14 DAYS',
          hours,
          lines,
          working_days,
          metric,
          agg_func
        )
    )
    union all
    (
      select CASE
          WHEN date_from::date = date_to::date THEN index
          ELSE (index::date + INTERVAL '21 DAYS')::date::text
        END as index,
        val
      from get_evolutivo(
          date_from::timestamp - INTERVAL '21 DAYS',
          date_to::timestamp - INTERVAL '21 DAYS',
          hours,
          lines,
          working_days,
          metric,
          agg_func
        )
    )
  ) t
group by 1 $$ LANGUAGE sql STABLE;
---
CREATE OR REPLACE FUNCTION get_lines(polygon text) RETURNS SETOF simple_line_type AS $$
SELECT line_id,
  street_id
FROM public.jam_lines
WHERE ST_Within(line, polygon::geometry) $$ LANGUAGE sql STABLE;
