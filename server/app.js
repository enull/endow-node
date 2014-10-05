var debug = require('debug')('app:start'),
  logger = require('morgan'),
  path = require('path'),
  express = require('express'),
  favicon = require('static-favicon'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  passport = require("passport"),
  passportLocal = require("passport-local");

var routes = require('./routes'),
  security = require("./lib/security"),
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


app.use(
    require('less-middleware')(
        path.join(__dirname, './less'), {
            dest: path.join(__dirname, '..', 'public'),
            debug: true,
            force: true,

            preprocess: {
                path: function(pathname, req) {
                    return pathname.replace('\\styles', '\\');
                }
            }
        }, {
            compress: true, //make configurable?
            sourceMap: true
        }
    )
);

app.use(express.static(path.join(__dirname, '..', 'public')));


//passport config
passport.use(
    'local',
    new passportLocal.Strategy(
        { passReqToCallback: true },
        security.authenticate
    )
);

//Configure serialization
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (req, id, done) {
    var user = {
        id: 1,
        userName: 'User',
        password: 'Password',
        firstName: 'First',
        lastName: 'Last',
        email: 'default@null.nul',
        phone: '000 000 0000',
        enabled: true
    };
    return done(null, user);
});

//Add passport initialization and session support to the app
app.use(passport.initialize());
app.use(passport.session());

//app.use(express.session({ secret: config.session.secret, store: new RedisStore(config.session.store), httpOnly: true }));
//app.use(express.multipart());

app.get('/', routes.index);
//app.get('/users', users.list);

//npp
//setup all the routes
//routes(app);

module.exports = app;
