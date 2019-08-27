const express = require('express');
const router = express.Router();

const searchMessages = require('../../db/models/index.js');

router.get('/:word', async (req, res) => {
  const { word, firstQ } = req.params;
  try {
    const found = searchMessages(word, firstQ);
    res.status(200).send(found);
  } catch(err) {
    res.status(404).send(err);
  }
})

module.exports = router;