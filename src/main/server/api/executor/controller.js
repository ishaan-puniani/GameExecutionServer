'use strict';

//import _ from 'lodash';
//var Slot_Server = require('Slot_Server');
//var JackOrBetter_Server = require('JackOrBetter_Server');
import logger from 'logger';

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
    var game = req.body.game,
        action = req.body.action;

    var params = {
        bet: parseFloat(req.body.bet),
        betLevel: req.body.betLevel ? parseFloat(req.body.betLevel) : 0,
        holdedCards: req.body.holdedCards,
        betLevelIdx: req.body.betLevelIdx ? parseFloat(req.body.betLevelIdx) : 0,
        isRestore: req.body.isRestore || false,
        restoredData: req.body.restoredData,
        cheat: req.body.cheat,
        roundId: req.body.roundId
    };

    logger.trace(game, params.roundId, "GES", "execute", action);

    if (!cache[game]) {
        cache[game] = require(game);
    }
    var gameResponse = cache[game][action](params);
    respondWithResult(res, 200)(gameResponse);
}

