# Nhom_7

# Docker Build and Deploy Workflow

This repository contains the source code and configuration files for the **Docker Build and Deploy** workflow. The workflow is triggered automatically on the `main` branch when there is a push event. It builds a Docker image, pushes it to Docker Hub, and deploys a Docker container.

## Workflow Steps

1. **Checkout Repository**
   - Action: [actions/checkout@v2](https://github.com/actions/checkout)
   - Description: This step checks out the repository code.

2. **Set up Node.js**
   - Action: [actions/setup-node@v2](https://github.com/actions/setup-node)
   - Description: Sets up Node.js by installing the specified Node.js version (14 in this case).

3. **Install server dependencies**
   - Description: Installs server dependencies using the `npm install` command.
   - Working Directory: `./server`

4. **Build Docker image**
   - Description: Builds a Docker image using the `docker build` command.
   - Command:
     ```shell
     docker build -t hoho25a5haha/my-app:latest .
     ```

5. **Log in to Docker Hub**
   - Description: Logs in to Docker Hub using the `docker login` command.
   - Command:
     ```shell
     docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}
     ```

6. **Push Docker image**
   - Description: Pushes the Docker image to the Docker Hub repository.
   - Command:
     ```shell
     docker push hoho25a5haha/my-app:latest
     ```

7. **Deploy Docker container**
   - Description: Deploys a Docker container using the `docker run` command.
   - Command:
     ```shell
     docker run -d -p 3000:3000 hoho25a5haha/my-app:latest
     ```

## Dockerfile

The Dockerfile specifies the steps to build the Docker image for the application. Here is the breakdown of the Dockerfile contents:

```Dockerfile
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
CMD ["node", "server/index.js"]
