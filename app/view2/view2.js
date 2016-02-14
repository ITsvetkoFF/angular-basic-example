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

        function newPerson() {
            return {
                name: faker.name.firstName(),
                surname: faker.name.lastName(),
                title: faker.name.title(),
                jobDescriptor: faker.name.jobDescriptor(),
                jobType: faker.name.jobType()
            }
        }
        that.largeArray = Array.apply(null, Array(1000)).map(newPerson);

        that.pushOne = function() {
            that.largeArray.push(newPerson());
        }

    }]);