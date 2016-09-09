'use strict';

//import _ from 'lodash';
//var Slot_Server = require('Slot_Server');
//var JackOrBetter_Server = require('JackOrBetter_Server');

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


    console.log("1");
    console.log(cache);
    if (!cache[game]) {
        console.log("2");
        cache[game] = require(game);
    }
    console.log("3");

    console.log(game, action, params);
    console.log("4");

    var gameResponse = {};
    try {
        console.log("5");
        console.log(cache);
        console.log(cache[game]);
        console.log(cache[game][action]);

        gameResponse = cache[game][action](params);
    } catch (ex) {
        console.log("6");
        console.log(ex);
    }
    console.log("gameResponse", gameResponse);
    respondWithResult(res, 200)(gameResponse);

}

