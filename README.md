## Step 7

You may have noticed that we use the code `The current scope dateNow is {{dateNow|date:"MM/dd/yyyy \'at\' h:mma"}}` here and there. Let's try to create our custom directive that will do the same.

The syntax is easy and self-descriptive here:

```js
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
```

`directive` is a so-calledd DDO - Directive Definition Object. We use only few of dozen properties that can be used in DDO.

Note that we use `dateNow` in the directive's template. We can do that, because by default it does not create any child scope and share the parent's scope.