'use strict';

var app = require('../..');
import request from 'supertest';


describe('Error Redirection:', function() {

  describe('GET /api/unknownpath', function() {
	  var text;
    beforeEach(function(done) {
      request(app)
        .get('/api/unknownpath')
        .send()
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          
          text = JSON.stringify(res);
         
          done();
        });
    });

   it('should respond with text containing  : Page Not Found', function() {
         expect(text).to.have.string("Page Not Found");
    });
  });
});
