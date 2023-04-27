const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
   addBookToLibrary();
  });


//pops-up form that gets book information from user

const userInputButton = document.querySelector('.add-book')
userInputButton.addEventListener("click", function() {
    document.getElementById('popUpForm').style.display = "block";
})

  myLibrary = [];

  //instantiate Book Object
  class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
  }

  function addBookToLibrary() {
    let libraryBook = document.querySelector('#Library-container')
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('readOption').checked;
    
        let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    render();
    }

 //render books onto html page
 
  function render() {
    let libraryBook = document.querySelector('#Library-container')
    libraryBook.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.innerHTML = 
        `<div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">${book.author}</h5>
        <h5 class="pages">${book.pages}` + ` pages</h5>
        <h5 class="read">${book.read ? "Read" : "Not read yet"}</h5>
        <button class="remove-Btn" onClick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onClick="toggleRead(${i})">Read</button>`;
    libraryBook.appendChild(bookEl);
    }
  }

//function to remove book from html list

  function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
  }

  removeBook()



//function to change if book was read or not

Book.prototype.toggleRead = function() {
    this.read = !this.read;
  }

  function toggleRead(index) {
myLibrary[index].toggleRead();
render();
  }