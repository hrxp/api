var mongoose = require('mongoose');
const { mongoURL } = require('../config');
const { Channel, User, Message } = require('../model/channel.js');

const insertDummyData = async () => {
  // make a connection
  mongoose.connect(mongoURL, { useNewUrlParser: true });

  // get reference to database
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  await db.once('open', async () => {
    try {
      console.log('Connection Successful!');

      // Dummy data
      const dummyChannel = {
        id: 'testChannel',
        topic: 'general',
        purpose: 'testChannel',
        members: ['member1', 'member2'],
        isArchived: 'yes',
      };

      const dummyMessage = {
        id: 'testMessage',
        ts: '10:00am',
        text: 'example message',
        channelId: 'a123456',
        files: [
          {
            id: 'aaaa',
            displayName: 'cv',
            fileType: 'pdf',
            downloadUrl: 'http://download.com/pdf',
          },
        ],
        replies: [{ id: 'a1234a', createdBy: 'user1', ts: '10:01am', text: 'example reply' }],
      };

      const dummyUser = {
        id: 'testUser',
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
  return;
};

const deleteDummyData = async () => {
  // make a connection
  mongoose.connect(mongoURL, { useNewUrlParser: true });

  // get reference to database
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  await db.once('open', async () => {
    try {
      console.log('Connection Successful!');

      // dummy id's
      const dummyChannelId = 'testChannel';
      const dummyMessageId = 'testMessage';
      const dummyUserId = 'testUser';

      await Channel.deleteOne({ id: dummyChannelId });
      await User.deleteOne({ id: dummyUserId });
      await Message.deleteOne({ id: dummyMessageId });

      console.log('Successfully deleted dummy data');
      mongoose.connection.close();
      return;
    } catch (err) {
      console.log('Error deleting dummy data: ', err);
    }
  });
  return;
};

module.exports = {
  insertDummyData,
  deleteDummyData,
};
