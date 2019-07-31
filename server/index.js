const db = require('../db/index');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
let config = require('config');
/*
 * Use middle ware
 */
// Channel router
const channel = require('./controller/channel.js');
// Parses incoming requests with JSON payloads
app.use(express.json());
// 	HTTP request logger if we are not in the test environment
if (process.env.NODE_ENV !== 'test') {
  // Use morgan to log at command line
  app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}
// Enable cross-origin resource sharing (CORS) with various options.
app.use(cors());
/*
 * Routes
 */
app.get('/', (req, res) => {
  res.send('example endpoint');
});

app.use('/channels', channel);

const server = app.listen(3000, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('Hido ho, Captn! Listening on port 3000.');
  }
});

// For testing
module.exports = server;
