var express = require('express'),
    swig = require('swig'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    //mongoStore = require('connect-mongo')(express),
    app = express();

var main = require('./app/main'),
    api = require('./app/api'),
    auth = require('./app/auth'),
    config = require('./app/config/config');

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');
app.set('view cache', false);

app.use(bodyParser());
app.use(express.static('./public'));
app.use(session({
  //store: new mongoStore({
    //collection: 'sessions',
    //db: config.db.uri
  //}),
  secret: 'dsdsadsadsdsfdgfgfsdgfds'
}));

mongoose.connect(config.db.uri);

app.use('/auth/', auth);
app.use('/api/v01', api);
app.use(main);

app.listen(8124);

console.log("App run on http://0.0.0.0:8124");
