for (let i=0;i<5;i++){
    console.log("Inside the loop i ",i);
}


// console.log("Outside the loop i ",i);
// i++;
// console.log("After Increment the loop i ",i);

//explicit datatype declaration

let j:number;
j=10;
console.log('j='+j+'type of j'+typeof(j))

// implicit type declaration
let i=100
console.log('i='+i+'type of i'+typeof(i))


// String 

let n: string;
n="Amol"

console.log('n='+n+'type of n'+typeof(n))


let n1:any;
n1=100;
console.log('n1='+n1+'type of n1'+typeof(n1))

n1="100";
console.log('n1='+n1+'type of n1'+typeof(n1))

n1=true;
console.log('n1='+n1+'type of n1'+typeof(n1))

n1=new Date();
console.log('n1='+n1+'type of n1'+typeof(n1))




// union types
// we can declare the variable more than one datatype

let v:number | string;
v=100;
console.log('v='+v+'type of v'+typeof(v))


v= "amol"
console.log('v='+v+'type of v'+typeof(v))

