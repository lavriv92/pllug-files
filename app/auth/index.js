var express = require('express'),
    User = require('../account/models').User;

var controllers = require('./controllers');

var auth = module.exports = express.Router();

auth.get('/sign-in/', controllers.signIn);
auth.post('/sign-in/', controllers.signIn);
