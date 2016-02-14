## Step 8

Easy one.

Let's play with rootScope and share some data between view2 and view1.

```js
that.trigger = function() {
            $rootScope.itHasBeenClicked=!$rootScope.itHasBeenClicked;
        };
```

`trigger` function triggers the `itHasBeenClicked` variable.

Note:
- we can get itHasBeenClicked in few diferent ways: (`itHasBeenClicked`, `$root.itHasBeenClicked` in view or `$rootScope.itHasBeenClicked` in controller).
- $root is just a handy link to the rootScope from any scope.
- We need to inject $rootScope to use in in the controller.
- **It is not so good** to share some data over rootScope! Imagine that you have 100 controllers and need 3 of them to share data. If you use rootScope, every of 100 controllers can have access to that data.