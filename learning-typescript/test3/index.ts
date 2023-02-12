// mac dinh moi thu (variables/functions)
// ben trong class la public

// readonly: chi dc read chu ko dc sua

class Animal {
  static id: number = 0;

  protected uid: number;
  protected firstName: string;
  protected lastName: string;
  protected age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.uid = Animal.id++;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Person extends Animal {
  protected height: number;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    height: number
  ) {
    super(firstName, lastName, age);
    this.height = height;
  }

  getAge() {
    return this.age;
  }
}

const tuchan1 = new Person("Tran", "Tu", 20, 170);
const tuchan2 = new Person("Tran", "Tu", 20, 170);
const tuchan3 = new Person("Tran", "Tu", 20, 170);
console.log(tuchan1, tuchan2, tuchan3);
console.log(Animal.id);
