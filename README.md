## Step 11

Go to tab 2.

This step is a bit optional and not related to the previous.

Let's discuss watchers.

You can create new watcher as simple as:
```js
$scope.$watch('myVar', function() {
        alert('myVar has changed!');
    });
```

That means that each digest angular will check the value `$scope.myVar`, and if it changes you'll see the simple alert.

Some (actually lots) of angular built-in directives will create watchers for you.

Let's try to create an array of 1000 objects using faker library:

```js
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
```
So now `vmView2.largeArray` is pointing on a big array with objects (5 properties in each object).

There is a very popular ng-repeat directive. Consider this variant:
```js
<table>
    <tr ng-repeat="obj in vmView2.largeArray">
        <td>{{$index}}.</td><td ng-repeat="(key, value) in obj">{{key}}:{{value}},</td>
    </tr>
</table>
```
and this one:
```js
<table>
    <tr ng-repeat="obj in vmView2.largeArray">
        <td>{{::$index}}.</td><td ng-repeat="(key, value) in ::obj">{{::key}}:{{::value}},</td>
    </tr>
</table>
```
The first one creates **12001** watchers and the second one creates **1** watcher!
But the behavior is the same! You still can filter and add persons to the array!

It is the power of one-way binding. Use it when it is enough for you to just render data initially (you will not change it often/interactively).

Notes:
* let's count all 12001 watchers:
 * 1 for outer ng-repeat (`vmView2.largeArray`, actually it is a separate `watchCollection` type of watchers),
 * 1000 watchers for each inner ng-repeat (`obj`)
 * 1000 * 5 watchers for keys (`key`)
 * 1000 * 5 watchers for values (`value`)
 * 1000 watchers for indexes (`$index`)
* 12001 vs 1 watchers does not mean 12001x better performance. Instead we'll have a bit better performance, because of the watchCollection, that is much more expensive operation. But nevertheless.
* note that ng-repeat's are creating new scopes!
