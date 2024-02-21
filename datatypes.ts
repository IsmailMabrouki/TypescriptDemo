let lname: string;

lname = "Ismail";

let newname =lname.toUpperCase();

console.log(newname); //CONSOLE OUTPUT : ISMAIL 


let age: number;

age = 25;
age = 25.5;

let dob ="25";

let result = parseInt("25"); 

let isValid : boolean =false;

console.log(isValid);

let empList : string[];
empList=["John","Jane", "Tom"];
let numList : Array<number>;
numList=[1,34,67,89,54];
let newnum = numList[5];

let results =numList.filter((num)=> num>2);
let num  = numList.find((num)=> num === 89); 
let sum = numList.reduce((acc,num)=> acc+num);
console.log(sum) ;// [34, 67]
console.log(num);
console.log(results);// [34, 67, 89]
enum Color {
        Red , Green , Blue
}
let c :Color;
c = Color.Blue;
console.log(c);

let swapNumbs: [firstNumber:number ,secondNumber: number];

function swapNumbers (num1 :number, num2:number): [number, number]{
    return [num2,num1]
}
swapNumbs = swapNumbers(10,20);

console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

let department :any ; 

department = "IT";
department = 5;