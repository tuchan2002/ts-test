// *** Optional Parameters ***
var sum3 = function (a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
};
console.log(sum3(1, 2), sum3(1, 2, 3));
// *** spread vs rest ***
var multiply = function (n) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return numbers.map(function (num) { return n * num; });
};
console.log(multiply(5, 1, 2, 3));
