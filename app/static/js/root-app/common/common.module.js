'use strict';

var ng = require('angular');

module.exports = ng.module('test-app.common.module', [
        require('./common-controllers.module').name,
        require('./common-directives.module').name,
        require('./common-services.module').name,
        require('./common-routes.module').name
    ]);