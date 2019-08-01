const mongoose = require('mongoose');
const { Channel, Users, Message } = require('../db/model/channel');
const { insertDummyData, deleteDummyData } = require('../db/dummyData/insertDummySchemaData');
var express = require('express');

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/index');
const should = chai.should();
chai.use(chaiHttp);

deleteDummyData();

describe('All Channels', () => {
  before(async () => {
    await insertDummyData();
    return;
  });
  describe('/channels: List of channels', () => {
    it('it should GET all the channels', done => {
      chai
        .request(server)
        .get('/channels')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[res.body.length - 1].id.should.equal('testChannel');
          done();
        });
    });
  });
});

describe('A channels Messages', () => {
  after(async () => {
    // runs after all tests in this block
    await deleteDummyData();
    process.exit();
  });
  describe('/channels/:channelId/messages', () => {
    it('it should GET all the messages for a channel', done => {
      chai
        .request(server)
        .get('/channels/testChannel/messages')
        .end(async (err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          // console.log(res.body);
          // res.body[res.body.length - 1].id.should.equal('testMessage');
          // await deleteDummyData();
          done();
        });
    });
  });
});
