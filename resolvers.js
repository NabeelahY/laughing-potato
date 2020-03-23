const db = require('./database/dbConfig');
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
    newBook: async (_, args) => {
      const book = {
        title: args.title ,
        author: args.author,
        summary: args.summary
      };
      const newBook = await db('books')
        .insert(book)
        .returning('*');
      return newBook[0];
    },
    updateBook: async (_, args) => {
      const book = await resolvers.Query.book(_, args);
      const bookUpdate = {
        summary: args.summary || book.summary,
        author: args.author || book.author,
        title: args.title || book.title
      };
      const updateBook = await db('books')
        .where({ id: args.id })
        .update(bookUpdate)
        .returning('*');
      return updateBook[0];
    },
    deleteBook: async (_, args) => {
      const book = await resolvers.Query.book(_, args);
      await db('books')
        .where({ id: args.id })
        .del();
      return book;
    }
  }
};

module.exports = resolvers;
