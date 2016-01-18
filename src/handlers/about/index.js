const router = require('koa-router');

controller = require('./controller');

const about = router()
  .get('/team', controller.team)
  .get('/info', controller.info);


module.exports = router()
  .use('/about', about.routes())
  .routes();
