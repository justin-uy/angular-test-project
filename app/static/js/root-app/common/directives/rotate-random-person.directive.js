'use strict';

module.exports = ['$interval', 'randomIntegerFactory', function($interval, randomIntegerFactory) {

    return {
        restrict: 'A',
        transclude: true,
        attr:{
            list: '='
        },
        link: function(scope, element, attrs) {

            var people = scope[attrs.list],
                timeoutId,
                i;
                
            timeoutId = $interval(function() {

                var next;

                do {

                    next = randomIntegerFactory(0, people.length);
                } while (next === i);

                i = next;

                element.text('Hi I am ' + people[i].name + ' and my age is ' + people[i].age);
            }, 750);

            element.on('$destroy', function() {

                $interval.cancel(timeoutId);
            });
        }
    };
}];