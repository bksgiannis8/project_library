// array to store all of the book objects
let myLibrary = [];


// Book function constructor
function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    this.info = function() {
      return title + " " + "by" + " " + author + "," + " " + pages + " " + "pages," + " " + read
    }
  }
  

// function to add a book to the library
function addBookToLibrary() {
    let title = input
    let author = input
    let pages = input
    let read = input

    // creating the new book
    let newBook = new Book(title, author, pages, read)

}