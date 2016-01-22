const path = require('path');
const less = require('koa-less');
const lessMiddleware = require('koa-less');
//app.use(less('../public'));
module.exports = lessMiddleware(path.join(__dirname + '../public'));