"use strict";
let lname;
lname = "Ismail";
let newname = lname.toUpperCase();
console.log(newname); //CONSOLE OUTPUT : ISMAIL 
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt("25");
let isValid = false;
console.log(isValid);
let empList;
empList = ["John", "Jane", "Tom"];
let numList;
numList = [1, 34, 67, 89, 54];
let newnum = numList[5];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 89);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum); // [34, 67]
console.log(num);
console.log(results); // [34, 67, 89]
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c;
c = Color.Blue;
console.log(c);
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
let department;
department = "IT";
department = 5;
