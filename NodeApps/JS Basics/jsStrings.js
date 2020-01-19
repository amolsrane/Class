var name = 'Amol Rane';

console.log("Upper case" + name.toUpperCase());
console.log("Lower case" + name.toLowerCase());
console.log("lenght of " + name + ' is ' + name.length);

var names = ['Sean connary', 'George Luznby', 'abc', 'xyz', 'pqr'];

for (var i = 0; i < names.length; i++) {
    if (names[i].startsWith('G')) {
        console.log("names ", names[i])
    }
}


// itrating over the names array
for (var n in names) {
    // itrating over each name in array 
    for (var c in names[n]) {
        // if name contains 'o'
        if (names[n][c] === 'O') {
            console.log("LIST", names[n])
        }
    }
}


// create javascript array and load  all even and odd numbers from array with teher indexes


var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var even = [];
var odd = [];
for (var d = 0; d < a.length; d++) {
    var num = a[d] % 2;


    if (num == 1) {
        odd.push(a[d])

    } else {
        even.push(a[d])
    }


}

console.log("even Numbers", even)
console.log("even Numbers", odd)




//=====================================

// sort the data in array by numbers and by charecters


// var arra = ['a','b','r','d','f']
var arra = [6, 5, 3, 7, 12, 11]
// console.log("Sorted Data", arra);
var xyz = [];
for (var i = 0; i < arra.length; i++) {
    for (var j = 1; j < arra.length ; j++) {
        if (arra[j] >= arra[i]) {
            xyz.push(arra[i])
           break;
        }
    }
}
console.log("Sorted Data xyz ", xyz);