const request = require('supertest');
// const server = require('../index');
const db = require('../database/dbConfig');
const helper = require('../models');

beforeAll(() => {
  return db('books').truncate();
});

describe('Testing mutation models', () => {
  it('Add a new book', async () => {
    const newBook = {
      author: 'Adam Scott',
      title: 'JS Everywhere',
      summary: 'GraphQL is awesome'
    };
    await helper.addBook(newBook);
    const books = await helper.getAllBooks();
    expect(books.length).toEqual(1);
  });
});

describe('Testing query models', () => {
  it('Retrieve all books', async () => {
    const books = await helper.getAllBooks();
    expect(books.length).toEqual(1);
  });
  it('Retrieve a book with a specific id', async () => {
    const book = await helper.getBookById(1);
    expect(book).toMatchObject(book);
  });
});
