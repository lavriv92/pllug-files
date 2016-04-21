const render = require('../../lib/render');
const passport = require('koa-passport');
const bodyParser = require('koa-bodyparser');
const User = require('../../db/models/User');
const async = require('async');

exports.home =   function *() {
  this.body = yield render('home/index');
	//console.log(this.req.user);
};

exports.logout = function *() {
  this.session = null;
  this.redirect('/account/signin');
};

exports.github = passport.authenticate('github', {
 scope: [ 'user:email' ] });

exports.githubCallback = passport.authenticate('github', {
  successRedirect: '/profile',
  failureRedirect: '/',
});


exports.facebook =  passport.authenticate('facebook');

exports.facebookCallback = passport.authenticate('facebook',  {
  successRedirect: '/profile',
  failureRedirect: '/',
});


exports.google = passport.authenticate('google');

exports.googleCallback = passport.authenticate('google',{ 
    successRedirect: '/profile' ,
    failureRedirect: '/account/signin',
});