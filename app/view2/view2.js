'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'vmView2'
        });
    }])

    .controller('View2Ctrl', ['$rootScope', function ($rootScope) {
        var that = this;
        that.message = 'Some message from view2 to view1';

        that.trigger = function() {
            $rootScope.itHasBeenClicked=!$rootScope.itHasBeenClicked;
        };
    }]);