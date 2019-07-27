// const db = require("../index");
// TODO, do we actually need to fetch a specific channel? What would the results be ?

module.exports = {
  fetchChannels: async () => {
    try {
      // TODO: fetch all the channels from the database
      const results = 'channels';
      return results;
    } catch (err) {
      return err;
    }
  },
  fetchMessages: async channelId => {
    try {
      // TODO: fetch all the messages for a specific channel
      const results = 'channelMessages';
      return results;
    } catch (err) {
      return err;
    }
  },
};
