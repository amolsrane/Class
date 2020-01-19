function add1(a:string, b:string):string;

function add1(a:number, b:number): number;

function add1(a: any, b:any): any {
    return a + b;
}

console.log(add1("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add1(10, 20)); // returns 30 
console.log(add1(10.5, 20)); // returns 30 