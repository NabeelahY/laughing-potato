const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const books = [
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
    books: () => books,
    book: (parent, args) => {
      return books.find(book => book.id === args.id);
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Hello World ${url}`);
});
