"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));
// 1:17:30
const sub = (num1, num2) => num1 - num2;
console.log(sub(5, 9));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(4, 6));
const div = (num1, num2) => num1 / num2;
console.log(div(8, 4));
