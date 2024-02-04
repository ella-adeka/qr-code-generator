# devops-qr-code-generator

This is the sample application for the DevOps Capstone Project.
It generates QR Codes for the provided URL, the front-end is in NextJS and the API is written in Python using FastAPI.

## Tools
| Order   | Concepts                    | Tools                                     |
| :---    | :----:                      |     ---:                                  |
| 1       | CI/CD                       | GitHub Actions                            |
| 2       | IaC                         | AWS CloudFormation                        |
| 3       | Containers                  | Docker                                    |
| 4       | Containers orchestration    | Kubernetes                                |
| 5       | Monitoring                  | CloudWatch Container Metrics and Grafana  |

## Project

## Architecture

## Application

**Front-End** - A web application where users can submit URLs.

**API**: API that receives URLs and generates QR codes. The API stores the QR codes in cloud storage(AWS S3 Bucket).

## Prerequisites
- AWS account with appropriate access
- A Docker account
- A GitHub repository

## Steps
### 1. Run locally
#### API
The API code exists in the `api` directory. You can run the API server locally:
- Clone this repo
- Make sure you are in the `api` directory
- Create a virtualenv by typing in the following command: `python3 -m venv .venv`
- Install the required packages: `pip install -r requirements.txt`
- Create a `.env` file, and add you AWS Access and Secret key, check  `.env.example`
- Also, change the BUCKET_NAME to your S3 bucket name in `main.py`
- Run the API server: `uvicorn main:app --reload`
- Your API Server should be running on port `http://localhost:8000`

#### Front-end
The front-end code exits in the `front-end-nextjs` directory. You can run the front-end server locally:
- Clone this repo
- Make sure you are in the `front-end-nextjs` directory
- Install the dependencies: `npm install`
- Run the NextJS Server: `npm run dev`
- Your Front-end Server should be running on `http://localhost:3000`

### 2. Create the repository
- Create a new GitHub repository 
- Open the repository Settings, and go to Secrets and variables > Actions.
- Create a new secret named `DOCKERHUB_USERNAME` and your Docker ID as value.
- Create a new Personal Access Token (PAT) for Docker Hub. You can name this token `qrcodeci`.
- Add the PAT as the second secret in your GitHub repository, with the name `DOCKERHUB_TOKEN`.

### 3. Containerization with Docker
- Create Dockerfiles for Frontend and API in the respective directories
- For the API
``` Dockerfile
# Use an official Python runtime as the parent image 
FROM python:3.11.3-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the containers /app
COPY ./requirements.txt /usr/src/app/requirements.txt

# Install the dependencies
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Add application
COPY . /usr/src/app

# Run the API server
CMD uvicorn main:app --reload
```

- For the frontend
``` Dockerfile
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
```

After creating Docker images, we deploy the containers to a Kubernetes cluster. Kubernetes orchestrates the deployment, scaling, and management of our containerized applications.

### 4. Container Orchestration with Kubernetes
- Containerization with Docker is the first step vefore orchestration.

- Deployment YAML files (`frontend-deployment.yaml` and `api-deployment.yaml`) specify the desired state of your applications. Service YAML files (`frontend-service.yaml` and `api-service.yaml`) define network services.

- Use kubectl apply to deploy your applications to the Kubernetes cluster.
```bash
kubectl apply -f kubernetes/frontend/frontend-deployment.yaml
kubectl apply -f kubernetes/frontend/frontend-service.yaml

kubectl apply -f kubernetes/api/api-deployment.yaml
kubectl apply -f kubernetes/api/api-service.yaml
```

### 5. CI/CD with GitHub Actions
- Define the Github Actions workflow steps
- Run the workflow

### 5. IaC with CloudFormation
- 

### 6. Monitoring with CloudWatch Container Metrics and Grafana


## Author

[Rishab Kumar](https://github.com/rishabkumar7)

## License

[MIT](./LICENSE)
