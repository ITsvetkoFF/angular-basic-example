'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'myApp.mod1',
    'myApp.mod2'
])
    .constant('text','constant_from0')
    .value('text','value_from0')
    .controller('app0Ctrl', function(text, $scope) {$scope.text = text;});

angular.module('myApp.mod1', [])
    .value('text','value_from1')
    .constant('text','constant_from1')
    .controller('app1Ctrl', function(text, $scope) {$scope.text = text;});

angular.module('myApp.mod2', ['myApp.mod1'])
    .value('text','value_from2')
    .constant('text','constant_from2')
    .controller('app2Ctrl', function(text, $scope) {$scope.text = text;});

