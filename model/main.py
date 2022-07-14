import tensorflow as tf
import psycopg2
from flask import Flask, request, jsonify

app = Flask(__name__)

try:
    model = tf.keras.models.load_model("./model")
except:
    from train import train

    model = train()

postgres_conn = psycopg2.connect(
    **{
        "host": "postgres",
        "port": 5432,
        "user": "postgres",
        "password": "congestiometro",
        "dbname": "postgres",
    }
)


@app.route("/predict", methods=["POST"])
def predict():
    try:
        params = request.json["params"]
        with open("./query.sql") as query_string:
            q = query_string.read()
            with postgres_conn.cursor() as cursor:
                cursor.execute(q, params)
                res = cursor.fetchall()
                return model(res)
    except Exception as err:
        app.logger.error(err)
        return jsonify({"status": "unexpected error"}), 500


if __name__ == "__main__":
    app.run(host="localhost", port=6001, debug=True)
