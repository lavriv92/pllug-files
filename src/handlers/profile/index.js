const router = require('koa-router');

const controller = require('./controller');

function *authed(next){
  if (this.req.isAuthenticated()){
    yield next;
    console.log('isAuthenticated is success');
  } else {
    this.redirect('/account/signin');
  }
};

const profile = router()
  .get('/profile', authed, controller.profile);

module.exports = profile.routes();