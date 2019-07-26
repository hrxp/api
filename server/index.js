const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
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

app.use('/hello', channel);

app.listen(3000, () => {
  console.log('Hido ho, Captn! Listening on port 3000.');
});
