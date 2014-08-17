var express = require('express'),
    account = require('../account');

var api = module.exports = express.Router();

api.use('/account/', account);
