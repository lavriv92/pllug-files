const router = require('koa-router');
const controller = require('./controller');

const account = router()
  .get('/signin', controller.signin)
  .post('/signin', controller.localLogin)
  .get('/signup', controller.signup)
  .post('/signup', controller.createUser)
  .get('/forgot-password', controller.forgotPassword);

module.exports = router()
  .use('/account', account.routes())
  .routes();
