"use strict";
exports.__esModule = true;
var message_1 = require("./message");
var obj = new message_1.MessageGreeting();
obj.mygreet();
console.log(obj.Display());
console.log(obj.Calculate(2, 4));
console.log(obj.Sqaure(5));
var x = 4; //synatx of JS
var s = 'Contoso';
var nm1 = "India"; // TS specific
var str1 = "Ganesha"; // TS specific
console.log('now the value of str1 is ' + str1 + "from " + nm1);
str1 = 44;
console.log('now the value of str1 is ' + str1);
// let fName1:string = 'Sandra'; 
// let lName1:string = 'Frank'; 
// console.log("Your name is ----"+ fName1 +" "+ lName1); 
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("Sum=" + sum);
var number1 = 4;
if (number1 > 0) {
    console.log("Number is positive");
}
else {
    console.log("Number is negative");
}
//void define function
function HiMessage(Fname, Lname) {
    console.log('Welcome---' + Fname + " " + Lname);
}
//invoke function
HiMessage("Sandra", "Parker");
function SumIt(N1, N2) {
    return N1 + N2;
}
//invoke function
console.log(SumIt(2, 4));
var sports = ['Hockey', 'cricket', 'badminton'];
function display(sp) {
    for (var i = 0; i < sp.length; i++) {
        console.log(sports[i]);
    }
}
display(sports);
