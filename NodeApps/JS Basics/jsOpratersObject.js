var a=1;// a is contaning value 1 as numeric
var b="1" // b is contaning value 1 as string

console.log(a==b)
// checking equallity 
// == sign uses value parser for equality

console.log(a===b)
// checking equallity 
// === sign uses value uand type parser for equality


//!== fro not equal 

var c='10xyz';
console.log(parseInt(c));
// parse for left to right for integer tll trhe first string is not occured

var d='100.30pqr';
console.log(parseFloat(d));
//parse from left to right for floating point value till the first string is not occured

// parsing  from left to right


var o1={x:10}
var o2=o1;
//o1 and o2 will pointing to same location for x(refrance)
// if 02 is changing the value of x, the o1 will also change the value.

o2.x=20;

console.log('o1.x '+o1.x+' o2.x '+ o2.x)
o2.x=20
console.log('after changing the value o1.x '+o1.x+' o2.x '+ o2.x)

// creaete a blank object and copy the data from o1 in to blank object
var o3=Object.assign({},o1);

console.log('o3.x '+ o3.x+ ' o1.x '+o1.x);

o3.x=30;
console.log(' after changing the value o3.x '+ o3.x+ ' o1.x '+o1.x);




