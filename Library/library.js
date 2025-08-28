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

function addBookToLibrary(Book) {
    const newId = crypto.randomUUID();
    Book.id = newId;
    myLibrary.push(Book);
    return myLibrary;
}

const book = new Book('Game of Thrones', 'JJ King', 289, true);
addBookToLibrary(book);

const book2 = new Book('1984', 'Rogers Rivers', 1354, true);
addBookToLibrary(book2);


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

displayBooks();