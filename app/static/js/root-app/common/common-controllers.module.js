'use strict';

var ng = require('angular');

module.exports = ng.module('test-app.common.controllers.module', [

])
.controller('MainController', require('./controllers/main.controller'));