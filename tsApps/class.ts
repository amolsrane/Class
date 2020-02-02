class MyMath{
    // private  x:number=0;
    // private  y:number=0;

    // constructor (x1:number,y1:number){
    //     this.x=x1;
    //     this.y=y1;
    // }

    constructor(private x:number,private y:number){}

    add():number{
        return this.x+ this.y;
    }

    sub():number{
        return this.x - this.y;
    }
}


let obj =new MyMath(30,20);
console.log(`add =${obj.add()}`)

console.log(`sub =${obj.sub()}`)

let a="1000aaa" 

console.log(parseInt(a)) // convert to number from left to right, find the first char

let b="qqq10000" 
console.log(parseInt(b)) // this will return the value as NAN, becaue there is no number in left sides



class myMathDerived extends MyMath{
    
    constructor(private a: number,private b:number){
        super(a,b);
    }

    add(): number{
        return this.a+this.b+1000
    }
    mult(): number{
        return this.a * this.b
    }
}

let objBase:MyMath=new myMathDerived(300,200);
console.log(`For Base Type add=${objBase.add()}`);

let objn =new myMathDerived(30,20);
console.log(`add=${objn.add()}`);
console.log(`Mult=${objn.add()}`);



// create a class that will have following oprations to perform on screen 
// 1. sort a string by alphabet
// 2. Reverce a string find out appearnces of  the specific char in  a string and its frequency (in number)
// 3.  find out how many words present in a string.