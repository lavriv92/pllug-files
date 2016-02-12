const koa = require('koa');
const passport = require('koa-passport');
const app = module.exports = koa();


//Middleware: request logger
function *reqlogger(next){
  console.log('%s - %s %s',new Date().toISOString(), this.req.method, this.req.url);
  yield next;
}
app.use(reqlogger);


//app.use(require('../lib/logger'));
app.use(require('koa-bodyparser')());
app.keys = ['secret'];



require('../lib/auth');
//app.use(require('koa-session')(app));
app.use(passport.initialize());
app.use(passport.session());

app.use(require('../handlers/home'));
app.use(require('../handlers/account'));



app.use(require('../lib/styles'));
app.use(require('../lib/serve'));
app.use(require('../lib/less'));

