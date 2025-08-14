function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let library = [];
library.push(new Book("bob", "Smith", 253, true));
console.log(library);

