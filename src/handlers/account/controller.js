const render = require('../../lib/render');

exports.signin = function *() {
	this.body = yield render('account/signin');
};

exports.signup = function *() {
	this.body = yield render('account/signup');
};