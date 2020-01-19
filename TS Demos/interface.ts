interface IBook
{
    ListDetails():void;
    Display():string;

}
export class Book implements IBook{ 
   //field 
   bookname:string;
   author:string;
    //constructor 
   constructor(bookname:string,author:string) { 
      this.bookname = bookname; 
      this.author=author;
  }  
   //function 
   ListDetails():void { 
      console.log("Book Title -  :   "+
      this.bookname + "  " + "Author -  :   "
      +this.author);
    } 
    Display():string{
         return "Book Name- " + 
         this.bookname + " " + 
         "Author" + this.author;
    }
}

var bookObj = new Book("Microsoft Azure","Vasudha"); 
bookObj.ListDetails()
console.log(bookObj.Display());