'use strict';

module.exports = [function () {

    function getRandomInt(min, max) {

        return Math.floor(Math.random() * (max - min)) + min;
    }

    return getRandomInt;
}];