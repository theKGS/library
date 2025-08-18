function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

Book.prototype.updateReadStatus = function () {
    this.read = true;
    console.log("Read status updated");
}

const addButton = document.querySelector("input[name='submit']");

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputTitle = document.querySelector("input[name='title']").value;
    const inputAuthor = document.querySelector("input[name='author']").value;
    const inputPages = document.querySelector("input[name='pagecount']").value;
    const inputRead = document.querySelector("input[name='read']").checked;

    addBook(inputTitle, inputAuthor, inputPages, inputRead);
    updateGrid();
});

console.log(addButton)

let library = [];

function addBook(title, author, pages, read) {
    library.push(new Book(author, title, pages, read, crypto.randomUUID()));
}

// Replace the current HTML items with a set of new items
function updateGrid() {
    let children = library.map(makeNodes);
    const inp = document.querySelector("ul");
    inp.replaceChildren(...children);
}

// Convert a Book to an html-element that represents a book
function makeNodes(book) {
    const newElement = document.createElement('li');
    wrapString(newElement, "Title: ", book.title);
    wrapString(newElement, "Author: ", book.author);
    wrapString(newElement, "Page count: ", book.pages);
    wrapString(newElement, "Read? ", book.read);

    const newButtonDelete = document.createElement('button');
    newButtonDelete.appendChild(document.createTextNode("DELETE"));

    newButtonDelete.addEventListener("click", (e) => {
        const indx = library.findIndex((bk) => bk.id == book.id);
        console.log(indx);
        library.splice(indx, 1);
        updateGrid();
    });

    newElement.appendChild(newButtonDelete);

    const newButtonRead = document.createElement('button');
    newButtonRead.appendChild(document.createTextNode("I have read this"));

    newButtonRead.addEventListener("click", (e) => {
        const indx = library.findIndex((bk) => bk.id == book.id);
        console.log(indx);
        library[indx].updateReadStatus();
        updateGrid();
    });

    newElement.appendChild(newButtonRead);

    return newElement;
}

// Produce a complete item line with a bolded label
function makeLabelledLine(str) {
    const tagBolded = document.createElement('b');
    tagBolded.appendChild(document.createTextNode(`${str}`));
    return tagBolded;
}

// Produce a single book item
function wrapString(element, label, data) {
    const newElementBold1 = makeLabelledLine(label);
    const newElementTitle = document.createTextNode(`${data}`);
    element.appendChild(newElementBold1);
    element.appendChild(newElementTitle);
    element.appendChild(document.createElement("br"));
}

addBook("Bob Smith", "Goldstein's Gastrointestinal Garden", 253, true);
addBook("Terry Quizpoint", "The Drop", 192, false);
addBook("Harry-Larry Purple", "The Third Squatter", 120, true);

updateGrid();