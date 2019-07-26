const express = require('express');
const router = express.Router();
const { example } = require('../../db/model/channel');
// const { getAll, getOne, create, update } = require('../model/CRUD');

// router.use(express.json());
router.get('/', async (req, res) => {
  try {
    const results = await example();
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
