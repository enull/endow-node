var debug = require('debug')('app:start'),
  logger = require('morgan'),
  path = require('path'),
  express = require('express'),
  favicon = require('static-favicon')
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser');

var routes = require('./routes'),
  config = require('./config')();

var app = express();

app.set('port', config.port);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(logger(config.loggerFormat));
//app.use(express.compress());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.methodOverride());
app.use(cookieParser(config.cookie.secret));

app.use(express.static(path.join(__dirname, '..', 'public')));
//app.use(express.session({ secret: config.session.secret, store: new RedisStore(config.session.store), httpOnly: true }));
//app.use(express.multipart());

app.get('/', routes.index);
//app.get('/users', users.list);

//npp
//setup all the routes
//routes(app);

module.exports = app;
