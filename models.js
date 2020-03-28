const db = require('./database/dbConfig');

const getAllBooks = () => db('books');

const getBookById = bookId =>
  db('books')
    .where({ id: bookId })
    .first();

const addBook = book =>
  db('books')
    .insert(book)
    .returning('*');

const updateBook = (bookId, book) =>
  db('books')
    .where({ id: bookId })
    .update(book)
    .returning('*');

const deleteBook = bookId =>
  db('books')
    .where({ id: bookId })
    .del();

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};
