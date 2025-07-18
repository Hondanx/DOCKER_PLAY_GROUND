const express = require('express');

// Init app
const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send('<h1> Hello Tresmerge</h1>'));

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
