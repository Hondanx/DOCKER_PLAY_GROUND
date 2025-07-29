FROM node:20-alpine

WORKDIR /APP

COPY   package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "PRODUCTION"] ; \
then npm install --only=production; \
else npm install; \
fi

COPY   . .

ENV PORT=4000

EXPOSE $PORT

CMD ["npm", "run", "start-dev"]