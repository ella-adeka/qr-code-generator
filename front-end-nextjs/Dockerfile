# Use an official Node runtime as the parent image 
FROM node:10.16.0-alpine

# Set the working directory
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# Expose the port 3000
EXPOSE 3000

# Run the server
CMD [ "npm", "run", "dev" ]
