const mongoose = require("mongoose");

const db = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

db.then(() => console.log(`Connected to: hrxp-api-database`)).catch(err => {
  console.log(`There was a problem connecting to mongo at: ${mongoURL}`);
  console.log(err);
  process.exit(1);
});

module.exports = db;
