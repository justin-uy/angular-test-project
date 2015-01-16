'use strict';

module.exports = ['$rootScope', 'localStorageFactory',
    function ($rootScope, localStorageFactory) {

        // On page load, clear the access token.
        // If the user logs out through another app (like ID), the token is not cleared and may have expired
        // by the time the user refreshes the page. By clearing hte otken on page load, we make sure we don't
        // get stale tokens from previous sessions.
        localStorageFactory.removeData(localStorageFactory.ACCESS_TOKEN);

        $rootScope.$on('$stateChangeError', function (event) {

            // Prevents ui-router from attempting to update the url.  If there is a rule that modifies
            // the url, updating the url will revert it back to before the url rule.  This could cause
            // an infinite loop between a url with the rule and without the rule.
            event.preventDefault();
        });
    }
];
