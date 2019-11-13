class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `name:${this.name} surname:${this.surname}`;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    return `${super.getFullName()} ${this.getSalary()}`;
  }
  getSalary() {
    return `salary:${this.salary}`;
  }
}

var radnik = new Employee("pera", "peric", "programer", "1000");
console.log(radnik.getData());
