## Step 4

Here we are playing with scopes of view1 and view2 controllers. Variable `dateNow` lives in the appController. So it is prototipically inherited from the parent scope in child scopes of `view1Controller` and `view2Controller`.

At the `view1Controller` we define `dateNow = 1` that means 1ms from the begining of the time (note that we will see 1/JAN/1970 2AM because date filter handles UTC+2 for us). We may see this on view1 tab.

At the `view2Controller` we define `dateNow = 3600*1000` that means 1hour from the begining of the time (1/JAN/1970 3AM). But it may be randomly defined or not. So we may see 1/JAN/1970 3AM on view2 tab with the same probability as the current time inherited from the parent scope.
We have the situation when we can't be sure from what controller we've got the variable. This might not be our goal.

During the next step we will introduce the way to solve this issue.
