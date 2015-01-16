'use strict';

module.exports = ['$window', function ($window) {

        // name space the variables to avoid collisions.
        // TODO - customize this with a provider
        var nameSpace = 'root-app.',
            ACCESS_TOKEN = 'access_token';

        function setData (key, value) {
            $window.localStorage.setItem(nameSpace + key, value);
        }

        function getData (key) {
            return $window.localStorage.getItem(nameSpace + key);
        }

        function removeData(key) {
            $window.localStorage.removeItem(nameSpace + key);
        }

        return {
            setData: setData,
            getData: getData,
            removeData: removeData,
            ACCESS_TOKEN: ACCESS_TOKEN
        };
    }
];
