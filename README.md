# notflix-unsplash-proxy

A proxy for forwarding unsplash requests

The purpose of this proxy is to not expose the api access key to the public

## Requirements

- To build the docker image and run the server with docker you require docker
- This project was built on node v14.17.4 should you want to run it locally
- An unsplash ACCESS_KEY (Create a developer account with unsplash to aquire one)
- Ensure you have your access key set as an environment variable : UNSPLASH_ACCESS_KEY

## Start server

To start the server run `npm run start`

## Docker

To build the docker image run `npm run build`

To start the server with docker run `npm run compose-up`

To remove the docker compose container run `npm run compose-down`

## VS Code

Should you run this project with vscode there are a few utility tasks available
