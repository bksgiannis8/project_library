// array to store all of the book objects
let myLibrary = []; 

// Book function constructor
function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
  
// function to add a book to the library
function addBookToLibrary() {
    
    // DOM elements
    let getTitle = document.getElementById('title').value; // DOM to take the inputs of title
    let getAuthor = document.getElementById('author').value; // DOM to take the inputs of author
    let getPages = document.getElementById('pages').value; // DOM to take the inputs of pages
    let getRead = document.querySelector('input[name="read"]:checked').value; // DOM to take the inputs of read
    console.log(getTitle, getAuthor, getPages, getRead)

    // creating the new book
    let newBook = new Book(getTitle, getAuthor, getPages, getRead);
    myLibrary.push(newBook);
    console.log(getTitle, getAuthor, getPages, getRead)
    console.log(myLibrary)

}

// Give the ADD BOOK button an onclick event to add a book to the library
let button = document.getElementById("add-btn");
button.addEventListener("click", addBookToLibrary);



