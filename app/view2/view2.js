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
        that.name = 'I am view 2';
        that.someObject = {
            name: 'view2',
            sayName: sayName
        };
        function sayName() {alert('My name is: ' + this.name)}
        that.sayName = sayName;

        that.trigger = function() {
            $rootScope.itHasBeenClicked=!$rootScope.itHasBeenClicked;
        };

        that.triggerDelayed = function() {
            //$timeout(that.trigger(), 1000);
            //setTimeout(function() {that.trigger(); $scope.$apply();}, 1000);
            //setTimeout(function() {that.trigger(); $rootScope.$digest();}, 1000);
            setTimeout(function() {that.trigger()}, 1000);
        };
    }]);