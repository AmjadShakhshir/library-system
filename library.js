import { Book } from "./book.js";
import { Customer } from "./customer.js";

class LibBook extends Book {
  #stock;

  constructor(title, author, isbn, stock) {
    super(title, author, isbn);
    this.#stock = stock;
  }

  get stock() { return this.#stock; }
}

export class Library {
  #books;
  #customers;

  constructor() {
    this.#books = {};
    this.#customers = [];
  }

  /* Requirements:
  - Implement getter for books array 
  - Implement method addBook/removeBook to insert or remove a new book in book array
  - Create a method search to return books with titles or authors that match the provided search keyword.
  - Implement methods checkOutBook and returnBook by isbn and customer.
  */
  get books() { return this.#getDeepCopy(Object.values(this.#books).map(book => book.bookInfo())); }
  get customers() { return this.#customers; }

  addBook(book) {
    if (Object.keys(this.#books).includes(book.isbn)) {
      this.#books[book.isbn].stock += book.stock;
    } else {
      this.#books[book.isbn] = book;
      console.log(this.#books[book.isbn].stock);
    }
  }

  // get books() { 
  //   return this.#getDeepCopy(Object.values(this.#books).map(book => book.bookInfo()));
  // }
  // get customers() { 
  //   return this.#getDeepCopy(Object.values(this.#customers));
  // } 

  // addBook(book) {
  //   if (Object.keys(this.#books).includes(book.isbn)) {
  //     this.#books[book.isbn].stock += book.stock;
  //   } else {
  //     this.#books[book.isbn] = book;
  //   }
  // }

  // addCustomer(customer) {
  //   if (this.#customers.find(c => c.id === customer.id)) {
  //     throw new Error("Customer already exists");
  //   }
  //   this.#customers.push(customer);
  // }
  
  // removeBook(isbn, amount = 1 ) {
  //   if (!Number.isInteger(amount) || amount <= 0) {
  //     throw new Error("Invalid amount");
  //   }
  //   if (Object.keys(this.#books).includes(isbn)) {
  //     if (this.#books[isbn].stock < amount) {
  //       throw new Error("Not enough stock");
  //     }
  //     this.#books[isbn].stock -= amount;
  //     if (this.#books[isbn].stock === 0) {
  //       delete this.#books[isbn];
  //     } 
  //   } else {
  //     throw new Error("Book not found");
  //   }
  // } 

  // search(keyword) {
  //   const books = Object.values(this.#books);
  //   return books.filter(book => {
  //     return book.title?.toLowerCase().includes(keyword.toLowerCase()) 
  //     || book.author?.toLowerCase().includes(keyword.toLowerCase());
  //   });
  // }

  // checkOutBook(isbn, customer) {
  //   // Check if isbn exists & stock > 0 & customer exists
  //   const customerFound = this.#customers.find(c => c.id === customer.id);
  //   /* 
  //   - add book isbn into borrowedBooks of customer
  //   - reduce book stock
  //   - change status of the book -> isBorrowed */
  //   if (!customerFound) {
  //     throw new Error("Customer not found");
  //   }
  //   const book = Object.values(this.#books).find(book => book.isbn === isbn);
  //   if (!book) {
  //     throw new Error("Book not found");
  //   }
  //   if (book.stock === 0) {
  //     throw new Error("Book out of stock");
  //   }
  //   if (customer.borrowedBooks.includes(isbn)) {
  //     throw new Error("Customer already borrowed this book");
  //   }
  //   book.stock--;
  //   book.isBorrowed = true;
  //   customer.borrowedBooks.push(isbn);
  // }

  // returnBook(isbn, customer) {
  //   const book = Object.values(this.#books).find(book => book.isbn === isbn);
  //   if (!book) {
  //     throw new Error("Book not found");
  //   }
  //   if (!customer.borrowedBooks.includes(isbn)) {
  //     throw new Error("Customer did not borrow this book");
  //   }
  //   book.stock++;
  //   book.isBorrowed = false;
  //   customer.borrowedBooks = customer.borrowedBooks.filter(b => b !== isbn);
  // }

  #getDeepCopy(data) {
    return JSON.parse(JSON.stringify(data ));
  }
}

const book1 = new LibBook("The Great Tale", "Alice Smith", "978-1001-1001", 2);
const book2 = new LibBook("Journey to Nowhere", "John Doe", "978-1002-1002", 3);

const customer1 = new Customer("John Doe");
const customer2 = new Customer("Alice Smith");
const library = new Library();

library.addBook({isbn: "978-1001-1001", ...book1});

console.log(library.books);
