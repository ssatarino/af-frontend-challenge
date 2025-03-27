# Step 1: Use Node.js image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install `serve` globally
RUN npm install -g serve

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose port
EXPOSE 8080

# Step 7: Run the app with `serve` to serve the build
CMD ["serve", "-s", "build", "-l", "8080"]
