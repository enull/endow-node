var debug = require('debug')('app:start'),
  logger = require('morgan'),
  path = require('path'),
  express = require('express'),
  favicon = require('static-favicon'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser')
;

var routes = require('./routes'),
  config = require('./config')(),
  less = require('./less.conf'),
  passport = require('./passport.conf')
;


//APP
var app = express();


//PORT
app.set('port', config.port);


//VIEWS
app.set('views', path.join(__dirname, 'views'));


//VIEW ENGINE
app.set('view engine', 'ejs');


//LOGGER
app.use(logger(config.loggerFormat));


//FAV ICON
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));


//COMPRESS
//app.use(express.compress());


//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//???
//app.use(express.methodOverride());


//COOKIE PARSER
app.use(cookieParser(config.cookie.secret));


//LESS
app.use(less());


//PATHS
app.use(express.static(path.join(__dirname, '..', 'public')));


//PASSPORT
app.use(passport.initialize());
app.use(passport.session());


//SESSION
//app.use(express.session({ secret: config.session.secret, store: new RedisStore(config.session.store), httpOnly: true }));


//???
//app.use(express.multipart());


//ROUTES
app.get('/', routes.index);
//app.get('/users', users.list);
//routes(app); //npp


module.exports = app;
