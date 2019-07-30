var mongoose = require('mongoose');
const { mongoURL } = require('../config');
const { Channel, User, Message } = require('../model/channel.js');

const insertDummyData = () => {
  // make a connection
  mongoose.connect(mongoURL, { useNewUrlParser: true });

  // get reference to database
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', async () => {
    try {
      console.log('Connection Successful!');

      // Dummy data
      const dummyChannel = {
        id: 'a123456',
        topic: 'general',
        purpose: 'general',
        members: ['member1', 'member2'],
        isArchived: 'yes',
      };

      const dummyMessage = {
        id: 'a1234',
        ts: '10:00am',
        text: 'example message',
        channelId: 'a123456',
        files: [],
        replies: [{ id: 'a1234a', createdBy: 'user1', ts: '10:01am', text: 'example reply' }],
      };

      const dummyUser = {
        id: 'user1',
        profilePhoto: 'http://example.com/photo',
        displayName: 'example name',
        realName: 'John Doe',
      };

      // Insert one dummy document into the channel collection
      await Channel.collection.insertOne(dummyChannel);

      // Insert one dummy document into the user collection
      await User.collection.insertOne(dummyUser);

      // Insert on dummy document into the message collection
      await Message.collection.insertOne(dummyMessage);

      console.log('Successfully inserted dummy data into collection');
      mongoose.connection.close();
    } catch (err) {
      console.log('Error inserting dummy data: ', err);
    }
  });
};

const deleteDummyData = async () => {
  // make a connection
  mongoose.connect(mongoURL, { useNewUrlParser: true });

  // get reference to database
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', async () => {
    try {
      console.log('Connection Successful!');

      // dummy id's
      const dummyChannelId = 'a123456';
      const dummyMessageId = 'a1234';
      const dummyUserId = 'user1';

      await Channel.deleteOne({ id: dummyChannelId });
      await User.deleteOne({ id: dummyUserId });
      await Message.deleteOne({ id: dummyMessageId });

      console.log('Successfully deleted dummy data');
      mongoose.connection.close();
    } catch (err) {
      console.log('Error deleting dummy data: ', err);
    }
  });
};

module.exports = {
  insertDummyData,
  deleteDummyData,
};
