export class Book {
    #title;
    #author;
    #isbn;
    #isCheckedOut;

    constructor(title, author, isbn) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
        this.#isCheckedOut = false;
    }

    /* Requirements:
- Implement getters for title, author, isbn, and isCheckedOut.
- Implement a setter for isCheckedOut.
 */

    getTitle () { return this.#title; }
    getAuthor () { return this.#author; }
    getIsbn () { return this.#isbn; }
    getIsCheckedOut () { return this.#isCheckedOut; }

    setIsCheckedOut (isCheckedOut) { 
        if (typeof isCheckedOut === "boolean") {
            this.#isCheckedOut = isCheckedOut; 
        } else {
            throw new Error("Invalid value for isCheckedOut. ");
        }
    }
    bookInfo () {
        return { title: this.#title, author: this.#author, isbn: this.#isbn, isCheckedOut: this.#isCheckedOut };
    }
}