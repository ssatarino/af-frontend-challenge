# use image
FROM node:18

# set directory
WORKDIR /app

# copy package.json and install dependencies
COPY package*.json ./

# install dependencies
RUN npm install

# install `serve` globally
RUN npm install -g serve

# copy  rest of the application files
COPY . .

# port
EXPOSE 8080

# run the app with `serve` to serve the build
CMD ["serve", "-s", "build", "-l", "8080"]
