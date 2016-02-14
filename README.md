## Step 5

So, let's now try to use controllerAs syntax in the `view2`! It is as easy as declaring `controllerAs: 'vmView2'` and refering to the variable in view as `vmView2.dateNow` instead `dateNow`.

Actually this means "find `dateNow` in the scope of view2Ctrl" instead of "find `dateNow` somewhere in current/parent/root scopes". *Explicit is better than implicit!*

Notes:
- Here we use both controllerAs and controller syntax only to show the difference! Try to be consistent!
- Here we can find the other example of inconsistency: in index.html we use `ng-controller`. But in routes we set the controller in js file. [Style Y038](https://github.com/johnpapa/angular-styleguide#style-y038) encourages this. But note that you can assign one controller to the DOM only once. Using `ng-controller` in html with `controller:` in js can cause bugs.
