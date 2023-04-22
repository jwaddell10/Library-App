const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    newBook();
   // addBookToLibrary();
    
  });

let myLibrary = [];

//book class constructor

class Book {
    constructor(title, author, pages, read) {
        this.title = title; 
        this.author = author; 
        this.pages = pages; 
        //this.read = form.read.checked; 
    }
}

//creates book and adds it to myLibrary array

function newBook() {
    const book = new Book();
book.title = document.getElementById('title').value,
book.author = document.getElementById('author').value,
book.pages = document.getElementById('pages').value,
    myLibrary.push(book);
    
}

function bookInfo() {
    document.getElementById('title').value;
    
}

//adds book object to html

function render() {
    document.querySelector('#addBtn').addEventListener('click', function() {
    const bookTitle = document.createElement('div');
    const bookTitleText = document.createTextNode(document.getElementById('title').value);
    bookTitle.appendChild(bookTitleText);
    const currentDiv = document.getElementById("titlediv");
    document.body.insertBefore(bookTitle, currentDiv);
    });

    /*for (let i = 0; i <= myLibrary.length; i++) {
        const string = JSON.stringify(myLibrary, null, 4);

            document.querySelector("#myBooks").innerHTML = string.replace("[", "").replace("\"", "").replace("]", "");
}*/
}
render();
/*function addBookToLibrary() {
    

}*/


//pops-up form that gets book information from user

const userInputButton = document.querySelector('.add-book')
userInputButton.addEventListener("click", function() {
    document.getElementById('popUpForm').style.display = "block";
})