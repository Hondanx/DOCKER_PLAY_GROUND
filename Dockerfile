FROM node:20-alpine

WORKDIR /APP

COPY   . .

RUN npm install


EXPOSE 4000
CMD [ "npm","start" ]
