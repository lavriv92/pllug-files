const router = require('koa-router');

const controller = require('./controller');

const admin = router()
  .get('/users', controller.users);

module.exports = router()
  .use('/admin', admin.routes())
  .routes();
