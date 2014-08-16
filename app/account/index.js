var express = require('express');
var controllers = require('./controllers');

var account = module.exports = express.Router();

account.get('/users', controllers.users);
account.post('/users', controllers.createUser);
