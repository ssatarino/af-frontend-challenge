# AF Frontend Challenge

This repo contains my solution to the Artisanal Futures Frontend Challenge. The purpose of the site is to load random pictures of cats from the [CATAAS API](https://cataas.com/). Below are instructions on how to build and run the Docker container.

## Prerequisites

Make sure that each of the following are installed on your system:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the repo + Build 
#### Please note port 8080 we use within the Docker container to run

```bash
git clone https://github.com/ssatarino/af-frontend-challenge.git
cd af-frontend-challenge
npm install
docker build -t cat-app .
docker run -p 8080:8080 cat-app