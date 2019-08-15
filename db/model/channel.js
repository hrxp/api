// TODOS
// Figure out how to reference anoter schema in Mongoose
// Explore populate to use with the reference https://mongoosejs.com/docs/populate.html
// Update the openAPI document
const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  topic: String,
  purpose: { type: String, unique: true, required: true },
  members: [String],
  isArchived: String,
});

const messageSchema = new mongoose.Schema({
  user: String,
  ts: String,
  type: String,
  text: String,
  channelName: String,
  files: [{ id: String, displayName: String, fileType: String, downloadUrl: String }],
  replies: [
    {
      user: String,
      ts: String,
      type: String,
      ChannelName: String,
      text: String,
      files: [{ id: String, displayName: String, fileType: String, downloadUrl: String }],
    },
  ],
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
  fetchChannels: async channelId => {
    try {
      const channels = await Channel.find();
      return channels;
    } catch (err) {
      return err;
    }
  },
  fetchMessages: async channelName => {
    try {
      console.log(channelName);
      const messages = await Message.find({ channelName: channelName });
      console.log(messages);
      return messages;
    } catch (err) {
      console.log('Error posting a message: ', err);
      return err;
    }
  },
  Channel,
  User,
  Message,
};
