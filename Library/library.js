//Create an array the for books
const myLibrary = [];

function Book(title, author, pages, isRead) {
    if(!new.target) {
        throw Error('You must use keyword new to create an object');
    }

    this.id = '';
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    /*
    this.info = function() {
        return (
            'Book: ' + this.title + '/n' + 
            'Autor: ' + this.author + '/n' +
            'Total Pages: ' + this.pages + '/n' +
            'status: ' + (this.isRead ? 'read' : 'not reead')
        );
    }
    */
}

function addBookToLibrary(book) {
    const newId = crypto.randomUUID();
    Book.id = newId;
    myLibrary.push(book);

    localStorage.setItem('bookLibrary', JSON.stringify(myLibrary));

    displayBooks();
}

//Function to local books from localStorage
function loadBooksFromLocalStorage() {
    const storedBooks = JSON.parse(localStorage.getItem('bookLibrary')) || [];
    storedBooks.forEach(book => {
        const newBook = new Book(book.title, book.author, book.pages, book.isRead);
        myLibrary.push(newBook);
    });

    displayBooks();
}

//Function to display the books
function displayBooks() {
    const booksContainer = document.getElementById('bookLibrary');
    booksContainer.innerHTML = '';

    //Loop Through the books
    myLibrary.forEach(book => {
        const booksDiv = document.createElement('div');
        booksDiv.classList.add('book-item');

        const booksContent = `
            <h3>${book.title}</h3>
            <p><strong>Author: </strong>${book.author}</p>
            <p><strong>Pages: </strong>${book.pages}</p>
            <p><strong>Read?: </strong>${book.isRead}</p>
        `;

        booksDiv.innerHTML = booksContent;
        booksContainer.appendChild(booksDiv);
    });
}



document.addEventListener('DOMContentLoaded', () => {
    loadBooksFromLocalStorage();

    document.getElementById('toggleBookForm').addEventListener('click', () => {
        const bookLib = document.getElementById('bookLib');
        
        if(bookLib.style.display === 'none' || bookLib.style.display === '') {
            bookLib.style.display = 'block';
        }else {
            bookLib.style.display = 'none';
        }
    });

    document.getElementById('addBook').addEventListener('click', (event) => {
        
        event.preventDefault();

        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('bookAuthor').value;
        const pages = document.getElementById('bookPages').value;
        const isRead = document.getElementById('bookIsRead').value === 'readYes' ? true : false;

        if(!title || !author || !pages) {
            alert('Please fill out all fields');
            return;
        }

        const newBook = new Book(title, author, pages, isRead);
        addBookToLibrary(newBook);

    });
});