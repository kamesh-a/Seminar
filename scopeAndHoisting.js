/* 
	function Hoisting 
		- function declaration are hoisted
		but not expressions.
*/
```
printGreet();

function printGreet(){
	console.log('hello Every body.');
};

printGreetExpression();
var printGreetExpression = function(){
	console.log('Another, Hello Every body.');
}
```
/*
variable hosting:
*/
// Example 1 : 
```
function foo() {
    var x = -512;
    if (x < 0) { // (1)
        var tmp = -x;
    }
    console.log(tmp); // ?
}
```
/*
	Let us re-write the 
	same code.	
 */
```
function foo() {
    var tmp;
    var x;
    x = -512;
    if (x < 0) { // (1)
        tmp = -x;
    }
    console.log(tmp); // 512
}
```
// Example 2 : 
```
function foo() {
    console.log(tmp); // undefined
    if (false) {
        var tmp = 3; // (1)
    }
}
```
// Example 2 : re-written
```
function foo() {
    var tmp; // hoisted declaration
    console.log(tmp);
    if (false) {
        tmp = 3; // assignment stays put
    }
}
```
/* =============== scope ================== */
/**
  	- global scope
  	- function scope or local scope
  	- eval scope
 */


/*
	Shadowing 
 */
```
var x = "global";

function f() {
    var x = "local";
    console.log(x); // local
}
f();
console.log(x); // global
```
/*
	Java
	Block scoped.
 */
```
public static void main(String[] args) {
    {
        String name = "user1";
    }
    System.out.println(name); // variable can't be resolved.
}
```
/*
	Function Scope rather than block scrop unlike other languages
 */
```
function main() {
    { // block starts
        var foo = 4;
    } // block ends
    console.log(foo); // 4
}
```