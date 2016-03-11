'use strict';

var proxyquire = require('proxyquire').noPreserveCache();
var CtrlStub = {
  execute: 'ctrl.execute'
};

var routerStub = {
  get: sinon.spy(),
  post: sinon.spy()
 
};

// require the index with our stubbed out modules
var executeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './controller': CtrlStub
});

describe('Executor API Proxy Router:', function() {

  it('should return an express router instance', function() {
    expect(executeIndex).to.equal(routerStub);
  });

  describe('POST /api/execute', function() {
    it('should route to controller.execute', function() {
      expect(routerStub.post
        .withArgs('/', 'ctrl.execute')
        ).to.have.been.calledOnce;
    });

  });



});
