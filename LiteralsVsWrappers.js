/*
	https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
 */

// Strings
```
var name = 'name';

var primitive = "september";
primitive.vowels = 3;
//new object created to set property 
(new String("september")).vowels = 3;
 
primitive.vowels;
//another new object created to retrieve property 
(new String("september")).vowels; //undefined

```
