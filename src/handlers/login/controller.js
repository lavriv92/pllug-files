const render = require('../../lib/render');

exports.login = function *() {
	this.body = yield render('login');
};