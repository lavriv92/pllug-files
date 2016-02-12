const render = require('../../lib/render');
const passport = require('koa-passport');
const User = require('../../db/models/User');


exports.signin = function *() {
	this.body = yield render('account/signin');
};

exports.signup = function *() {
	this.body = yield render('account/signup');
};

exports.forgotPassword = function* () {
  this.body = yield render('account/forgot-password');
};

exports.localLogin = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/account/signin',
});


exports.createUser = function* () {
  try {
    var body = this.request.body
        password = body.password,
        confirmPassword = body.confirmPassword;

    if(password !== confirmPassword) {
      throw new Error('Password is not equal');
    }

    yield new User(body).save();
    this.body = yield this.redirect('/');
  } catch (e) {
    this.body = yield render('account/signup', { errors: e.message });
  }
};


