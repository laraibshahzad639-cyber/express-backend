
import books from "../data/books.js";

export function getallbooks() {
    return books;
}

export function getbookbyid(id) {
    return books.find((book) => {
        return book.id === Number(id);
    });
}

export function fbookquery(author, category, price, color) {

    let result = books;

    if (author) {
        result = result.filter((book) => {
            return book.author === author;
        });
    }

    if (category) {
        result = result.filter((book) => {
            return book.category === category;
        });
    }

    if (price) {
        result = result.filter((book) => {
            return book.price <=Number(price);
        });
    }

    if (color) {
        result = result.filter((book) => {
            return book.color === color;
        });
    }

    return result;
}

