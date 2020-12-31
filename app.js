const express = require('express');
const morgan = require('morgan');
const store = require('./playstore.js');

const app = express();

app.use(morgan('common'));

app.get('/apps', (req, res) => {
  res
    .json(results);
});

module.exports = app;