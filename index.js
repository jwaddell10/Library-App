let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = Number(pages)
    this.read = read
  }

  Book.prototype.info = function() {
  }
const book = new Book ('the hobbit', 'something', 100, 'read')
console.log(book.title);
function addBookToLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
       document.getElementById('table').innerText = myLibrary
    }
}

addBookToLibrary()

//pops-up form that gets book information from user

const userInputButton = document.querySelector('.add-book')
userInputButton.addEventListener("click", function() {
    document.getElementById('popUpForm').style.display = "block";
})

//hopeful it can take userinputs and store them to library array

const submitData = document.getElementById('submit');
submitData.addEventListener("click", (e) => {
    e.preventDefault();

    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');

    if (title.value == "" || author.value == "" || pages.value == "") {
        alert("enter something");
    } else { myLibrary.push(`${title.value}`, `${author.value}`, `${pages.value}`);
    }
    
    console.log(myLibrary);
})
console.log(myLibrary);

//need to store userinput on submit, probably create a book object when user clicks submit button and add it to array