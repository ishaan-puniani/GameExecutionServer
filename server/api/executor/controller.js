'use strict';

import _ from 'lodash';
var Slot_Server = require('Slot_Server');
var JackOrBetter_Server = require('JackOrBetter_Server');

var cache = {};
function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
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
export function getCachedGames(req, res) {
  respondWithResult(res, 200)(cache);
}

export function execute(req, res) {
  console.log(req.body);
  var game = req.body.game,
    action = req.body.action;

  var params = {
    bet: parseFloat(req.body.bet),
    betLevel: req.body.betLevel ? parseFloat(req.body.betLevel) : 0,
    holdedCards: req.body.holdedCards,
    betLevelIdx: req.body.betLevelIdx ? parseFloat(req.body.betLevelIdx) : 0,
    isRestore: req.body.isRestore || false,
    restoredData: req.body.restoredData,
    cheat: req.body.cheat
  };
  console.log("GEE : execute", game, action);
  console.log(req.body);
  if (!cache[game]) {
    cache[game] = require(game);
  }
  console.log(game, action, params);
  var gameResponse = cache[game][action](params);
  respondWithResult(res, 200)(gameResponse);

}

