/**
 	First class Object in javascript
 		- properties can be added
 		- can be invoked

 	but objects cannot be invoked but only
 	methods in object can be invoked.
 */
function
- diff between expression & declation
- hoisting
```
function foo() {
    bar();  // OK, bar is hoisted
    function bar() {
        ...
    }
}

function foo() {
    bar();  // Not OK, bar is still undefined
    var bar = function () {
        // ...
    };
}
```
/**
   Parameter Handling.
   Parameters that are missing have the value undefined. Parameters that are too many are ignored. 
   Let’s use the following function for a demonstration
 */
```
function sum(a,a,c){ console.log(a,c)}

function multipleParams(x,y){
	console.log('x : ',x);
	console.log('y : ',y);
}

// a. call with exact params
multipleParams(10,20);
	
// b. call with more no of params
multipleParams(11,12,13,14);

// c. call with lesser no of params
multipleParams(100);
```