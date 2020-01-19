"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    //constructor 
    function Person(fullName, gender, email) {
        this.fullName = fullName;
        this.gender = gender;
        this.email = email;
    }
    //function 
    Person.prototype.ListDetails = function () {
        console.log("Name -  :   " + this.fullName);
        console.log("Gender -  :   " + this.gender);
        console.log("Email -  :   " + this.email);
    };
    return Person;
}());
exports.Person = Person;
var perObj = new Person("Sasha", "female", "sara@hi.com");
perObj.ListDetails();
