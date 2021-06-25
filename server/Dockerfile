FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn run data:import

RUN yarn install


COPY . .

EXPOSE 5000

CMD [ "server.js" ]




