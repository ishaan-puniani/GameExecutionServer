'use strict';

var express = require('express');
var controller = require('./controller');

var router = express.Router();//eslint-disable-line new-cap


router.get('/', controller.getCachedGames);
router.post('/', controller.execute);


module.exports = router;
