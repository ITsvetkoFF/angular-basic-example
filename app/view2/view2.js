'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'vmView2'
        });
    }])

    .controller('View2Ctrl', ['$rootScope', '$timeout', '$scope', function ($rootScope, $timeout, $scope) {
        var that = this;
        that.message = 'Some message from view2 to view1';
        that.clickedHere = $rootScope.itHasBeenClicked;

        // note that we don't use trigger directly in the view. We can rewrite it as function trigger()
        that.trigger = function() {
            $rootScope.itHasBeenClicked=!$rootScope.itHasBeenClicked;
            that.clickedHere = !that.clickedHere;
        };

        /**
         * Let's try to trigger the checkbox state with 1 second delay in 4 different ways.
         * And note that start digest button is added to index.html
         * to handle the 4th situation with simple setTimeout
         */
        that.triggerDelayed = function() {
            //$timeout(that.trigger(), 1000);
            //setTimeout(function() {that.trigger(); $scope.$apply();}, 1000);
            setTimeout(function() {that.trigger(); $scope.$digest();}, 1000);
            //setTimeout(function() {that.trigger(); $rootScope.$digest();}, 1000);
            // setTimeout(function() {that.trigger()}, 1000);
        };
    }]);