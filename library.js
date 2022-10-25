// array to store all of the book objects
let myLibrary = [];


// Book function constructor
function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    this.info = function() {
      return title + " " + "by" + " " + author + "," + " " + pages + " " + "pages," + " " + read;
    }
  }
  

// function to add a book to the librarys
function addBookToLibrary() {
    let bookTitle = prompt()
    let bookAuthor = prompt()
    let bookPages = prompt()
    let bookRead = prompt()

    // creating the new book
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);

}

addBookToLibrary()