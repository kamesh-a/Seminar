/** 
	- this
	- apply
	- bind
	- call
 */
```
var programer = {
	name : 'fatbrains',
	design : 'developer',
	getName :  function(){
		return this.name;
	},
	// Nested
	getNested : function(){
		console.log(this);
		function test(){
			console.log(this);
		}
		test()
	}
}
```