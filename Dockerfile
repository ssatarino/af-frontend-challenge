FROM node:18

# Set directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install `serve` globally
RUN npm install -g serve

# Copy the rest of the application files
COPY . .

# Expose the port
EXPOSE 8080

# Serve from the root (or other folder if necessary)
CMD ["serve", "-s", ".", "-l", "8080"]
