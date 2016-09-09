'use strict';

var app = require('./');
import request from 'supertest';


describe('Routing:', function () {

    describe('GET /unknownpath', function () {
        var text;
        beforeEach(function (done) {
            request(app)
                .get('/unknownpath')
                .send()
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    text = res.text;
                    done();
                });
        });

        it('should respond with text containing title : Game Execution Server', function () {
            expect(text).to.have.string("<title>Game Execution Server</title>");
        });
    });
});
