from tensorflow.keras import layers, Model, callbacks
from shapely import wkb
import psycopg2

postgres_conn = psycopg2.connect(
    **{
        "host": "postgres",
        "port": 5432,
        "user": "postgres",
        "password": "congestiometro",
        "dbname": "postgres",
    }
)


def sampleGenerator():
    lines = pd.read_sql("SELECT line_id, line from jam_lines", postgres_conn)
    lines["x"] = lines.line.apply(lambda x: wkb.loads(x, hex=True).centroid.xy[0][0])
    lines["y"] = lines.line.apply(lambda x: wkb.loads(x, hex=True).centroid.xy[1][0])
    line_nn = KDTree(lines[["x", "y"]].values)

    date_range = pd.read_sql(
        "select min(start_timestamp)::date as start, max(start_timestamp)::date as end from jams",
        postgres_conn,
    )
    date_range = pd.Series(
        pd.date_range(date_range.start.values[0], date_range.end.values[0], freq="D")
    )
    date_range = date_range.iloc[365:-20]
    date_from = date_range.iloc[0].strftime("%Y-%m-%d")
    date_to = date_range.iloc[-1].strftime("%Y-%m-%d")

    with open("./query.sql") as query_string:
        q = query_string.read()
    cache = []
    while True:
        if random.randint(1, 100) < len(cache) and len(cache) > 0:
            yield cache[random.randint(0, len(cache) - 1)]
        sample = lines.sample(1)
        k = random.randint(10, 1000)
        lines_input = set(
            line_nn.query(sample[["x", "y"]].values, k=k, return_distance=False)[0]
        )
        hours = set(
            pd.Series(range(24)).sample(random.randint(1, 24)).sort_values().values
        )
        metric_input = random.randint(0, 2)
        metric = ["delay", "speed", "length"][metric_input]
        aggfun_input = random.randint(0, 2)
        agg_func = ["mean", "max", "last"][aggfun_input]
        history_input = pd.read_sql(
            q.format(
                **{
                    "date_from": f"{date_from} 00:00:00",
                    "date_to": f"{date_to} 23:59:59",
                    "hours": f"{hours}",
                    "lines": f"{lines_input}",
                    "working_days": "{0,1}",
                    "metric": f"{metric}",
                    "agg_func": f"{agg_func}",
                }
            ),
            postgres_conn,
        )
        week_input = pd.to_datetime(history_input["index"]).dt.isocalendar().week
        dow_input = pd.to_datetime(history_input["index"]).dt.dayofweek
        y = history_input["val"].clip(1e-16).values
        history_input = history_input[["val7", "val14", "val21", "val364"]].values
        lines_input = np.repeat([list(lines_input)], history_input.shape[0], axis=0)
        week_input = week_input.astype(int).values[:, np.newaxis]
        dow_input = dow_input.astype(int).values[:, np.newaxis]
        metric_input = np.repeat([[metric_input]], history_input.shape[0], axis=0)
        aggfun_input = np.repeat([[aggfun_input]], history_input.shape[0], axis=0)
        res = (
            (
                lines_input,
                week_input,
                dow_input,
                metric_input,
                aggfun_input,
                history_input,
            ),
            y,
        )
        yield (res)
        cache.append(res)


gen = sampleGenerator()


def train():
    dow_input = layers.Input(shape=(1,))
    week_input = layers.Input(shape=(1,))
    lines_input = layers.Input(shape=(None,))

    metric_input = layers.Input(shape=(1,))
    aggfun_input = layers.Input(shape=(1,))

    history_input = layers.Input(shape=(4,))

    model = layers.Embedding(300000, 4)(lines_input)
    model = layers.GlobalAveragePooling1D()(model)
    model = layers.Flatten()(model)
    model = layers.Concatenate()(
        [
            model,
            layers.Flatten()(layers.Embedding(55, 2)(week_input)),
            layers.Flatten()(layers.Embedding(8, 2)(dow_input)),
        ]
    )

    model = model * layers.Concatenate()(
        [
            layers.Flatten()(layers.Embedding(3, model.shape[-1] // 2)(metric_input)),
            layers.Flatten()(
                layers.Embedding(3, model.shape[-1] - model.shape[-1] // 2)(
                    aggfun_input
                )
            ),
        ]
    ) + layers.Concatenate()(
        [
            layers.Flatten()(layers.Embedding(3, model.shape[-1] // 2)(metric_input)),
            layers.Flatten()(
                layers.Embedding(3, model.shape[-1] - model.shape[-1] // 2)(
                    aggfun_input
                )
            ),
        ]
    )

    model = layers.Concatenate()([model, history_input])

    model = layers.BatchNormalization()(model)

    model = layers.Dropout(0.1)(model)
    model = layers.Dense(model.shape[-1] * 2, activation="relu")(model)
    model = layers.LayerNormalization(epsilon=1e-6)(model)

    model = layers.Dropout(0.1)(model)
    model = layers.Dense(model.shape[-1] // 2, activation="relu")(model)
    model = layers.LayerNormalization(epsilon=1e-6)(model)

    model = layers.Dropout(0.1)(model)
    model = layers.Dense(int(model.shape[-1] // 2), activation="relu")(model)
    model = layers.LayerNormalization(epsilon=1e-6)(model)

    model = layers.Dropout(0.1)(model)
    model = layers.Dense(1, activation="relu")(model)
    model = Model(
        inputs=[
            lines_input,
            week_input,
            dow_input,
            metric_input,
            aggfun_input,
            history_input,
        ],
        outputs=model,
    )
    model.compile("sgd", "mean_absolute_percentage_error")

    early_stopping = callbacks.EarlyStopping(
        monitor="val_mean_absolute_percentage_error",
        patience=5,
        restore_best_weights=True,
        mode="min",
    )

    for data in dataGen():
        try:
            model.fit(
                data,
                batch_size=256,
                epochs=100,
                validation_data=data,
                callbacks=[early_stopping],
            )
        except:
            sleep(10000)  # milliseconds
            pass
    return model

