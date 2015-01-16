'use strict';

var ng = require('angular');

ng.element(document).ready(function() {
    ng.bootstrap(document, [
        require('./root-app/app.module').name
    ]);
});