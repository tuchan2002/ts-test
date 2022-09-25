// CLASS
export class Employee {
    public name: string;
    private age: number;
    readonly male: boolean;
    constructor(name: string, age: number, male: boolean) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`;
    }
}

const tuchan = new Employee("TranAnhTu", 20, true);
const bob = new Employee("Bob", 30, false);

let employees: Employee[] = [];
employees.push(tuchan);
employees.push(bob);
employees.forEach((employee) => {
    console.log(employee.print());
});
