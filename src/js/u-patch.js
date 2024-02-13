const BASE_URL = 'http://localhost:3000';

function updateBook(book, bookId) {
  const options = {
    method: 'PATCH',
    Headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options);
}

updateBook(
  {
    title: 'Clear JS The best time',
  },
  2
);

updateBook(
  {
    title: 'Great time',
    author: 'no name',
  },
  3
);

updateBook(
  {
    title: 'Css',
    rating: 7,
  },
  4
);
