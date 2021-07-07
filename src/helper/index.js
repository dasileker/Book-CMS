export default bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'kids',
  'Learning',
  'Sci-Fi',
];

export const getFilteredBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter(book => book.category === filter);
};