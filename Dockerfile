FROM node:20-alpine3.17

ENV TZ Asia/Tokyo

WORKDIR /frontend

COPY package.json ./

RUN npm install