FROM python:3.9.7-slim

COPY . /app

WORKDIR /app

RUN apt-get update \
  && apt-get -y install libpq-dev gcc \
  && pip install -r requirements.txt

CMD ["python", "-u", "main.py"]
