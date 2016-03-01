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


const homeRouter = router()
  .get('/', authed, controller.home)
  .get('/logout', controller.logout)
  .get('/auth/github', controller.github)
  .get('/auth/github/callback', controller.githubCallback)
  .get('/auth/facebook', controller.facebook)
  .get('/auth/facebook/callback', controller.facebookCallback);


module.exports = homeRouter.routes();