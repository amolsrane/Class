"use strict";
exports.__esModule = true;
var MessageGreeting = /** @class */ (function () {
    function MessageGreeting() {
    }
    MessageGreeting.prototype.mygreet = function () {
        console.log("Hello World!!!");
    };
    MessageGreeting.prototype.Display = function () {
        return "Ola friends.....!!!!!";
    };
    MessageGreeting.prototype.Calculate = function (x, y) {
        return "Sum of " + x + " &" + " " + y + "is---" + (x + y);
    };
    MessageGreeting.prototype.Sqaure = function (x) {
        return x * x;
    };
    return MessageGreeting;
}());
exports.MessageGreeting = MessageGreeting;
// var obj =new MessageGreeting();
// obj.mygreet();
// console.log(obj.Display());
// console.log(obj.Calculate(2,4));
// console.log(obj.Sqaure(5));
