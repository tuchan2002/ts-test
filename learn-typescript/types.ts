// EXPLICIT TYPES
let myName: string;
myName = "TuChan";

let students: string[] = ["tom", "jerry"];

let mixedArray: (string | number | boolean)[];
mixedArray = ["tuchan", 20, true];
mixedArray.push("tutran");

let id: string | number;
id = "123";
id = 123;

let hobby: "book" | "music";
hobby = "book";

let personO: object;
personO = { name: "tuchan", age: 30 };

let student: {
    name: string;
    age: number;
    isGood: boolean;
};

student = {
    name: "tuchan",
    age: 20,
    isGood: true,
    // skills: ["js"],
};

// ANY TYPES
let age: any = 20;
age = "tuchan";
age = { a: 1, b: 2 };
age = [1, 2, 3];

// TYPE ALIAS
type StringOrNumber = string | number;
type Student = { name: string; id: StringOrNumber };

const studentDetails = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student ${studentName} has id: ${id}`);
};

studentDetails(123, "TuChan");

// TUPLE
const tup: [string, boolean, number] = ["tuchan", false, 20];
