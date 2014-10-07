//Add passport initialization and session support to the app
var
    passport = require("passport"),
    passportLocal = require("passport-local"),
    security = require("./lib/security")
;

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


module.exports = passport;
