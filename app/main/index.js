var express = require('express');

var main = express.Router();

main.get('/*', function (req, res) {
  res.render('main/index');
});

module.exports = main;
