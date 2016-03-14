'use strict';

var express = require('express');
var controller = require('./controller');

var router = express.Router();


router.get('/', controller.getCachedGames);
router.post('/', controller.execute);


module.exports = router;
