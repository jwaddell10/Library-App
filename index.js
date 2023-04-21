const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
  });

let myLibrary = [];
//console.log(title);

class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value; 
        this.author = form.author.value; 
        this.pages = form.pages.value + 'pg'; 
        //this.read = form.read.checked; 
    }
}

//console.log(title)




/*class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value; 
        this.author = form.author.value; 
        this.pages = form.pages.value
        this.read = form.read.checked; 
        console.log(form.title.value);
    }
}*/
const book = new Book();
book.title = document.getElementById('title').value,
book.title = document.getElementById('title').value,
book.title = document.getElementById('title').value,

  console.log(book);
  //console.log(title);
//console.log(book.title);
function addBookToLibrary() {
    const book = new Book();
book.title = document.getElementById('title').value,
book.title = document.getElementById('title').value,
book.title = document.getElementById('title').value,
    myLibrary.push(book);
    console.log(myLibrary);
}
    


const addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", addBookToLibrary());


//pops-up form that gets book information from user

const userInputButton = document.querySelector('.add-book')
userInputButton.addEventListener("click", function() {
    document.getElementById('popUpForm').style.display = "block";
})

//hopeful it can take userinputs and store them to library array

/*const submitData = document.getElementById('submit');
submitData.addEventListener("click", (e) => {
    e.preventDefault();

    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');

    if (title.value == "" || author.value == "" || pages.value == "") {
        alert("enter something");
    } else { myLibrary.push(`${title.value}`, `${author.value}`, `${pages.value}`);
    }
    
    //console.log(myLibrary);
})*/
//need to store userinput on submit, probably create a book object when user clicks submit button and add it to array