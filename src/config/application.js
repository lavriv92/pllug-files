const koa = require('koa');

const app = koa();

const router = require('koa-router');

const baseRouter = router()
	.use('/', require('../handlers/home'))
	.use('/account',require('../handlers/account'));
app.use(baseRouter.routes());


module.exports = app;