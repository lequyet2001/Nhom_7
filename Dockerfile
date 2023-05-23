# Specify the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY server/package*.json ./server/

# Install server dependencies
RUN cd server && npm install

# Copy the server code to the container
COPY server/. ./server/

# Copy the client code to the container
COPY frontend/. ./frontend/

# Expose the server port
EXPOSE 3000

# Start the server
CMD ["node", "server/server.js"]
