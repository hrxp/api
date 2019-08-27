var mongoose = require('mongoose');
const faker = require('faker');
const { mongoURL } = require('../config');
const { Channel, User, Message } = require('../models/channel.js.js');

const dummyChannels = () => {
  const channels = [];

  for (let i = 0; i < 20; i++) {
    let channel = {
      id: `testChannel${i}`,
      topic: faker.hacker.noun(),
      purpose: faker.hacker.phrase(),
      members: ['member1', 'member2'],
      isArchived: 'yes',
    };
    channels.push(channel);
  }

  return channels;
};

const dummyMessages = () => {
  const messages = [];

  for (let i = 0, j = 0; i < 100; i++, j++) {
    let message = {
      id: `testMessageId${i}`,
      ts: '10:00am',
      text: faker.hacker.phrase(),
      channelId: `testChannel${j}`,
      files: [
        {
          id: `testFile${i}`,
          displayName: 'cv',
          fileType: 'pdf',
          downloadUrl: 'http://download.com/pdf',
        },
      ],
      replies: [
        { id: `testReply${i}`, createdBy: 'user1', ts: '10:01am', text: faker.hacker.phrase() },
      ],
    };
    messages.push(message);
    // If testChannelId === 19, reset the variable to 0.
    if (j === 19) {
      j = 0;
    }
  }

  return messages;
};

const dummyUsers = () => {
  const users = [];

  for (let i = 0; i < 20; i++) {
    let user = {
      id: `testUser${i}`,
      profilePhoto: faker.image.avatar(),
      displayName: faker.hacker.noun(),
      realName: 'John Doe',
    };
    users.push(user);
  }

  return users;
};

const insertDummyData = () => {
  return new Promise((resolve, reject) => {
    // Make a connection
    mongoose.connect(mongoURL, { useNewUrlParser: true });

    // Get reference to database
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', async () => {
      try {
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
          channelId: 'testChannel',
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
        await Channel.collection.insertMany(dummyChannels());

        // Insert one dummy document into the user collection
        await User.collection.insertMany(dummyUsers());

        // Insert on dummy document into the message collection
        await Message.collection.insertMany(dummyMessages());

        console.log('Successfully inserted dummy data into collection');
        mongoose.connection.close();
        resolve();
      } catch (err) {
        console.log('Error inserting dummy data: ', err);
        reject(err);
      }
    });
  });
};

const deleteDummyData = () => {
  return new Promise((resolve, reject) => {
    // Make a connection
    mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log('hi');
    // Get reference to database
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', async () => {
      try {
        // Dummy id's
        const dummyChannelId = 'testChannel';
        const dummyMessageId = 'testMessage';
        const dummyUserId = 'testUser';

        await Channel.deleteOne({ id: dummyChannelId }).catch(err => console.log(err));
        await User.deleteOne({ id: dummyUserId });
        await Message.deleteOne({ id: dummyMessageId });

        console.log('Successfully deleted dummy data');
        mongoose.connection.close();
        resolve();
      } catch (err) {
        console.log('Error deleting dummy data: ', err);
        reject();
      }
    });
  });
};

module.exports = {
  insertDummyData,
  deleteDummyData,
};

insertDummyData();
