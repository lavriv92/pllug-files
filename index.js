var express = require('express'),
    swig = require('swig'),
    app = express();

var main = require('./app/main'),
    api = require('./app/api');

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');
app.set('view cache', false);

app.use(express.static('./public'));

//mongoose.connect('mongodb://loclhost:27017/pllug-files');

app.use('/api/v01', api);
app.use(main);

app.listen(8124);

console.log("App run on http://0.0.0.0:8124");
