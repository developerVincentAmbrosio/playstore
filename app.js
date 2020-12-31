const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/apps', (req, res) => {
  // ALL OUR CODE HERE
});

