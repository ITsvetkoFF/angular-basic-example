## Step 10

The very important Angular rule: if you use something external, Angular will not work automatically. 2-way data binding is not a magic!

Now imagine that we deed to trigger the checkbox in 1000 seconds. Note that we can **(and shall!)** use $timeout. This will tell Angular to update data when the code is performed.

Same story with $http. Making XHR calls using $httm ensures that data will be updated in view as the XHR succeeds.

See the notes in `view2.js` and follow them to be sure that setTimeout will not work without applying the digest.

Note: try to use as few `$rootScope.$digest();` in your code as you can!

Experiments: also try `$scope.$digest()` and `$scope.$apply()` checking the changes in parent scopes.