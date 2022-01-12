//'use strict'; //^ (directive) This means NO GLOBAL

//! var  - original keyword for var
//% let  - Introduced in ES6 (2015) - NOT hoisted, No scope leakage
//* const



function nation() { //* functions get hoisted
    console.log(flag);
    flag = 10;
    console.log(flag);
    var flag = 10; //* var (flag) get hoisted
    console.log("flag", flag);
    if(flag == 10) {
        var flower = 5; //# Is INSIDE the if shoud not work outside
    }
    console.log("flower", flower); //! Scope leakage
   
}

nation();

