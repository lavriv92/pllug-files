var cluster = require('cluster');
    express = require('express'),
    swig = require('swig'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    //mongoStore = require('connect-mongo')(express),
    app = express();

var main = require('./app/main'),
    api = require('./app/api'),
    auth = require('./app/auth'),
    config = require('./app/config');

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
  secret: config.secretKey
}));

mongoose.connect(config.db.uri);

app.use('/auth/', auth);
app.use('/api/v01', api);
app.use(main);

if(cluster.isMaster) {
  var numCPUs = require('os').cpus().length;
  for(var i=0; i<numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', function() {
    console.log('pid died');
  });
} else {
  var d = require('domain').create();
  d.run(function() {
    app.listen(1337, function() {
      console.log("App run on http://0.0.0.0:1337");
    });
  });

  d.on('error', function(err) {
    console.log(err.message);
  });
} 
