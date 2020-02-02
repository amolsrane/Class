var o1 = { p: 10 };
console.log("value of p in o1=" + o1.p);
var q2 = o1; // assign refrance/ location of o1 by o2
console.log("value of p in o2=" + q2.p);
q2.p = 400;
console.log("value of p in o1 after o2 Update=" + o1.p);
console.log("value of p in o2 after o2 Update=" + q2.p);
// clone the o1 in o3
// createing the blank target and  cloning 01 into the blank\
var o3 = Object.assign({}, o1);
console.log("value of p in o3=" + o3.p);
o3.p = 600;
console.log("value of p in o1 after o3 Update=" + o1.p);
console.log("value of p in o3 after o3 Update=" + o3.p);
