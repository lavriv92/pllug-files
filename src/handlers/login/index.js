const router = require('koa-router');

const controller = require('./controller');

const loginRouter = router()
	.get('/', controller.login);


module.exports = loginRouter.routes(); 