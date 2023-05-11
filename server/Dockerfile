FROM ubuntu:20.04
RUN apt-get update && apt-get install -y curl 
RUN sudo apt-get install nodejs
RUN sudo apt-get install npm




FROM node:18.12.1
WORKDIR /
COPY package*.json  ./
RUN npm install 

COPY . .

EXPOSE 9090
CMD ["npm","start"]