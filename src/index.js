const express = require('express');

// Init app
const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => res.send('<h1> Hello Tresmerge! hi </h1>'));

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
