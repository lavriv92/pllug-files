const path = require('path');
const stylus = require('koa-stylus');


module.exports = stylus(path.join(__dirname, '../public'));
