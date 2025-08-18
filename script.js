function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

let library = [];

function addBook(title, author, pages, read){
    library.push(new Book(author, title, pages, read, crypto.randomUUID()));
}


// Replace the current HTML items with a set of new items
function updateGrid() {
    let children = library.map(makeNodes);
    const inp = document.querySelector("ul");
    inp.replaceChildren(...children);
}

// Convert a Book to an element that represents a book
function makeNodes(book) {
    const newElement = document.createElement('li');
    wrapString(newElement, "Title: ", book.title);
    wrapString(newElement, "Author: ", book.author);
    wrapString(newElement, "Page count: ", book.pages);
    wrapString(newElement, "Read? ", book.read);

    const newButton = document.createElement('button');
    newButton.appendChild(document.createTextNode("DELETE"));

    newButton.addEventListener("click", (e) => {
        console.log(`${book.id}`);
        const indx = library.findIndex((e) => e.id = book.id );
        library.splice(indx, 1);
        updateGrid();
    });

    newElement.appendChild(newButton);

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
addBook("Terry Quizzlepoint", "The Drop", 192, false);
addBook("Harry Purple", "The Third Squatter", 120, true);

updateGrid();