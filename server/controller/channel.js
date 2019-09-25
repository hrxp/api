// TODO:
// What would the channel/:channelID return? => I'm thinking we don't need this?
// Are we querying for a specific message?
// How do we handle pagination for messages?
const data = require('../../data.json')
console.log(data);
const express = require('express');
const router = express.Router();
const { example } = require('../../db/model/channel');
const {
  fetchChannel,
  fetchChannels,
  fetchMessage,
  fetchMessages,
} = require('../../db/model/channel');

// router.use(express.json());
router.get('/', async (req, res) => {
  try {
    const results = await fetchChannels();
    results.filter(result => {
      return !data.restrict.includes(result.name);
    });
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/:channelName/messages', async (req, res) => {
  const { channelName } = req.params;
  try {
    const results = await fetchMessages(channelName);
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/:channelId/messages/:messageId', async (req, res) => {
  const { channelId, messageId } = req.params;
  try {
    const results = await fetchMessage(channelId, messageId);
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
