const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const db = require('./database/dbConfig');

let books = [
  {
    id: '1',
    summary:
      "Just because my dreams are not the same as yours doesn't mean that they are not valid",
    title: 'Little women',
    author: 'May Louisa Alcott'
  },
  {
    id: '2',
    summary:
      'How could such a small group of second rate tyrants ravage 900 million people for so long?',
    title: 'Wild Swans',
    author: 'Jung Chang'
  }
];

const resolvers = {
  Query: {
    books: () => db('books'),
    book: (parent, arg) => {
      return db('books')
        .where({ id: arg.id })
        .first();
    }
  },

  Mutation: {
    newBook: (parent, args) => {
      const book = {
        id: String(books.length + 1),
        title: args.title || '',
        author: args.author || '',
        summary: args.summary
      };
      books.push(book);
      return book;
    },
    updateBook: (parent, args) => {
      const index = books.findIndex(book => book.id === args.id);
      const book = {
        id: args.id,
        author: args.author,
        summary: books[index].summary,
        title: books[index].title
      };
      books[index] = book;
      return book;
    },
    deleteBook: (parent, args) => {
      const deletedBook = books.find(book => book.id === args.id);
      books = books.filter(book => book.id !== args.id);
      return deletedBook;
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Hello World ${url}`);
});
