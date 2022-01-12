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

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
 } // 1 2 3 undefined undefined undefined undefined seven


arr.forEach(value => console.log(value)); // 1 2 3 seven
