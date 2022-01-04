// function anonymous() {

//% Javascript is a dynamic scripting (no pre-compilation) language

//? Defining a variable called g
g = 10; //! There is no var before g (GLOBAL variable)

//? These are ALSO variable
var x = 10;
var y = 20;

function add(a, b) {
    var c = a + b;  //* Local (in node but goes into GEC for browser)
    return c; //*  Local
}

console.log(add(x,y));

// }