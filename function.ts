function add (num1 :number, num2 :number, num3?:number):number{
    return num3?  num1 + num2 + num3 :num1 + num2  ;

}

console.log(add(2, 3));

console.log(add(2, 3, 5));


 // 1:17:30

 const sub =(num1: number,num2: number): number => num1 - num2;
 console.log(sub(5 ,9));
 const mult = function (num1:number, num2 : number): number {
    return num1 * num2;
 };
 console.log(mult(4,6));
 const div = (num1 : number, num2 : number) : number => num1 / num2;
 console.log(div(8,4));