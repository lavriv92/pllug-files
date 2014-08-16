var express = require('express');
var account = require('../account');

var api = module.exports = express.Router();

api.use('/account/', account);
