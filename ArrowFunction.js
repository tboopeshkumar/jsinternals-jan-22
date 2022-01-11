function sqr(x) {
    return x * x;
}

var sqr1 = function (x) {
    return x * x;
}

var sqr2 = (x) =>  x * x;

console.log(sqr(2));
console.log(sqr1(2));
console.log(sqr2(2));
console.log(sqr2.__proto__ === Function.prototype);
