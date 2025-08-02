FROM node:20-alpine AS base 

WORKDIR /APP

COPY   package.json .

ENV PORT=4000

EXPOSE $PORT

FROM base AS development

RUN npm install mongoose

RUN npm install redis

RUN npm install

RUN npm i pg 

COPY   . .

CMD ["npm", "run", "start-dev"]

FROM base AS production

RUN npm install mongoose

RUN npm install redis

RUN npm install --only=production

RUN npm i pg

COPY . .

CMD ["npm" , "start"]

