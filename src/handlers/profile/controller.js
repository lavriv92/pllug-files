const render = require('../../lib/render');
const passport = require('koa-passport');
//const bodyParser = require('koa-bodyparser');
const User = require('../../db/models/User');


exports.profile = function* (){
  var profile = this.req.user;
  this.body = yield render('home/profile', { profile: profile });
}