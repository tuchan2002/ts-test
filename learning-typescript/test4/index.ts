abstract class Employee {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract getSalary(): number;

  getInfo() {
    return `${this.name}, ${this.age}`;
  }
}

class FulltimeEmployee extends Employee {
  salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

const employee1 = new FulltimeEmployee("TuChan", 20, 3000);
console.log(employee1.getSalary());
