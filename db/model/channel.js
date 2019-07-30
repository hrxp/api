// Todo
// Figure out how to reference anoter schema in Mongoose
// Explore populate to use with the reference https://mongoosejs.com/docs/populate.html
// Finalize schema's
// What type should we use for the timestamp
// What is the timestamp schema all about?
// Add dummy data to the database

const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  id: String,
  topic: String,
  purpose: { type: String, unique: true, required: true },
  memebers: [String],
  isArchived: String,
});

const messageSchema = new mongoose.Schema({
  id: String,
  ts: String,
  text: String,
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
  example: async () => {
    try {
      // const result = await db.query(`select * from test.user ${id ? `where id = ${id}` : ''}`);
      const result = 'hello world';
      return result;
    } catch (err) {
      return err;
    }
  },
};
