'use strict';

module.exports = ['VERSION', '$interval', '$document', function(VERSION, $interval, $document) {

    return {
        restrict: 'A',
        transclude: true,

        scope: {
            beforeClose: '=',
            headerText: '@'
        },

        template: '<div data-draggable>' +
                        '<div data-drag-target>{{headerText}}<div ng-click="close()" class="close">x</div></div>' +
                        '<div data-dragged-along ng-transclude></div>' +
                    '</div>',

        controller: ['$scope', '$element', function($scope, $element) {

            var processing = false;

            $scope.close = function () {
                
                if (!processing) {

                    processing = true;

                    if ($scope.beforeClose) {

                        //update to pass a promise and handle it
                        var closePromise = $scope.beforeClose();

                        closePromise.then(function() {

                            $element.remove();
                            processing = false;

                        }, function(reason) {

                            console.log('close failed: ' + reason);
                            processing = false;
                        });

                    } else {

                        $element.remove();
                    }
                }
            };
        }]
    };
}];