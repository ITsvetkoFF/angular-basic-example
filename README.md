## Step 3

Here we've added some routing using ngRoute module.

For that we:

1. Created separate folders with 2 partial views (with js and html files).

2. We decided to implement each view is an angular module (note the naming. `myAppp.` prefix is not required, but convenient). So we need to include the modules into the main myApp module.

3. We included ngRoute as module dependency for our app and myApp.view1 and myApp.view2 modules.

4. Then we have some routing config for each module (on the config phase). So we have `/view1` and `/view2` routes defined in `when` section of `$routeProvider` config (where we denote the template of every view.). otherwise section helps us to redirect to some view in case of any npn-matching pattern.

5. And some html: we've added simple menu with links and the magical block `<div ng-view></div>` that is the host of our view templates.


Notes: as we add files to the app, we need to add each one to the `index.html`. It can be automated using `wiredep` task in Gulp or Grunt