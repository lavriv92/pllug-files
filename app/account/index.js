var express = require('express'),
    controllers = require('./controllers');

var account = module.exports = express.Router();

account.get('/users', controllers.users);
account.post('/users', controllers.createUser);

app.get('/users/:id/', controllers.userDetails);
app.post('/users/:id/update', controllers.updateUser);
app.post('/users/:id/update_password', controllers.updatePassword);
