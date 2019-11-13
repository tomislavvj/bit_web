function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.fullName = function() {
  return this.name + " " + this.surname;
};

function Employee(name, surname, job, salary) {
  this.job = job;
  this.salary = salary;
  Person.call(this, name, surname);
}

Employee.prototype.employee = function() {
  return this.job + " " + this.salary;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

var pera = new Person("Pera", "Peric");

var employee = new Employee(pera, "programer", "100.000");
console.log(Employee.prototype);
console.log(Person.prototype);
