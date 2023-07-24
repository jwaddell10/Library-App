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
  libraryBookLocalStorage.populateStorage();
  console.log(myLibrary);
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('this is running and loading content');
  libraryBookLocalStorage.getStorage();
  libraryBookLocalStorage.renderLocalStorage();
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
  const libraryBook = document.querySelector('#Library-container');
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('readOption').checked;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  render();
  libraryBookLocalStorage.renderLocalStorage();
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
    const stringifyBooks = JSON.stringify(myLibrary);
    console.log(JSON.stringify(myLibrary));
    const libraryBookStorage = window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    console.log(libraryBookStorage, 'this is librarystorage');
    console.log(JSON.stringify(myLibrary), 'this is librarystringified');
    console.log(myLibrary);
    const isThisEmpty = !localStorage.getItem('myLibrary');
    console.log(isThisEmpty, 'is it empty?');
  }

  function getStorage() {
    const stringifyBooks = JSON.stringify(myLibrary);
    const getBookItems = window.localStorage.getItem('myLibrary');
    console.log(getBookItems, 'these are book items');
    const stringBookReturn = JSON.parse(stringifyBooks);
    console.log(stringBookReturn, 'this is stringBookReturn');
    myLibrary.push(...stringBookReturn);
    console.log(myLibrary);
  }

  function renderLocalStorage() {
    const getLocalStorage = localStorage.getItem('myLibrary');
    console.log(getLocalStorage, 'this is getLocalStorage');
    const stringReturn = JSON.parse(localStorage.getItem('myLibrary'));
    console.log(stringReturn[0].title);
    console.log(stringReturn, 'this is stringReturn');
    for (let i = 0; i < stringReturn.length; i++) {
      const newLibraryList = document.querySelector('#Library-container');
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class='cards-headers'>
    <h3 class ='title'>${stringReturn[i].title}</h3>
    <h5 class ='author'>${stringReturn[i].author}</h5>
    <h5 class ='pages'>${stringReturn[i].pages}</h5>
    <h5 class="read">${stringReturn.read ? 'Read' : 'Not read yet'}</h5>
        <button class="remove-Btn" onClick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onClick="toggleRead(${i})">Read</button>`;
      newLibraryList.appendChild(newDiv);
    }
  }
  return {
    populateStorage,
    getStorage,
    renderLocalStorage,
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

console.log(localStorage);
