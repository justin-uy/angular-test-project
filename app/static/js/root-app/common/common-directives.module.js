'use strict';

var ng = require('angular');

module.exports = ng.module('test-app.common.directives.module', [

])

.directive('draggable', require('./directives/draggable.directive'))
.directive('dialog', require('./directives/dialog.directive'))
.directive('rotateRandomPerson', require('./directives/rotate-random-person.directive'));