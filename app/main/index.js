var express = require('express'),
    middlewares = require('../auth/middlewares'),
    controllers = require('./controllers');

var main = module.exports = express.Router();

main.get('/*', middlewares.requiresLogin, controllers.main);
