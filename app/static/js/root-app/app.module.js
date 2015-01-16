'use strict';

var ng = require('angular');

module.exports = ng.module('test-app', [

    require('./common/common.module').name
])
.config(require('./app.config'))
.run(require('./app.run'))
.constant('VERSION', require('../../../../package.json').version);