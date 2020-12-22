FROM node:latest

ADD . /app
WORKDIR /app

RUN yarn
RUN yarn generate

ENTRYPOINT [ "yarn", "start" ]