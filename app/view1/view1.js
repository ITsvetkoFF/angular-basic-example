'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($scope, $q) {


        function okToGreet(name) {
            var validNames = ['Vladimir Putin', 'Robin Hood', 'Chuck Norris'];
            return validNames.indexOf(name) != -1;
        }

        function asyncGreet(name, time) {
            var deferred = $q.defer();

            setTimeout(function () {
                deferred.notify('About to greet ' + name + '.');

                if (okToGreet(name)) {
                    deferred.resolve('Hello, ' + name + '!');
                } else {
                    deferred.reject('Greeting ' + name + ' is not allowed.');
                }
            }, time);

            return deferred.promise;
        }

        var p1 = asyncGreet('Robin Hood', 1000);

        var p2 = asyncGreet('Chuck Norris', 1500);

        var p3 = asyncGreet('Vladimir Putin', 500);

        var p4 = p2.then(successCb, errorCb, notifyCb);

        $q.all([p1, p2, p3, p4]).then(function (all) {
            console.log('From all: Success: ' + all);
        }, function (reason) {
            console.log('From all: Failed: ' + reason);
        }, function (update)  {
            console.log('From all: Progress:: ' + update);
        }).finally(function (all) {
            console.log('At least!' + all)
        });

        p1.then(successCb, errorCb, notifyCb);



        p3.then(successCb, errorCb, notifyCb);

        function successCb (greeting) {
            return 'Success: ' + greeting;
        }

        function errorCb(reason) {
            return 'Failed: ' + reason;
        }

        function notifyCb (update) {
            return 'Got notification: ' + update;
        }

    });