abstract class Convertor{

    Add(n1:number,n2:number):number{
        return n1+n2
    }

    abstract DecimalToHax();
}
interface  IConvertor{

    Add(n1:number,n2:number);

    DecimalToHax();
}