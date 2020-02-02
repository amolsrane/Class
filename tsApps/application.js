var MyClass = /** @class */ (function () {
    function MyClass(s) {
        this.s = s;
    }
    MyClass.prototype.sort = function () {
        var arrayString = this.s.split('');
        var tmp = '';
        for (var i = 0; i < arrayString.length; i++) {
            for (var j = i + 1; j < arrayString.length; j++) {
                if (arrayString[i] > arrayString[j]) {
                    tmp = arrayString[i];
                    arrayString[i] = arrayString[j];
                    arrayString[j] = tmp;
                }
            }
        }
        return arrayString.join('');
    };
    MyClass.prototype.reverse = function () {
        var arrayString = this.s.split('');
        arrayString.reverse();
        return arrayString.join('');
    };
    MyClass.prototype.noOfWords = function () {
        var arrayString = this.s.split('');
        var counts = 0;
        for (var _i = 0, arrayString_1 = arrayString; _i < arrayString_1.length; _i++) {
            var i = arrayString_1[_i];
            if (i == ' ') {
                counts += 1;
            }
        }
        console.log('11111111111111', counts);
        return counts.toString();
    };
    MyClass.prototype.appearnces = function () {
        var arrayString = this.s.split('');
        var arrays = [];
        var result = 0;
        for (var i = 0; i < arrayString.length; i++) {
            for (var j = 0; j < arrayString.length; j++) {
                if (arrayString[i] == arrayString[j]) {
                    result++;
                }
            }
            if (arrays.indexOf(arrayString[i] + ':' + result) > -1) {
                //In the array!
            }
            else {
                //Not in the array
                arrays.push(arrayString[i] + ':' + result);
            }
            result = 0;
        }
        return arrays.toString();
    };
    return MyClass;
}());
var value = new MyClass("zdacfge amol abc");
// 1. sort a string by alphabet
console.log("Value after sort " + value.sort());
// 2. Reverce a string find out appearnces of  the specific char in  a string and its frequency (in number)
console.log("Value after reverse " + value.reverse());
console.log("Number of words " + value.noOfWords());
var value1 = new MyClass("this is the demo demo demo");
console.log("appearnces of  the specific char " + value1.appearnces());
