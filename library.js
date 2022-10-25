// array to store all of the book objects
let myLibrary = [];


// Book function constructor
function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
      return title + " " + "by" + " " + author + "," + " " + pages + " " + "pages," + " " + read;
    }
}
  

// function to add a book to the librarys
function addBookToLibrary() {
    
    let getTitle = document.getElementById("title") // DOM to take the inputs of title
    let getAuthor = document.getElementById("author") // DOM to take the inputs of author
    let getPages = document.getElementById("pages") // DOM to take the inputs of pages
    let getRead = document.getElementById("read") // DOM to take the inputs of read

    // creating the new book
    let newBook = new Book(getTitle, getAuthor, getPages, getRead);
    myLibrary.push(newBook);

}

addBookToLibrary()

console.log(myLibrary)
