const db = require('../db/index');
const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const YAML = require("js-yaml")
const swaggerUi = require('swagger-ui-express');

const app = express();
// Channel router
const channel = require('./controller/channel.js');
// Parses incoming requests with JSON payloads
app.use(express.json());
// 	HTTP request logger.
app.use(morgan('dev'));
// Enable cross-origin resource sharing (CORS) with various options.
app.use(cors());

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

app.listen(3000, () => {
  console.log('Hido ho, Captn! Listening on port 3000.');
});
