FROM node:20-alpine

WORKDIR /APP

COPY   package.json .

RUN npm install

COPY   . .

ENV PORT=4000

EXPOSE $PORT

CMD ["npm", "run", "start-dev"]