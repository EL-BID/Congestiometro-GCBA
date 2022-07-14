FROM tensorflow/tensorflow

COPY . /app

WORKDIR /app

RUN apt-get update \
  && apt-get -y install libpq-dev gcc \
  && python -m pip install psycopg2-binary \
  && pip install -r requirements.txt
