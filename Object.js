
Object  : 
- Object literal
```
'use strict';
var jane = {
    name: 'Jane',

    describe: function () {
        return 'Person named '+this.name;
    }
};

in operator
'name' in jane // boolean

Arbitrary Property Keys

'string as property names' or 'dynamic property names'
jane['string with spaces'] = 'created'
```

Constructor : 
	
	“real” functions and methods, functions play another role in JavaScript: they become constructors—factories for objects
```
// Set up instance data
function Point(x, y) {
    this.x = x;
    this.y = y;
}
// Methods
Point.prototype.dist = function () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
};

var jane = {
    name: 'Jane',
    friends: [ 'Tarzan', 'Cheeta' ],
    logHiToFriends: function () {
        this.friends.forEach(function (friend) {
            // `this` is undefined here
            console.log(this)
            console.log(this.name+' says hi to '+friend);
        },this);
    }
}
```