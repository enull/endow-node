#!/usr/bin/env node
'use strict';
process.env.NODE_ENV = (process.env.NODE_ENV || 'local');

var
  //debug = require('debug')('server:start'),
  fs = require('fs'),
  http = require('http'),

  config = require('./config')(),
  app = require('./app')
;


var start = function(){
  http.createServer(app)
    .listen(config.port, function() {
      console.log('server created... listening on port ' + config.port);
      //debug('server created... listening on port ' + config.port);
    }
  );
};

console.log('ready... starting...');
//debug('ready... starting...');
start();

