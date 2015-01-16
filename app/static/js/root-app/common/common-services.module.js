'use strict';

var ng = require('angular');

module.exports = ng.module('test-app.common.services', [

])
.factory('randomIntegerFactory', require('./services/random-integer.factory'))
.factory('localStorageFactory', require('./services/local-storage.factory'));