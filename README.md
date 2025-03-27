# AF FRONTEND CHALLENGE README

This repo contains my solution to the Artisinal Futures Frontend Challenge. The purpose of the site is to load random pictures of cats from the cataas API. Below are instructions on how to build and run the Docker.

## Check the following downloads

Make sure that each of the following are installed on your system.
- [Node.js]:(https://nodejs.org/) 
- [Docker]:(https://www.docker.com/get-started)
- [Git]: (https://git-scm.com/)

## Instructions

# Clone the repo

git clone https://github.com/ssatarino/af-frontend-challenge.git
cd af-frontend-challenge

# Install dependencies

npm install

# Run the site with Docker

docker build -t af-frontend-challenge .
docker run -p 8080:8080 af-frontend-challenge

# Access

The app runs on port 8080 within the container.
It can then be accessed with http://localhost:8080.

# Done

Enjoy!





