//import { MessageGreeting } from "./Message";
// let add = function(a,b) {
// 	return a + b;
// };
function addition(a, b) {
    console.log(a + b);
}
//void fun
var add = function (a, b) { return a + b; };
console.log(add(3, 4));
var sum = function (x, y) {
    return x * y;
};
console.log(sum(10, 20)); //returns 30
//The following is an arrow function without parameters.
var Print = function () { return console.log("TypeScript void arrow function example"); };
Print(); //Output: Hello TypeScript
var Employee = /** @class */ (function () {
    function Employee(code, name, salary) {
        var _this = this;
        this.ePF = 100;
        this.display = function () { return console.log(_this.empCode + ' ' + _this.empName); };
        this.empName = name;
        this.empCode = code;
        this.eSal = salary;
    }
    return Employee;
}());
var emp = new Employee(1, 'Ram', 2000);
emp.display();
