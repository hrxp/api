// TODOS
// Figure out how to reference anoter schema in Mongoose
// Explore populate to use with the reference https://mongoosejs.com/docs/populate.html
const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  topic: String,
  purpose: { type: String, unique: true, required: true },
  members: [String],
  isArchived: String,
});

const messageSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  ts: String,
  text: String,
  channelId: String,
  files: [{ id: String, displayName: String, fileType: String, downloadUrl: String }],
  replies: [
    {
      id: { type: String, unique: true },
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      ts: String,
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
  fetchMessages: async channelId => {
    try {
      const messages = await Message.find({ channelId: channelId });
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
