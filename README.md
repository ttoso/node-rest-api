# REST API using Nodejs

## Description
Little boilerplate for an API for nodejs.
It uses:
- express as the server
- joi as request validator
- mongoose as ORM

## Setup for local development
Needs docker and docker-compose to run, you can deploy it simply with the command
```bash
docker-compose up --build
```
This will start:
1. The API container, exposing it at localhost:3000.
2. A mongodb container that will create a database called testDB with newspapers and publishers collection and create a publisher.
3. A mongo-express container with the UI exposed in localhost:8081 as a GUI to manage the DB.

## Production deployment
As the app is contanerized would be easy just uploading the image to a registry and deploy it into a cloud (i.e. AWS EC2) or into a kubernetes cluster.