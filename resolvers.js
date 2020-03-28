const model = require('./models');
const resolvers = {
  Query: {
    books: () => model.getAllBooks(),
    book: (parent, arg) => model.getBookById(arg.id)
  },

  Mutation: {
    newBook: async (_, args) => {
      const book = {
        title: args.title,
        author: args.author,
        summary: args.summary
      };
      const newBook = await model.addBook(book);
      return newBook[0];
    },
    updateBook: async (_, args) => {
      const book = await resolvers.Query.book(_, args);
      const bookUpdate = {
        summary: args.summary || book.summary,
        author: args.author || book.author,
        title: args.title || book.title
      };
      const updateBook = await model.updateBook(args.id, bookUpdate);
      return updateBook[0];
    },
    deleteBook: async (_, args) => {
      const book = await resolvers.Query.book(_, args);
      await model.deleteBook(args.id);
      return book;
    }
  }
};

module.exports = resolvers;
