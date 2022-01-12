class Account {

    //! Static field
    static count = 0; //! Mummy 

    //#Fields
    accountNumber = 0;

    //^ # is strictly private( works only for class)

    #holdersName = "";
    #balace = 0; //? _ before property is a "request" to caller to NOT use it directly.

    //% Constructor
    constructor(accountNumber, holdersName, initialBalance) {
        this.accountNumber = accountNumber; //% kid
        this.holdersName = holdersName; //% kid
        this.balance = initialBalance; //% kid
        Account.count++;
    }   

    get balance() { return this.#balance }  //! READ-ONLY

    get name() { return this.#holdersName}; //* READ-WRITE
    set name(newName) { this.#holdersName = newName; } //* READ-WRITE
    //* These are not called function but METHDOS

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) { //* prototype
        if (this.balance - amount >= 0) {
            this.balance -= amount;
        }
    }

    print() { //* prototype
        console.log("Account Number: ", this.accountNumber);
        console.log("Name: ", this.holdersName);
        console.log("Balance: ", this.balance);        
    }
}

var account1 = new Account(1, "Brendan", 100);
var account2 = new Account(2, "Tom", 200);

account1.print();
account2.print();

account1.deposit(100);
account1.withdraw(50);
account1.print();
