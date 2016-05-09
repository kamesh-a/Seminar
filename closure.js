/*
	Closures are functions whose inner functions refer to independent (free) variables. In other words, 
	the functions defined in the closure 'remember' the environment in which they were created.

	Each function stays connected to the variables of the functions that surround it, 
	even after it leaves the scope in which it was created
*/
```
function createIncrementor(start) {
    return function () {  
        start++;
        return start;
    }
}

var inc = createIncrementor(5);
inc() // 6
inc() // 7
```
// Example 2
```
var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    fnArr.push(function() {
        return arr[i]
    });
};
```
/*
	Sample Test code
 */
 ```
function printAll(){
	fnArr.forEach( function(fn, index) {
		console.log('['+index+'] : '+fn())
	});
}
```

/*
	Real-World Scenario
	while adding event handlers to DOM
	in for loop
*/
```
var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    var data = arr[i];
    fnArr.push(function() {
        return data
    });
};


var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    (function() {
        var data = arr[i];
        fnArr.push(function() {
            return data
        });
    })();
};

var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    fnArr.push(function(index) {
        return arr[index]
    }.bind(null,i));
};
```