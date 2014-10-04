'use strict';

module.exports = function() {
    return require('./config_' + process.env.NODE_ENV);
}

