const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');


// Init app
const PORT = process.env.PORT || 4000;
const app = express();

// connect to redis
const redisClient = redis.createClient();
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis ....'));
redisClient.connect();

// Connect to MongoDB
const DB_USER = 'root';
const DB_PASSWORD = '1923';
const DB_PORT = 27017;
const DB_HOST = 'mongo'; // Change to your MongoDB service name

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URI)
  .then(() => console.log('connected to db ...'))
  .catch((err) => console.log('failed to connect to db: ', err));

app.get('/', (req, res) => res.send('<h1> Hello Tresmerge! hi </h1>'));

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
