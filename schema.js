const { gql } = require('apollo-server');

// define type for Books
//  exclamation mark makes a field compulsory
// describes how client can fetch data
const typeDefs = gql`
  type Book {
    id: ID!
    summary: String!
    title: String!
    author: String!
  }
  type Query {
    books: [Book]!
    book(id: ID!): Book
  }
`;

module.exports = typeDefs;
