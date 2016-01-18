const koa = require('koa');
const passport = require('koa-passport');
const app = module.exports = koa();

app.use(require('koa-bodyparser')());
app.keys = ['secret'];

require('../lib/auth');
app.use(require('koa-session')(app));
app.use(passport.initialize());
app.use(passport.session());

app.use(require('../handlers/home'));
app.use(require('../handlers/account'));
//app.use(require('../handlers/about'));
//app.use(require('../handlers/admin'));

app.use(require('../lib/styles'));
app.use(require('../lib/serve'));