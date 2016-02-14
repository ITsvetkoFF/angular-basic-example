'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'vmView2'
        });
    }])

    .controller('View2Ctrl', [function () {
        var that = this;
        that.message = 'Some message from view2 to view1';
        that.name = 'controller';
        that.someObject = {
            name: 'controller->someObject',
            sayName: sayName
        };
        function sayName() {alert('I am here: ' + this.name)}
        that.sayName = sayName
    }]);