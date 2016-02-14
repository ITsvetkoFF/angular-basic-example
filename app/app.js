'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
    .run(['$rootScope', function ($rootScope) {
        $rootScope.itHasBeenClicked = true;
    }]);

