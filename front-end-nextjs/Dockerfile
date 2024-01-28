# Use an official Python runtime as the parent image 
FROM node:10.16.0-alpine

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install dependencies
COPY package.json /usr/src/app/package.json


RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
