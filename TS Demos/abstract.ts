
abstract class Shape{
    name: string;
    constructor(ShName:string)
    {
        this.name=ShName;
    }
    display(): void{
        console.log(this.name);
    }
    abstract calculateArea(m1:number,m2:number):string;
}

class Rectangle extends Shape{
    constructor(nm:string){
    super(nm);
    }
   calculateArea(m1:number,m2:number):string
    {
        var res=m1*m2;
        return "Areaa=" + res;
    }
}
class Traingle extends Shape{
    constructor(nm:string){
    super(nm);
    }
    calculateArea(m1:number,m2:number):string
    {
        var res=0.5 *m1*m2;
        return "Area=" + res;
    }
}

var objRect=new Rectangle("This is rectangle");
objRect.display()
console.log(objRect.calculateArea(2,3));

var objTraingle=new Traingle("This is Traingle");
objTraingle.display()
console.log(objTraingle.calculateArea(2,3));

