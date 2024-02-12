const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  fetch(`${BASE_URL}/books`)
    .then(res => res.json())
    .then(console.log);
}

function fetchBookById(bookId) {
  fetch(`${BASE_URL}/books/${bookId}`)
    .then(res => res.json())
    .then(console.log);
}

fetchBooks();
fetchBookById(1);
fetchBookById(3);
fetchBookById(5);
fetchBookById(6);
