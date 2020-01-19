"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fullName, gender, email, qual) {
        var _this = _super.call(this, fullName, gender, email) || this;
        _this.qualification = qual;
        return _this;
    }
    Student.prototype.ListDetails = function () {
        console.log("Name -  :   " + this.fullName);
        console.log("Gender -  :   " + this.gender);
        console.log("Email -  :   " + this.email);
        console.log("qualification -  :   " + this.qualification);
    };
    return Student;
}(person_1.Person));
var stuObj = new Student("Sasha", "female", "sara@hi.com", "Mtech");
stuObj.ListDetails();
