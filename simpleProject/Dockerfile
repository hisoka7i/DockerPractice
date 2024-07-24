# specifying the base image 
FROM node:14-alpine

WORKDIR /usr/app
# dowloading and installing the dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./
# creating a deafult command
CMD ["npm","start"]