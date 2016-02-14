'use strict';

angular.module('myApp').
    controller('appController', ['$scope', function ($scope) {
        $scope.dateNow = Date.now();
    }]);