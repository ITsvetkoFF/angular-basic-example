'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', function ($scope) {
        if (Math.random() > 0.5) {
            // If there is no dateNow, we will not see prototypically inherited
            $scope.dateNow = 3600 * 1000;
        }
    }]);