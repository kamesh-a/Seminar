/**
 * Inheritance 
 */

// version 1
```
function Person(name) {
    this.name = name;
}
Person.prototype.describe = function() {
    return "Person " + this.name;
};

function Worker(name, title) {
    Person.call(this, name);
    this.title = title;
}
Worker.prototype.__proto__ = Person.prototype;
Worker.prototype.describe = function() {
    return this.title + " " + this.name;
};
```
// version 2
```
function Person(name) {
    this.name = name;
}
Person.prototype.describe = function() {
    return "Person " + this.name;
};

function Worker(name, title) {
    Person.call(this, name);
    this.title = title;
}
Worker.prototype.__proto__ = Person.prototype;
Worker.prototype.describe = function() {
    return this.title + " " + this.name;
    
};

Worker.prototype.superDescribe = function() {
    return this.__proto__ // worker prototype
    			.__proto__ // person prototyp
    			.describe // person function method
    			.apply(this,arguments) // applying context and arguments
};
```
// ES5
```
function Person(name) {
    this.name = name;
}
Person.prototype.describe = function() {
    return "Person " + this.name;
};

function Worker(name, title) {
    Person.call(this, name);
    this.title = title;
}
Worker.prototype = Object.create(Person.prototype);
Worker.prototype.describe = function() {
    return this.title + " " + this.name;
    
};

Worker.prototype.superDescribe = function() {
    return this.__proto__ // worker prototype
    			.__proto__ // person prototyp
    			.describe // person function method
    			.apply(this,arguments) // applying context and arguments
};

```