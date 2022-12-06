'use strict';

// 3rd party requirements
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3002;
const authRouter = require('./auth/router');


// set up CORS
app.use(cors());

// access json from request body
app.use(express.json());

// process FORM input and add to request body
app.use(express.urlencoded({ extended: true }));
app.use(authRouter);


module.exports = {
  app,
  start: () => app.listen(PORT, console.log('server running on port', PORT)),
};
