function zoo(outin) {

    let tiger ="Tiger Here";
    const lion ="Lion Here";
 
    cageArrow = () => {
        
    }
    function cage(input) {
        tiger += " " + input + " " + outin
        console.log({tiger})
    }
    return cage;
}

const ca1 = zoo("z1");
const ca2 = zoo("z2");
ca1("ca1");
ca2("ca2");