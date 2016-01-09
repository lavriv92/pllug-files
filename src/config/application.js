const koa = require('koa');

const app = koa();

const router = require('koa-router');

const baseRouter = router()
	.use('/', require('../handlers/home'))
	.use('/login',require('../handlers/login'))
	.use('/registration',require('../handlers/registration'));
app.use(baseRouter.routes());


module.exports = app;