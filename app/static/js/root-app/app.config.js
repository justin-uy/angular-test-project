'use strict';

var ng = require('angular');

module.exports = ['$httpProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

        $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    }
];