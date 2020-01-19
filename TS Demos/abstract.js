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
var Shape = /** @class */ (function () {
    function Shape(ShName) {
        this.name = ShName;
    }
    Shape.prototype.display = function () {
        console.log("Dispaly : " + this.name);
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(nm) {
        return _super.call(this, nm) || this;
    }
    Rectangle.prototype.calculateArea = function (m1, m2) {
        var res = m1 * m2;
        return "Areaa=" + res;
    };
    return Rectangle;
}(Shape));
var Traingle = /** @class */ (function (_super) {
    __extends(Traingle, _super);
    function Traingle(nm) {
        return _super.call(this, nm) || this;
    }
    Traingle.prototype.calculateArea = function (m1, m2) {
        var res = 0.5 * m1 * m2;
        return "Area=" + res;
    };
    return Traingle;
}(Shape));
var objRect = new Rectangle("This is rectangle");
objRect.display();
console.log(objRect.calculateArea(2, 3));
var objTraingle = new Traingle("This is Traingle");
objTraingle.display();
console.log(objTraingle.calculateArea(2, 3));
