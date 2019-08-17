const db = require('../db/index');
const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const YAML = require("js-yaml")
const swaggerUi = require('swagger-ui-express');

const app = express();
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
// OpenAPI documentation
app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(
  YAML.safeLoad(
    fs.readFileSync(
      path.join(__dirname, './openapi.yaml'), 
      "utf8"
    )
  )
));

// Routes
app.use('/channels', channel);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Hido ho, Captn! Listening on port ${PORT}.`);
  }
});

// For testing
module.exports = server;
