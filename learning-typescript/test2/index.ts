// *** Optional Parameters ***
const sum3 = (a: number, b: number, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

console.log(sum3(1, 2), sum3(1, 2, 3));

// *** spread vs rest ***
const multiply = (n: number, ...numbers: number[]) => {
  return numbers.map((num) => n * num);
};
console.log(multiply(5, 1, 2, 3));
