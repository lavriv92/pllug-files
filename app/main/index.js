var express = require('express'),
    middlewares = require('../auth/middlewares');

var main = module.exports = express.Router();

main.get('/*', middlewares.requiresLogin, function (middleware, req, res) {
  res.render('main/index');
});
