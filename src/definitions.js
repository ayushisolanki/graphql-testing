import { gql } from 'apollo-server';
const typeDefs = gql`
 
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    book(id:ID):Book
  }

  type Mutation {
    createBook(id: ID!, title:String!, author:String!) : Book!
    updateBook(id: ID!, title:String!, author:String!) : Book!
    deleteBook(id: ID!): [Book]!
  }

`;

export default typeDefs;