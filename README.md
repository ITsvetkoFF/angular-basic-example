## Step 2

Now we have the controller. Something that can manage our view.
Angular's $scope service is injected into the controller.
`$scope.dateNow` scope variable is created and initialized.

Note that the syntax:
```js
controller('appController', ['$scope', function ($scope) {
        $scope.dateNow = Date.now();
    }]);
```
can be written like this
```js
controller('appController', function ($scope) {
        $scope.dateNow = Date.now();
    });
```
but this variant can't be minified well.
We have `ng-controller="appController"`. This code connects our DOM with controller and brings inside the specified DOM element certain scope.
So scope is just an object with data that is connected to certain DOM area. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application.(c)

Also we are using rootScope a bit.
For the main module in the run phase we added initialization of `itHasBeenClicked` variable.

Here's the calling order for phases:

- app.config()
- app.run()
- directive's compile functions (if they are found in the dom)
- app.controller()
- directive's link functions (again, if found)

Experiments: we can remove `$root.` and see that nothing changes. Because of the prototypical inheritance of scopes. `$root` just holds a reference to the `$rootScope`.