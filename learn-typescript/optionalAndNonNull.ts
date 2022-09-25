// OPTIONAL AND NON NULL
// OPTIONAL: nghĩa là có hoặc không có cũng đc
const addNum = (a: number, b?: number) => (b ? a + b : a);

console.log(addNum(1, 2));
console.log(addNum(1));

const addNonNull = (a: number, b?: number) => a + b!;
console.log(addNonNull(4, 6));
console.log(addNonNull(3));
