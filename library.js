// array to store all of the book objects
let myLibrary = []; 


// Book function constructor
function Book(title, author, pages, read) {
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

    // creating the new book
    let newBook = new Book(getTitle, getAuthor, getPages, getRead);
    myLibrary.push(newBook);
    console.log(myLibrary);
}


// Displaying the newly created book in a new row in the table
function AddRow() {
    const tBody = document.querySelector("#table");
    tBody.innerHTML = "";
    myLibrary.forEach((book) => {
      const htmlBook = `
        <tr>
          <td>${book.name}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td>${book.read}</td>
        </tr>
        `;
      tBody.insertAdjacentHTML("afterbegin", htmlBook);
    });
}



// Give the ADD BOOK button an onclick event to add a book to the library
let button = document.getElementById("add-btn");
button.addEventListener("click", addBookToLibrary);
button.addEventListener("click", AddRow);




 

  





