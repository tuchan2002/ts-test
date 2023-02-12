// *** type annotations ***
var count1 = 1;
// type inference
var count2 = 2;
// count2 = "A";
count2 = 3;
// *** object type ***
var student1 = {};
student1 = { name: "Tu" };
// student1.address = "Nam Dinh";
var student2 = {
    name: "Tu",
    age: 20
};
// student2.address = "Nam Dinh";
// *** array type ***
var arrayTest1 = ["Tu"];
arrayTest1.push("Chan");
// mixed type
var arrayTest2 = ["Tu", "Chan", 1];
arrayTest2.push(1);
// *** tuple type ***
var tupleTest1 = ["Tu Chan", 20];
// optional tuple element
var tupleTest2;
tupleTest2 = ["A", 1];
// *** enum type ***
var MOVEMENT_STATUS;
(function (MOVEMENT_STATUS) {
    MOVEMENT_STATUS["UP"] = "UP";
    MOVEMENT_STATUS["DOWN"] = "DOWN";
    MOVEMENT_STATUS["LEFT"] = "LEFT";
    MOVEMENT_STATUS["RIGHT"] = "RIGHT";
})(MOVEMENT_STATUS || (MOVEMENT_STATUS = {}));
var movementStatus1 = MOVEMENT_STATUS.UP;
function doSomething(m) {
    // todo
}
doSomething(MOVEMENT_STATUS.UP);
// *** union type ***
function addNumberOrString(a, b) {
    // todo
}
addNumberOrString(1, "");
var aliasesTypeVariable1 = 123;
