export class Customer {
    static idGen = 0;

    #id;
    #name;
    #borrowedBooks = [];

    constructor(name) {
        this.#name = name;
        this.#id = Customer.idGen++;
    }

    /* Requirements:
- Implement getter for name and borrowedBooks
- Implement method borrowBook/returnBookBook by isbn
*/
    get name() { return this.#name; }
    get borrowedBooks() { return this.#borrowedBooks; }
    get id() { return this.#id; }

    borrowBook(isbn) {
        if (this.#borrowedBooks.includes(isbn)) {
            throw new Error("Book already borrowed");
        }
        this.#borrowedBooks.push(isbn);
    }
    returnBook(isbn) {
        this.#borrowedBooks = this.#borrowedBooks.filter(book => book === isbn );
    }
}

