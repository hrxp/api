const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Hido ho, Captn! Listening on port 3000.");
});
