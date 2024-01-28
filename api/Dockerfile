# Use an official Python runtime as the parent image 
FROM python:3.11.3-slim

WORKDIR /usr/src/app

# Copy the current directory contents into the containers /app
COPY ./requirements.txt /usr/src/app/requirements.txt

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Add application
COPY . /usr/src/app

CMD uvicorn main:app --reload
