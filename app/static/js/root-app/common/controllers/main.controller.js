'use strict';

var ng = require('angular');

module.exports = ['$scope', 'VERSION', '$q', 'randomIntegerFactory',  function($scope, VERSION, $q, randomIntegerFactory) {

    function defineScope() {
        $scope.message = 'This is ' + VERSION + ' of this test';
        
        $scope.people = [{ name: 'bob', age: 24 },
                        { name: 'ted', age: 30 },
                        { name: 'joe', age: 29 },
                        { name: 'ken', age: 23 },
                        { name: 'ian', age: 25 },
                        { name: 'lou', age: 22 }];

        $scope.beforeClose = beforeClose;
    }

    function beforeClose() {

        return $q(function(resolve, reject) {

            setTimeout(function() {
                var num;

                if ((num = randomIntegerFactory(0,2))) {
                    resolve();
                }

                reject('something went wrong');
                
            }, 500);
        });
    }

    function initialize() {
        defineScope();
    }

    initialize();
}];