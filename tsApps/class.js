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
var MyMath = /** @class */ (function () {
    // private  x:number=0;
    // private  y:number=0;
    // constructor (x1:number,y1:number){
    //     this.x=x1;
    //     this.y=y1;
    // }
    function MyMath(x, y) {
        this.x = x;
        this.y = y;
    }
    MyMath.prototype.add = function () {
        return this.x + this.y;
    };
    MyMath.prototype.sub = function () {
        return this.x - this.y;
    };
    return MyMath;
}());
var obj = new MyMath(30, 20);
console.log("add =" + obj.add());
console.log("sub =" + obj.sub());
var a = "1000aaa";
console.log(parseInt(a)); // convert to number from left to right, find the first char
var b = "qqq10000";
console.log(parseInt(b)); // this will return the value as NAN, becaue there is no number in left sides
var myMathDerived = /** @class */ (function (_super) {
    __extends(myMathDerived, _super);
    function myMathDerived(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    myMathDerived.prototype.add = function () {
        return this.a + this.b + 1000;
    };
    myMathDerived.prototype.mult = function () {
        return this.a * this.b;
    };
    return myMathDerived;
}(MyMath));
var objBase = new myMathDerived(300, 200);
console.log("For Base Type add=" + objBase.add());
var objn = new myMathDerived(30, 20);
console.log("add=" + objn.add());
console.log("Mult=" + objn.add());
