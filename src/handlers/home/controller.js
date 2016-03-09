const render = require('../../lib/render');
const passport = require('koa-passport');
const bodyParser = require('koa-bodyparser');
const User = require('../../db/models/User');

exports.home =    function *() {
  this.body = yield render('home/index');
	//this.body = JSON.stringify(this.req.user);
  //console.log(this.req.user);
};

exports.logout = function *() {
  this.session = null;
  this.redirect('/account/signin');
};

exports.github = passport.authenticate('github');

exports.githubCallback = passport.authenticate('github', {
  successRedirect: '/', 
  failureRedirect: '/account/signin',
});



exports.facebook =  passport.authenticate('facebook');

exports.facebookCallback = passport.authenticate('facebook', {
 failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  };


exports.google = passport.authenticate('google');

exports.googleCallback = passport.authenticate('google',{ 
    successRedirect: '/profile',
    failureRedirect: '/account/signin',
});