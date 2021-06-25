FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./



RUN yarn install

RUN yarn run data:import
COPY . .

EXPOSE 5000

CMD [ "server.js" ]




