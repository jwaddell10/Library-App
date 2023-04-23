const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    newBook();
    //createCard();
   // addBookToLibrary();
    
  });

let myLibrary = [];
console.log(myLibrary);
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

/*function createCard() {
    
    document.querySelector('#addBtn').addEventListener('click', function() {
        const createCard = document.createElement('div');
        createCard.innerText = bookTitle + bookAuthorText
        document.getElementById('cards').appendChild(createCard);
        console.log(bookTitle.innerText);
    });
}
const bookTitleText = document.createTextNode("Title:" + document.getElementById('title').value);
const bookAuthorText = document.createTextNode("Author:" + document.getElementById('author').value);*/


//adds book object to html from array

function createBook() {

    document.querySelector('#addBtn').addEventListener('click', function() {

    const createCard = document.createElement('div');
        //variable to append items to library container, variable to append items to card container
    const libraryContainer = document.getElementById('Library-container');
    const cards = document.querySelector('.cards');    
    
    //creates booktitle text to append to library container
    const bookTitleText = document.createTextNode("Title:" + document.getElementById('title').value);
    libraryContainer.classList.add('cards');
    cards.appendChild(createCard);
    cards.appendChild(bookTitleText);


   //creates bookauthor text so i can append it to library container
    const bookAuthorText = document.createTextNode("Author:" + document.getElementById('author').value);
    libraryContainer.appendChild(bookAuthorText);
    

    //creates bookpages text so i can append it to library container
    const bookPagesText = document.createTextNode("Pages:" + document.getElementById('pages').value);
    libraryContainer.appendChild(bookPagesText);
    

    
    //checks if read? checkbox is clicked or not
    const checkbox = document.getElementById('readOption').checked;

        if(checkbox == true){
            const bookReadText = document.createTextNode("Read");
            libraryContainer.appendChild(bookReadText);
            const readDiv = document.getElementById("readdiv");
            document.body.insertBefore(libraryContainer, readDiv);
        } else {
            const bookReadText = document.createTextNode("Not Read");
            libraryContainer.appendChild(bookReadText);
            const readDiv = document.getElementById("readdiv");
            document.body.insertBefore(libraryContainer, readDiv);
        }
    });

    /*for (let i = 0; i <= myLibrary.length; i++) {
        const string = JSON.stringify(myLibrary, null, 4);

            document.querySelector("#myBooks").innerHTML = string.replace("[", "").replace("\"", "").replace("]", "");
}*/
}

createBook();




//pops-up form that gets book information from user

const userInputButton = document.querySelector('.add-book')
userInputButton.addEventListener("click", function() {
    document.getElementById('popUpForm').style.display = "block";
})