var Employee = /** @class */ (function () {
    //Modifier
    function Employee() {
        this.EmpName = "";
        this.Technology = 'IT';
    }
    Employee.prototype.Task = function () {
        console.log(this.Technology);
    };
    Employee.prototype.PrintName = function () {
        console.log(this.EmpName);
    };
    Employee.prototype.Dosomething = function () {
        console.log(this.salary);
    };
    return Employee;
}());
