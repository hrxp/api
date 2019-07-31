const mongoose = require('mongoose');
const { mongoURL } = require('./config');

const db = mongoose.connect(mongoURL, { useNewUrlParser: true, useCreateIndex: true });

db.then(() => console.log(`Connected to: hrxp-api-database`)).catch(err => {
  console.log(`There was a problem connecting to mongo at: ${mongoURL}`);
  console.log(err);
});

module.exports = db;
