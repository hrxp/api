const mongoose = require('mongoose');
const { Channel, User, Message } = require('../../../db/model/channel');
const db = require('../../../db/index');

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../index');
const should = chai.should();
chai.use(chaiHttp);

describe('channel', () => {
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

  let newChannel = new Channel(dummyChannel);
  let newUser = new User(dummyUser);
  let newMessage = new Message(dummyMessage);

  beforeEach(async () => {
    try {
      await newChannel.save();
      await newUser.save();
      await newMessage.save();
    } catch (err) {
      err;
    }
  });

  afterEach(async () => {
    const dummyChannelId = 'testChannel';
    const dummyMessageId = 'testMessage';
    const dummyUserId = 'testUser';
    try {
    } catch (err) {
      await Channel.deleteOne({ id: dummyChannelId }).catch(err => console.log(err));
      await User.deleteOne({ id: dummyUserId });
      await Message.deleteOne({ id: dummyMessageId });
    }
  });

  describe('All channels', () => {
    it('it should GET all the channels', done => {
      chai
        .request(server)
        .get('/channels')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[res.body.length - 1].id.should.equal('testChannel');
          server.close();
          done();
        });
    });
  });

  describe('A channel messages', () => {
    it('it should GET all the messages for a channel', done => {
      chai
        .request(server)
        .get('/channels/testChannel/messages')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          // res.body[res.body.length - 1].id.should.equal('testMessage');

          done();
        });
    });
  });
});
