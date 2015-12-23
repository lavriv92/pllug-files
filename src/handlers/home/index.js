const router = require('koa-router');

const controller = require('./controller');

const homeRouter = router()
	.get('/', controller.home);


module.exports = homeRouter.routes();