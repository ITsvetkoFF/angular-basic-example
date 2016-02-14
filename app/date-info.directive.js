'use strict';

angular.module('myApp').
    directive('controllerDateNowInfo', controllerDateNowInfoDirective);
function controllerDateNowInfoDirective() {
    var directive = {
        link: link,
        template: '<div>The current scope dateNow is {{dateNow|date:"MM/dd/yyyy \'at\' h:mma"}}</div>',
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
    }
}