//# 1. here the function is being used to compute
//# If the function name starts with lower case DONT use new

function add(a, b) {
    return a+b;
}

//! absence of new just runs (executes) the function code

var result = add(10, 20);
console.log(result);


//% 2. Functions can also be used to create new objects
//% Function names which start with upper case are supposed to be use with new

function Employee(id, name) {
    this.id = id;
    this.name = name;
}

var brendan = new Employee(1, "Brendan");
var lars = new Employee(2, "Lars");
console.log(brendan);
console.log(lars);

