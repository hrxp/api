// TODO:
// What would the channel/:channelID return? => I'm thinking we don't need this?
// Are we querying for a specific message?
// How do we handle pagination for messages?

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
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/:channelId', async (req, res) => {
  const { channelId } = req.params;

  try {
    const results = await fetchChannel(channelId);
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/:channelId/messages', async (req, res) => {
  const { channelId } = req.params;
  try {
    const results = await fetchMessages(channelId);
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
