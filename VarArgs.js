function add() {
    let sum = 0;
    console.log(Array.isArray(arguments));
    for(let val of arguments) {
        sum += val;
    }
    // for(let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
    return sum;
}

let result;
//* VARARGS -> Variable number of arguments(variadic function)

result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

//! Arrow functions do NOT have argumments object
const addArrow = (...res) => {
    //% this is not arguments of arrow function
    //% but arguments from outside the function (lexical scope)

    //! There is NO 'this' or 'arguments' in arrow function
    //! It borrows from outside (lexical scope)

    console.log("arguments : ", arguments);
    console.log("this : ", this);
    console.log("rest : ", res);

}

console.log("outside", arguments);
addArrow(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function outer(a, b) {
    console.log("outer arguments", arguments);
    console.log(`outer : ${this}`);

    const add = () => {
        console.log("arguments", arguments); //! Borrowed from outer
        console.log(`${this}`); //! Borrowed from outer
    }

    add(1, 2, 3)
}