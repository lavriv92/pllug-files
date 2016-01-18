const render = require('../../lib/render');

const User = require('../../db/models/User');

exports.users = function* () {
  this.body = yield render('admin/users');
};

exports.about = function* () {
  this.body = yield render('admin/about');
};
