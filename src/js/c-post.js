const BASE_URL = 'http://localhost:3000';

// const newBook = {
//   title: 'New CSS book',
//   author: 'Mikael Harvy ',
//   genres: ['scientist', 'news'],
//   rating: 6.92,
// };

function addNewBook(book) {
  const options = {
    method: 'POST',
    Headers: {
      'Comment-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

addNewBook({
  title: 'New CSS book',
  author: 'Mikael Harvy ',
  genres: ['scientist', 'news'],
  rating: 6.92,
}).then(renderBook);

addNewBook({
  title: 'New React book',
  author: 'Jon Bernard',
  genres: ['news'],
  rating: 4.92,
}).then(renderBook);

function renderBook(book) {
  console.log('Go render'), console.log(book);
}
