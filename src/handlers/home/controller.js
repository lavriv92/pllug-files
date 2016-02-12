const render = require('../../lib/render');
const passport = require('koa-passport');
//const Router = require('koa-router');


 function *authed(next){
  if (this.req.isAuthenticated()){
    yield next;
  } else {
    this.redirect('/account/signin');
  }
};

exports.home = authed,function *() {
	this.body = yield render('home/index');
};

exports.github = passport.authenticate('github', {
  scope: ['user','repo']});

exports.githubCallback = passport.authenticate('github', {
  successRedirect: '/', 
  failureRedirect: '/account/signin',
});


exports.securedRouter = authed, function *(){
  this.body = 'Secured Zone: koa-tutorial\n' 
     + JSON.stringify(this.req.user, null, '\t');
};

exports.facebook = passport.authenticate('facebook');
exports.facebookCallback = passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/account/signin'
})

exports.google = passport.authenticate('google');
exports.googleCallback = passport.authenticate('google',{ 
    successRedirect: '/',
    failureRedirect: '/account/signin',
});