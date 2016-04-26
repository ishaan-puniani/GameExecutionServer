'use strict';

var app = require('../..');
import request from 'supertest';


describe('Executor API:', function() {

  describe('POST init /api/execute', function() {
    var things;
    beforeEach(function(done) {
      request(app)
        .post('/api/execute')
        .send({
          game: 'Slot_Server',
          action: 'init'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          things = res.body;
          done();
        });
    });

     it('should respond with JSON', function() {
      expect(things).to.be.instanceOf(Object);
    });

  });
  
    describe('POST spin /api/execute', function() {
	  var things;
    beforeEach(function(done) {
      request(app)
        .post('/api/execute')
        .send({
          game: 'Slot_Server',
          action: 'spin'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          things = res.body;
          done();
        });
    });

    it('should respond with JSON', function() {
      expect(things).to.be.instanceOf(Object);
    });

  });
  
  
});
