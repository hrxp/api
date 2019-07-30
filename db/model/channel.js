// Todo
// Figure out how to reference anoter schema in Mongoose
// Explore populate to use with the reference https://mongoosejs.com/docs/populate.html
// Finalize schema's
// What type should we use for the timestamp
// What is the timestamp schema all about?
// Add dummy data to the database
// Find By messageId.
const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  id: String,
  topic: String,
  purpose: { type: String, unique: true, required: true },
  members: [String],
  isArchived: String,
});

const messageSchema = new mongoose.Schema({
  id: String,
  ts: String,
  text: String,
  channelId: String,
  files: [{ id: String, displayName: String, fileType: String, downloadUrl: String }],
  replies: [
    {
      id: String,
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      ts: String,
      text: String,
    },
  ],
});

const userSchema = new mongoose.Schema({
  id: String,
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
  fetchChannels: async channelId => {
    try {
      // TODO: fetch all the channels from the database
      const channels = Channel.find();
      return channels;
    } catch (err) {
      return err;
    }
  },
  fetchMessages: async channelId => {
    try {
      // TODO: fetch all the messages for a specific channel

      const messages = Message.find({ channelId: channelId });
      return messages;
    } catch (err) {
      return err;
    }
  },
};

module.exports = {
  Channel,
  User,
  Message,
};
