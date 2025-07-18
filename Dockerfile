FROM node:14-alpine

WORKDIR /APP

RUN npm install

COPY .  .

EXPOSE 4000
CMD [ "npm","start" ]