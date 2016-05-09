/*
	Immeditely Invoked function expression, can be pronounced as 'iffy'
 */

```
(function(){
	console.log('Immedietely Invoked IIFY')
}());

(function(withParam){
	console.log('param : ',20)
}(20));

var bool = (function(){
	console.log('with return value');
	return true;
}());

var counter = (function(){
	console.log('with private variables');
	var no = 0;
	var counter = {
		inc : function(){
			return ++no;
		},
		dec :  function(){
			return --no;
		}
	}
	return counter;
}());
```