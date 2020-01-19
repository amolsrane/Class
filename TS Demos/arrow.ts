//import { MessageGreeting } from "./Message";

// let add = function(a,b) {
// 	return a + b;
// };

function addition(a:number,b:number):void
{
    console.log(a+b);
}

//void fun
let add = (a,b) => a + b;
console.log(add(3,4));


let sum = (x: number, y: number): number => {
   
    return x * y;
}

console.log(sum(10, 20)); //returns 30

//The following is an arrow function without parameters.
let Print = () => console.log("TypeScript void arrow function example");

Print(); //Output: Hello TypeScript

class Employee {
    empCode: number;
    empName: string;
    eSal:number;
    ePF:number=100;
    constructor(code: number, name: string, salary:number) {
            this.empName = name;
            this.empCode = code;
            this.eSal=salary;
    }

    display = () => console.log(this.empCode +' ' + this.empName);
 //write funtion using arrow of
 //to calulate  actual salary will be Salary - pf 
}
let emp = new Employee(1, 'Ram',2000);
emp.display();
