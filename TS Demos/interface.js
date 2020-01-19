"use strict";
exports.__esModule = true;
var Book = /** @class */ (function () {
    //constructor 
    function Book(bookname, author) {
        this.bookname = bookname;
        this.author = author;
    }
    //function 
    Book.prototype.ListDetails = function () {
        console.log("Book Title -  :   " +
            this.bookname + "  " + "Author -  :   "
            + this.author);
    };
    Book.prototype.Display = function () {
        return "Book Name- " +
            this.bookname + " " +
            "Author" + this.author;
    };
    return Book;
}());
exports.Book = Book;
var bookObj = new Book("Microsoft Azure", "Vasudha");
bookObj.ListDetails();
console.log(bookObj.Display());
