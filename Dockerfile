FROM node:20.12.2-alpine

ENV TZ Asia/Tokyo

WORKDIR /frontend

RUN corepack enable && yarn set version 4.1.0 && yarn config set nodeLinker pnp

COPY package.json yarn.lock ./

RUN yarn install

COPY . .