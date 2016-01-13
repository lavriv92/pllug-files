const router = require('koa-router');

const controller = require('./controller');

const signinRouter = router()
	.get('/signin', controller.signin);

const signupRouter = router()
	.get('/signup', controller.signup);


module.exports = signupRouter.routes(); 
module.exports = signinRouter.routes(); 