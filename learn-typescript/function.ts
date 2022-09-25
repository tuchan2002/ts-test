const square = (side: number) => side * side;
console.log(square(3));

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
};
add(1, 2);

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log("sum =", a + b);
    console.log(c);
};
addDefault(1, 2, "tuchan");

const minus = (a: number, b: number): number => a + b;

// FUNCTION SIGNATURE

// let greet: Function; // SIGNATURE
// greet = () => {
//     console.log("Hello");
// };
// greet();

let greetHi: (a: string, b: string) => void; // SIGNATURE
greetHi = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
};
greetHi("tuchan", "hello world");

type Cat = { name: string; age: number };
let feedTheCat: (cat: Cat) => void; // SIGNATURE
feedTheCat = ({ name, age }: Cat) => {
    console.log(`${name}-${age} is eating...`);
};
feedTheCat({ name: "tom", age: 1 });
