// Todo
// Figure out how to reference anoter schema in Mongoose
// Explore populate to use with the reference https://mongoosejs.com/docs/populate.html
// Finalize schema's
// What type should we use for the timestamp
// What is the timestamp schema all about?
// Add dummy data to the database

const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  topic: String,
  purpose: { type: String, unique: true, required: true },
  memebers: [String],
  isArchived: String,
});

const messageSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  ts: String,
  text: String,
  channelId: String,
  files: [{ id: String, displayName: String, fileType: String, downLoadUrl: String }],
  replies: [
    {
      id: String,
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      ts: String,
      text: String,
    },
  ],
  ts: String,
});

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  profilePhoto: String,
  displayName: String,
  realName: String,
});

// Create an instance (document) of the challelSchema
const Channel = mongoose.model('Channel', channelSchema);

// Create an instance (document) of the userSchema
const User = mongoose.model('User', userSchema);

// Create an instance (document) of the messageSchema
const Message = mongoose.model('Message', messageSchema);

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
