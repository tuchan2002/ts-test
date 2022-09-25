// GENERICS
type StrArr = Array<string>;
type NumArr = Array<number>;

const last = (arr: Array<string>) => arr[arr.length - 1];

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l1 = lastT([1, 2, 3]);
const l2 = lastT<string>(["a", "b", "c"]);
console.log(l1, l2);

const makeArrXY = <X, Y = number>(x: X, y: Y) => [x, y];
const m1 = makeArrXY(5, 6);
const m2 = makeArrXY<string>("a", 5);
console.log(m1, m2);

// GENERICS EXTENDS
// extends o day nghia la ta phải chuyền vào 1 cái obj nào đó
// mà có 2 props bắt buộc là firstName, lastName
const makeFullNameT = <T extends { firstName: string; lastName: string }>(
    obj: T
) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
});
const n1 = makeFullNameT({ firstName: "tran", lastName: "tu", age: 20 });
console.log(n1);

const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid,
    };
};
const empOne = addNewEmployeeT({ name: "tom", age: 2 });
console.log(empOne.name, empOne);

// GENERICS in INTERFACE
interface Resource<T> {
    uid: number;
    name: string;
    data: T;
}
const resourceOne: Resource<string> = {
    uid: 1,
    name: "Person",
    data: "hello",
};

const resourceTwo: Resource<object> = {
    uid: 1,
    name: "Person",
    data: { name: "Avenger" },
};
