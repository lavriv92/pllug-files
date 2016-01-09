const router = require('koa-router');

const controller = require('./controller');

const registrationRouter = router()
	.get('/', controller.registration);


module.exports = registrationRouter.routes(); 