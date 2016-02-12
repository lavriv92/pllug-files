const Router = require('koa-router');
const controller = require('./controller');
const securedRouter = new Router();

const homeRouter = Router()
	.get('/', controller.home)
	.get('/auth/github', controller.github)
    .get('/auth/github/callback', controller.githubCallback)
    .get('/auth/facebook', controller.facebook)
    .get('/auth/facebook/callback', controller.facebookCallback)
    .get('/auth/google', controller.google)
    .get('/auth/google/return', controller.googleCallback);


module.exports = homeRouter.routes();