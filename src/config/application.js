const koa = require('koa');

const app = koa();

const router = require('koa-router');

const baseRouter = router()
	.use('/', require('../handlers/home'))
	.use('/login',require('../handlers/login'));
app.use(baseRouter.routes());


module.exports = app;