// TODOS
// Figure out how to reference anoter schema in Mongoose
// Explore populate to use with the reference https://mongoosejs.com/docs/populate.html
// Update the openAPI document
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new mongoose.Schema({
  slackId: { type: String, unique: true },
  name: String,
  topic: String,
  purpose: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  isArchived: Boolean,
});

const messageSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ts: String,
  type: String,
  text: String,
  channelName: String,
  channelId: String,
  files: [{ slackId: String, displayName: String, fileType: String, downloadUrl: String }],
  replies: [
    {
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      ts: String,
      type: String,
      channelName: String,
      channelId: String,
      text: String,
      files: [{ slackId: String, displayName: String, fileType: String, downloadUrl: String }],
    },
  ],
});

const userSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  slackId: { type: String, unique: true },
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
      console.log('Error fetching channels: ', err);
      return err;
    }
  },
  fetchMessages: async channelName => {
    try {
      const messages = await Message.find({ channelName: channelName }).populate('createdBy');
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
