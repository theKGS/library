function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

let library = [];

function updateGrid() {
    let children = library.map(makeNodes);

    const inp = document.querySelector("ul");
    console.log(children);
    inp.replaceChildren(...children);
}

function makeNodes(book) {
    const newElement = document.createElement('p');
    const newContent = document.createTextNode(`${book.title}`);
    newElement.appendChild(newContent);
    console.log(book.title);
    return newElement;
}

library.push(new Book("Bob Smith", "Goldstein", 253, true));
library.push(new Book("Terry Quizzlepoint", "The Drop", 192, false));
library.push(new Book("Harry Purple", "The Third Squatter", 120, true));

updateGrid();