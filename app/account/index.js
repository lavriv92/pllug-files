var express = require('express'),
    controllers = require('./controllers');

var account = module.exports = express.Router();

account.get('/users', controllers.users);
account.post('/users', controllers.createUser);

account.get('/users/:id/', controllers.userDetails);
account.post('/users/:id/update', controllers.updateUser);
account.post('/users/:id/update_password', controllers.updatePassword);
