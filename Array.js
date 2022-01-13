//! There are No  "arrays" (traditional contiguous allocation) in JavaScript!
//* JavaScript ONLY has DICTIONARIES 

//# Local and Globals -> dictionaries (hashtable)
//# Object -> dictionaries with __proto__ ([[Prototype]])
//# Function -> Object with additional prototype
//# Array -> Object with .length property

const arr = [1, 2, 3];

console.log(arr);

//Only postive number index will be counted for length
arr["boo"]= "yeah";
arr[-1] = 10;

arr[7] = "seven";

console.log(arr); // [ 1, 2, 3, <4 empty items>, 'seven', boo: 'yeah', '-1': 10 ]
console.log(arr.length); // 8 (Last positive index + 1)

//% 1 - C for
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
 } // 1 2 3 undefined undefined undefined undefined seven


 //% 2  - for in (inDEX -> keys)
 console.log("for in");
 for(let index in arr)
    console.log(index, arr[index]); 
    // 0 1
    // 1 2
    // 2 3
    // 7 seven
    // boo yeah
    // -1 10

//% 3 - for of (value of positive numeric keys)
console.log("for of");
for(let value of arr)
    console.log(value); // 1 2 3 undefined undefined undefined undefined seven
