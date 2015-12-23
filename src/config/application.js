const koa = require('koa');

const app = koa();

const router = require('koa-router');

const baseRouter = router()
	.use('/', require('../handlers/home'));

app.use(baseRouter.routes());


module.exports = app;