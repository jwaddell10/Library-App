/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable no-useless-concat */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const $form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

window.addEventListener('DOMContentLoaded', () => {
  libraryBookLocalStorage.renderLocalStorage();
});

// pops-up form that gets book information from user

const myLibrary = [];
const localStorageLibrary = [];
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
  const libraryBook = document.querySelector('#Library-container');
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('readOption').checked;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  libraryBookLocalStorage.populateStorage();
  console.log(localStorage, 'this is localStorage check');
  render();
}

// render books onto html page

function render() {
  const libraryBook = document.querySelector('#Library-container');
  libraryBook.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookEl = document.createElement('div');
    bookEl.innerHTML = `<div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">${book.author}</h5>
        <h5 class="pages">${book.pages}`
      + ` pages</h5>
        <h5 class="read">${book.read ? 'Read' : 'Not read yet'}</h5>
        <button class="remove-Btn" onClick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onClick="toggleRead(${i})">Read</button>`;
    libraryBook.appendChild(bookEl);
  }
}

// function to remove book from html list

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

removeBook();

// function to change if book was read or not

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

// localstorage

const libraryBookLocalStorage = (() => {
  function populateStorage() {
    // const myLibraryString = JSON.stringify(myLibrary).replace(/]\|[[]/g, '');
    // console.log(myLibraryString, 'this is the string');
    const libraryBookStorage = window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }

  function getStorage() {
    const stringReturn = JSON.parse(localStorage.getItem('myLibrary'));
    console.log(stringReturn, 'this is tringreturn');
  }

  function removeFromDOM() {
    const elem = document.getElementById('localstoragedivs');
    elem.remove();
  }

  function removeFromLocalStorage(i) {
    const books = JSON.parse(localStorage.getItem('myLibrary'));
    books.splice(i, 1);
    console.log(i);
    console.log(books);
  }

  function renderLocalStorage() {
    const stringReturn = JSON.parse(localStorage.getItem('myLibrary'));
    for (let i = 0; i < stringReturn.length; i++) {
      const newLibraryList = document.querySelector('#Library-container');
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'localstoragedivs');
      newDiv.innerHTML = `<div class='cards-headers'>
    <h3 class ='title'>${stringReturn[i].title}</h3>
    <h5 class ='author'>${stringReturn[i].author}</h5>
    <h5 class ='pages'>${stringReturn[i].pages}</h5>`
    + `<h5 class="read">${stringReturn.read ? 'Read' : 'Not read yet'}</h5>
        <button class="remove-Btn" onClick="localStorage.removeItem('myLibrary')">Remove</button>
        <button class="toggle-read-btn" onClick="toggleRead(${i})">Read</button>`;
      newLibraryList.appendChild(newDiv);
    }
  }
  return {
    populateStorage,
    renderLocalStorage,
    getStorage,
    removeFromLocalStorage,
  };
})();
/* function renderLocalStorage() {
  for (let i = 0; i < myLibrary.length; i++) {
    const getLocalStorage = localStorage.getItem('myLibrary');
    console.log(getLocalStorage, 'this is getLocalStorage');
    const stringReturn = JSON.parse(getLocalStorage);
    console.log(stringReturn, 'this is stringReturn');
    const newLibraryList = document.querySelector('#Library-container');
    const newDiv = document.createElement('div');
    newDiv.textContent = myLibrary;
    newLibraryList.appendChild(newDiv);
  }
} */
