//! C++, Java, C# class based object oriented
//* JavaScript is prototype based object oriented

//* Object is also a dictionary (id is the key, 1 is the value)

var obj = { key: "value", key2: "value2" } ; //% Object literal 

var person = {
    id: 1,                  //! Field or member variable
    name: 'Brendan Eich',   //! Field or member variable
    print: function print(){
        console.log("I am print function");
    }
};

//? __proto__ <--> [[Prototype]]

person.print();

//#          son     with the father
console.log(person.toString());