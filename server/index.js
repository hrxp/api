const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const channel = require('./controller/channel.js');
// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('example endpoint');
});

// Routes
app.use('/hello', channel);

app.listen(3000, () => {
  console.log('Hido ho, Captn! Listening on port 3000.');
});
