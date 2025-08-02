const express = require('express');
const mongoose = require('mongoose'); // Commented MongoDB code below
const redis = require('redis');
const os = require('os'); // Import os package for system information 
const { Client } = require('pg'); // Import pg package


// Init app
const PORT = process.env.PORT || 4000;
const app = express();

// connect to redis
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';

const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis ....'));
redisClient.connect();

// Connect to Postgres
const PG_USER = 'root';
const PG_PASSWORD = '1923';
const PG_PORT = 5432;
const PG_HOST = 'postgres';
const PG_DATABASE = 'postgres';

const pgClient = new Client({
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
});

pgClient.connect()
  .then(() => console.log('connected to postgres ...'))
  .catch((err) => console.log('failed to connect to postgres: ', err));

// Connect to MongoDB (commented)
/*
const DB_USER = 'root';
const DB_PASSWORD = '1923';
const DB_PORT = 27017;
const DB_HOST = 'mongo'; // Change to your MongoDB service name

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URI)
  .then(() => console.log('connected to db ...'))
  .catch((err) => console.log('failed to connect to db: ', err));
*/

app.get('/', async (req, res) => {
  await redisClient.set('products', 'products ... ');
  console.log(`traffic from ${os.hostname()}`);
  res.send('<h1>Hello Tresmerge!WE ARE LIVE</h1>');
});

app.get('/data', async (req, res) => {
  const products = await redisClient.get('products');
  console.log(`traffic from ${os.hostname()}`);
  res.send(`<h1>Hello from AWS!</h1><h2>${products}</h2>`);
});

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
