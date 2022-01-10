function Employee(id, name) {
    
    // Instance members go into objects
    this.id = id;
    this.name = name;
    
    // Function object memeber go into Employee
    Employee.count++;

    // Instance members go into objects 
    //! Each object has its own copy of this function - not shared
    this.print = function() {
        console.log("ID: " + this.id + " Name: " + this.name + " Count: " + Employee.count);
    }

}

Employee.count = 0;

Employee.prototype.baseSalary = 50000;

// Prototype members go into the prototype object (shared, added only once)
Employee.prototype.print_employee = function() {
    console.log("From prototype: " + "ID: " + this.id + " Name: " + this.name);
}

var emp1 = new Employee(1, "Brendan");

var emp2 = new Employee(2, "Tom");

console.log(emp1);

emp1.print();
emp2.print_employee();
console.log(emp1.__proto__ === Employee.prototype);


