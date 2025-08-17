function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

let library = [];

// Replace the current HTML items with a set of new items
function updateGrid() {
    let children = library.map(makeNodes);
    const inp = document.querySelector("ul");
    inp.replaceChildren(...children);
}

// Convert list of books to list of elements
function makeNodes(book) {
    const newElement = document.createElement('li');
    wrapString(newElement, "Title: ", book.title);
    wrapString(newElement, "Author: ", book.author);
    wrapString(newElement, "Page count: ", book.pages);
    wrapString(newElement, "Read? ", book.read);
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


library.push(new Book("Bob Smith", "Goldstein's Gastrointestinal Garden", 253, true));
library.push(new Book("Terry Quizzlepoint", "The Drop", 192, false));
library.push(new Book("Harry Purple", "The Third Squatter", 120, true));

updateGrid();