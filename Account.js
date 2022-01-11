function Account(accountNumber, holdersName, initialBalance) {
    this.accountNumber = accountNumber;
    this.holdersName = holdersName;
    this.balance = initialBalance;
    Account.count++;
}

Account.count = 0;

Account.prototype.deposit = function(amount) {
    this.balance += amount;
}

Account.prototype.withdraw = function(amount) {
    if(this.balance - amount >= 0) {
    this.balance -= amount;
    }
}

Account.prototype.print = function() {
    console.log("Account Number: " + this.accountNumber + " Name: " + this.holdersName + " Balance: " + this.balance);
}

var account1 = new Account(1, "Brendan", 100);
var account2 = new Account(2, "Tom", 200);

account1.print();
account2.print();

account1.deposit(100);
account1.withdraw(50);
account1.print();

console.log("Total number of accounts: " + Account.count);


console.log("Total number of accounts: " + account2.constructor.count);

