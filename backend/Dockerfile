FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY ./app .

EXPOSE 3000

CMD [ "python3", "server.py"]