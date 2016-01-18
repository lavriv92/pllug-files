const render = require('../../lib/render');

exports.team = function* (argument) {
  this.body = yield render('about/team');
};

exports.info = function* () {
  this.body = yield render('team/info');
};
