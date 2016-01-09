const render = require('../../lib/render');

exports.registration = function *() {
	this.body = yield render('registration');
};