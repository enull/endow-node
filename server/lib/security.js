'use strict';
//var bcrypt = require("bcrypt-nodejs");
//var crypto = require('crypto');

//var security = module.exports;
//var db = require("../models");

//var client = db.client;
//
//var keyProvider = require('./keyProvider');
//var registration = require('./registration');

//var userAccount = db.userAccount;
var security = module.exports;
security.authenticate = function(req, username, password, done) {
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
};


//security.makeHash = function(value, done) {
//    function haveHash(err, hash) {
//        if (err) {
//            return done(err);
//        }
//        done(null, hash);
//    }
//
//    function haveSalt(err, salt) {
//        if (err) {
//            return done(err);
//        }
//        bcrypt.hash(value, salt, null, haveHash);
//    }
//
//    bcrypt.genSalt(10, haveSalt);
//};
//
//security.testHash = function(valueToTest, hash, done) {
//    bcrypt.compare(valueToTest, hash, done);
//};
//
//function invalidLoginAttempt(user, done) {
//    function completeInvalidAttempt() {
//        user.save(['invalidAttemptCount','lockedUntil']); //don't need to wait on this to call the done callback
//        return done(null, false, { message: 'Invalid login attempt' });
//    }
//
//    function setLockedUntil(lockoutLengthInMinutes) {
//        var now = new Date();
//        user.lockedUntil = new Date(now.setMinutes(now.getMinutes() + lockoutLengthInMinutes));
//    }
//
//    user.invalidAttemptCount = (user.invalidAttemptCount || 0) + 1;
//    if (user.invalidAttemptCount >= 3) {
//        if (!user.client || !user.client.lockoutLengthInMinutes) {
//            db.client.find(1)
//                .success(function(client) {
//                    var lockoutLength = client && client.lockoutLengthInMinutes ? client.lockoutLengthInMinutes : 60;
//                    setLockedUntil(lockoutLength);
//                    completeInvalidAttempt();
//                })
//                .error(done);
//            return;
//        }
//        setLockedUntil(user.client.lockoutLengthInMinutes);
//    }
//    completeInvalidAttempt();
//}
//
//
//var encryptionSettings = {
//    algorithm: 'aes256',
//    key: 'St@ticV@lu3R3quir3dF0rD3crypti0n'
//};
//security.encrypt = function(text) {
//    if (!text) {
//        return text;
//    }
//    var cipher = crypto.createCipher(encryptionSettings.algorithm, encryptionSettings.key);
//    var encryptedValue = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
//    return encryptedValue;
//};
//
//security.decrypt = function(encrypted) {
//    if (!encrypted) {
//        return encrypted;
//    }
//    var decipher = crypto.createDecipher(encryptionSettings.algorithm, encryptionSettings.key);
//    var decryptedValue = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
//    return decryptedValue;
//};
