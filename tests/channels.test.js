//During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
let { Channel, Users, Message } = require('../db/model/channel');
var express = require('express');

process.env.NODE_ENV = 'test';

// const { insertDummyData, deleteDummyData } = require('../db/dummyData/insertDummySchemaData');
// const {
//   fetchChannel,
//   fetchChannels,
//   fetchMessage,
//   fetchMessages,
// } = require('../../db/model/channel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index');
let should = chai.should();

chai.use(chaiHttp);

describe('Channels', () => {
  /*
   * Test the /GET route for channels
   */
  describe('/channels: List of channels', () => {
    it('it should GET all the channels', done => {
      chai
        .request(server)
        .get('/channels')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
          server.close();
        });
    });
  });
});

describe('A channels Messages', () => {
  /*
   * Test the /GET route for a specific channel message
   */
  describe('/channels/:channelId/messags', () => {
    it('it should GET all the channels', done => {
      chai
        .request(server)
        .get('/channels/exampleChannel/messages')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
          process.exit();
        });
    });
  });
});
