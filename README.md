## Step 6

![madness](http://frontender.info/demystifying-this-in-javascript/img/chaos.gif)

Let's continue playing with view2 and remember that AngularJS is still JS. And `this` here is not the same as in Java or C#.

Let's review changes of this step just here.

WAS
```js
...
 .controller('View2Ctrl', [function () {
        // doing something with this.
        // which will be then connected to vmView2 variable that angular will create for us in the controller's scope.
    }]);
```

IS
```js
...
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
```

`this` in JS is connected to the current object. Just see the magic of that:

```js
...
.controller('View2Ctrl', [function () {
    var that = this;
    that.message = 'Some message from view2 to view1';
    that.name = 'controller';
    that.someObject = {
        name: 'controller->someObject',
        sayName: sayName.bind(that)
    };
    function sayName() {alert('I am here: ' + this.name)}
    that.sayName = sayName.bind(that.someObject);
}]);
```
Note that our `var that = this;` will point to the newly created controller object (Angular will do something like `new View2Ctrl()`).

So it is good to have `that = this` so that we can write `function sayName() {alert('I am here: ' + that.name)}` *if wee need that behavior*!

Note:
* see the handy `|json` filter in pre tag! Nice to use to debug your scope.
* popular convention is: `var vm = this;` instead `var that = this;`