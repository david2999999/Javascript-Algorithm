// Simple collections of name-value pairs
var obj = new Object();

var obj2 = {};

obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};

// To declare a JS object, [key, value] pairs are used, where the key can be considered
// an attribute of the object and the value is the attribute value

// In OOP, an object is an instance of a class, which defines the characteristics of the
// object.

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('title', 'pag', 'isbn');

// access attributes using the dot operator
console.log(book.title); //outputs the book title
book.title = 'new title'; //updates the value of the book title
console.log(book.title); //outputs the updated value

// A class can also contain functions
Book.prototype.printTitle = function(){
    console.log(this.title);
};
book.printTitle();

// Using prototype allows the printTitle() function to be shared with all instances and only one copy will be
// created. When we use a class-based definition, each instance will have its own copy of the function.
// Using the prototype method saves memory and processing cost with regard to assigning the functions to the
// instance.
// In the prototype method, we can only declare public functions and properties
// In the class-based definition, we can declare private functions and properties and the other methods inside
// the class can also access them