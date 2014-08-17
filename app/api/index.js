var express = require('express'),
    account = require('../account'),
    files = require('../files');

var api = module.exports = express.Router();

api.use('/account/', account);
api.use('/files/', files);
