'use strict';

import _ from 'lodash';
var Slot_Server = require('Slot_Server');
var cache = {}; 
function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}


/*
function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}
*/

export function execute(req, res) {
var game = req.body.game,
action = req.body.action;
console.log(game,action);
if(!cache[game]){
    cache[game] = require(game); 
}

  respondWithResult(res,200)(cache[game][action]());  
  
}

