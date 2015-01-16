'use strict';

var ng = require('angular');

module.exports = ['$document', function ($document) {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var startX = 0,
                startY = 0,
                x = 0,
                y = 0,
                dragTarget,
                children = element.children(),
                target = element;

            function mousemove(event) {
                
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    transform: 'translate(' + x + 'px, ' + y + 'px)'
                });
            }

            function mouseup() {

                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }

            function initialize() {

                for (var i = 0; i < children.length; i++) {

                    var child = children[i];

                    if (child.hasAttribute('data-drag-target')) {

                        dragTarget = child;
                    }
                }

                if (dragTarget) {

                    target = ng.element(dragTarget);
                }
                    
                target.on('mousedown', function(event) {
                    // Prevent default dragging of selected content
                    event.preventDefault();
                    startX = event.pageX - x;
                    startY = event.pageY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });
            }

            initialize();
        }
    };
}];