const books = [
    {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        available: true,
        reviews: [
            { reader: "Amine", rating: 5 },
            { reader: "Sara", rating: 4 },
            { reader: "Yassine", rating: 5 }
        ]
    },
    {
        id: 2,
        title: "The Pragmatic Programmer",
        author: "David Thomas",
        category: "Programming",
        available: false,
        reviews: [
            { reader: "Omar", rating: 4 },
            { reader: "Meriem", rating: 5 }
        ]
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Personal Development",
        available: true,
        reviews: [
            { reader: "Sara", rating: 5 },
            { reader: "Omar", rating: 3 },
            { reader: "Amine", rating: 4 }
        ]
    },
    {
        id: 4,
        title: "Deep Work",
        author: "Cal Newport",
        category: "Personal Development",
        available: true,
        reviews: [
            { reader: "Yassine", rating: 4 },
            { reader: "Meriem", rating: 5 }
        ]
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        available: false,
        reviews: [
            { reader: "Amine", rating: 5 },
            { reader: "Omar", rating: 5 },
            { reader: "Sara", rating: 4 }
        ]
    }
];

let prompt = require("prompt-sync")();

function getBooksByCategory(books) {
    let category = prompt("Donner la catégorie : ")
    return books.filter(book => book.category === category)
}

function getReaderReviews(books) {
    const reader = prompt("Donner le nom du lecteur : ");
    const results = [];

    books.forEach(book => {
        book.reviews.forEach(review => {
            if (review.reader === reader) {
                results.push(`${book.title} - rating: ${review.rating}`);
            }
        });
    });

    return results;
}

function getHighlyRatedBooks(books) {
    return books.filter(book => {
        let total = 0;
        book.reviews.forEach(review => {
            total += review.rating;
        });

        return total / book.reviews.length >= 4.5;
    });
}

function getBestRatedBook(books) {
    let bestBook = books[0];
    let bestAverage = 0;

    books.forEach(book => {
        const total = book.reviews.reduce((sum, review) => sum + review.rating, 0);
        const average = total / book.reviews.length;
        if (average > bestAverage) {
            bestAverage = average;
            bestBook = book;
        }
    });

    return bestBook;
}

//console.log(getBooksByCategory(books))
//console.log(getReaderReviews(books).join("\n"));
//console.log(getHighlyRatedBooks(books));
console.log(getBestRatedBook(books))