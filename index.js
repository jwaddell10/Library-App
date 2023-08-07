/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

/* eslint-disable no-unused-vars */
const $form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  render();
});

window.addEventListener('DOMContentLoaded', () => {
  render();
});

// pops-up form that gets book information from user

let myLibrary = [];
// instantiate Book Object
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('readOption').checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  libraryBookLocalStorage.populateStorage();
  console.log(myLibrary);
}

function removeBookFromLibrary(i) {
  myLibrary.splice(i, 1);
  libraryBookLocalStorage.populateStorage();
  render();
}

// function to change if book was read or not ***Need to fix this!***

function toggleRead(i) {
  myLibrary[i].toggleRead();
  render();
}

function render() {
  libraryBookLocalStorage.checkLocalStorage();
  const libraryBook = document.querySelector('#Library-container');
  libraryBook.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]; const bookEl = document.createElement('div');
    bookEl.innerHTML = `<div class="card-header">
         <h3 class="title">${book.title}</h3>
        <h5 class="author">${book.author}</h5>
         <h5 class="pages">${book.pages}`
       + ` pages</h5>
         <h5 class="read">${book.read ? 'Read' : 'Not read yet'}</h5>
         <button id="remove-Btn(${i})" onClick="removeBookFromLibrary(${i})">Remove</button>
         <button class="toggle-read-btn" onClick="toggleRead(${i})">Read</button>`;
    libraryBook.appendChild(bookEl);
  }
}

// localstorage

const libraryBookLocalStorage = (() => {
  function populateStorage() {
    // const myLibraryString = JSON.stringify(myLibrary).replace(/]\|[[]/g, '');
    // console.log(myLibraryString, 'this is the string');
    const libraryBookStorage = window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }

  function checkLocalStorage() {
    if (localStorage.getItem('myLibrary')) {
      myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    } else {
      myLibrary = [];
    }
  }

  function updateLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }

  return {
    populateStorage,
    checkLocalStorage,
    updateLocalStorage,
  };
})();
