FROM node:latest

ADD . /app
WORKDIR /app

RUN yarn
RUN yarn build

ENTRYPOINT [ "yarn", "start" ]