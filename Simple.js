g = 10; //? inferred as number (GLOBAL dict)
var x = 7; //? inferred as number (LOCAL dict)
var y = 8; //? inferred as number (LOCAL dict)

function add(a, b) {
    var c = a + b;
    return c;
}

var z = add(x, y);
console.log(z);