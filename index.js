var express = require('express'),
    swig = require('swig'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express();

var main = require('./app/main'),
    api = require('./app/api'),
    config = require('./app/config/config');

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');
app.set('view cache', false);

app.use(bodyParser());

app.use(express.static('./public'));

mongoose.connect(config.db.uri);

app.use('/api/v01', api);
app.use(main);

app.listen(8124);

console.log("App run on http://0.0.0.0:8124");
