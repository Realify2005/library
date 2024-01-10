const myLibrary = [
    {
        title: "Programming, Problem Solving, and Abstraction with C",
        author: "Alistair Moffat",
        pages: 248,
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead) {
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let read = inputRead.checked ? true : false;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function removeBook(library, index) {
    library.splice(index, 1);
    displayBooks(library);
}

function toggleRead(library, index) {
    library[index].read = !library[index].read;
    displayBooks(library);
}

function displayBooks(library) {
    const booksList = document.querySelector(".list-of-books");
    booksList.innerHTML = '';
    index = 0;
    library.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("book");
        div.setAttribute("index", index);

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement("p");
        read.classList.add("read");
        read.textContent = `Read: ${book.read ? "yes" : "no"}`;

        const delButton = document.createElement("button");
        delButton.textContent = "Delete Book"
        delButton.addEventListener("click", function() {
            const bookIndex = delButton.parentNode.getAttribute("index");
            removeBook(library, bookIndex);
        })

        const readButton = document.createElement("button");
        readButton.textContent = "Toggle Read"
        readButton.addEventListener("click", function() {
            const bookIndex = readButton.parentNode.getAttribute("index");
            toggleRead(library, bookIndex);
        })

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(delButton);
        div.appendChild(readButton);
        booksList.appendChild(div);
        index++;
    })
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read")
const submit = document.querySelector("#submit");
const addBookForm = document.querySelector(".add-book");
const addBookBtn = document.querySelector(".add-book-btn");
const listOfBooks = document.querySelector(".list-of-books");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    addBookToLibrary(title, author, pages, read);
    displayBooks(myLibrary);
    addBookForm.style.display = "none"; 
    addBookBtn.style.display = "block";
    listOfBooks.style.display = "grid";
})

addBookBtn.addEventListener("click", function() {
    addBookForm.style.display = "grid";
    listOfBooks.style.display = "none";
    addBookBtn.style.display = "none";
})