var express = require('express');
var swig = require('swig');
var app = express();

var main = require('./app/main');

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');
app.set('view cache', false);

app.use(express.static('./public'));

app.use(main);

app.listen(8124);

console.log("App run on http://0.0.0.0:8124");
