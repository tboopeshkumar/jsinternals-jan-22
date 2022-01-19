'use strict'; //* Do not allow use of globals

//% Q. What is 'this'?

//% In objects 'this' refers to the object itself.
//% OTHERWISE, it points to the global object.(or undefined in use strict)


gfn = function() {
    console.log(`gfn : ${this}`);
}

var lfd = function() {
    console.log(`lfd : ${this}`);
}

var lfn = function() {
    console.log(`lfn : ${this}`);
}

//! Stop writing compute function 

function addFn(a, b) {
    return a + b;
}

//* Write arrow function for compute function 

const add = (a, b) => a + b;

//! STOP writing constructor functions

function PersonFn(id, name) {
    this.id = id;
    this.name = name;
}

PersonFn.prototype.print = function() {
    console.log(`${this.id} ${this.name}`);
}


//* Write classes instead of consctructor function
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    //* Method
    print() {
        console.log(`${this.id} : ${this.name}`);
    }
}

gfn();
lfd();
lfn();
var p = new Person(1, "Brendan");
p.print();