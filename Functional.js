//* Functional programming


//% 1. Pure function

function add(a, b) {
    //* Does not use external data
    //* Doest not use static

    return a + b;
}

console.log(add(5 ,7));
console.log(add(5, 7));
console.log(add(5, 7))

//! Impure function
let c = 10;

function impure(a, b) {
    c += a + b;
    return c;
}

console.log(impure(5, 7));
console.log(impure(5, 7));


//% 2.  Higher order functions

function process (a, b , action) { //# action -> function I want called
    const c = a + b;
    // console.log(c)' //# this I want to decide outside
    action(c); //# call the function user passed to us
    return c;

}

//% 3. Functions in JS are 1st class citizens (data type: object)
//% They are at par with other data types
function printIt(c) {
    console.log("I am printing", c);
}

function deleteIt(c) {
    console.log("I am deleting", c);
}

process(5, 7, printIt); //# printIt is a function passed to another function
process(5, 7, deleteIt);
process(5, 7, (c) => console.log("inline function call", c));

const array = [11, 23, 36];

const myprint = e => console.log("element", e);


//* array functional programming (higher order function)

array.forEach(e => console.log("lambda", e));
