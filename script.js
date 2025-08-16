function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let library = [];
library.push(new Book("Bob Smith", "Goldstein", 253, true));
library.push(new Book("Terry Quizzlepoint", "The Drop", 192, false));
library.push(new Book("Harry Purple", "The Third Squatter", 120, true));

console.log(library);