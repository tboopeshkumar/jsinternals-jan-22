//* Arrow functions can use "rest" parameter but not "arguments"
const add = (...rest) =>  rest.reduce((total, element) => total + element);

console.log(add(1, 2, 3, 4, 5 ,6, 7, 8, 9, 10));

//* Spread operator
function print(a, b, c) {
    console.log("a : ", a, "b : ", b, "c : ", c);
}

const array = [1,2,3]
print(...array); //* Spread the array as individual arguments