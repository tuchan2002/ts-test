// *** type annotations ***
const count1: number = 1;

// type inference
let count2 = 2;
// count2 = "A";
count2 = 3;

// *** object type ***
let student1 = {};
student1 = { name: "Tu" };
// student1.address = "Nam Dinh";

let student2: {
  name: string;
  age: number;
} = {
  name: "Tu",
  age: 20,
};
// student2.address = "Nam Dinh";

// *** array type ***
const arrayTest1: string[] = ["Tu"];
arrayTest1.push("Chan");

// mixed type
const arrayTest2: (string | number)[] = ["Tu", "Chan", 1];
arrayTest2.push(1);

// *** tuple type ***
const tupleTest1: [string, number] = ["Tu Chan", 20];

// optional tuple element
let tupleTest2: [string, number, boolean?];
tupleTest2 = ["A", 1];

// *** enum type ***
enum MOVEMENT_STATUS {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

let movementStatus1 = MOVEMENT_STATUS.UP;

function doSomething(m: MOVEMENT_STATUS) {
  // todo
}
doSomething(MOVEMENT_STATUS.UP);

// *** union type ***
function addNumberOrString(a: number | string, b: number | string) {
  // todo
}
addNumberOrString(1, "");

// *** aliases type ***
type superType = string | number | boolean;
let aliasesTypeVariable1: superType = 123;
