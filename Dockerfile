FROM node:20.12.2-alpine

ENV TZ Asia/Tokyo

WORKDIR /frontend

COPY package.json yarn.lock ./

RUN yarn install

COPY . .