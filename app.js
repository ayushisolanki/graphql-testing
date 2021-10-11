import { ApolloServer, gql } from 'apollo-server';

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
    deleteBook(id: ID!): Book!
  }

`;
const books = [
    {
      id:1,
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      id:2,
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

 
const resolvers = {
    Query: {
      book: (parent, { id }, context, info) => {
        return books.find(book => book.id == id);
      },
      books: (parent, args, context, info) => {
        return books;
      }
    },
    Mutation:{
      createBook: (parent, { id, title, author}, context, info) => {
        const newBook = { id, title, author };
  
        books.push(newBook);
  
        return newBook;
      },
      updateBook:(parent, { id, title, author}, context, info) => {
        let newBook = books.find(book => book.id == id);

        newBook.author = author;
        newBook.title = title;
        
        return newBook;
      },
      deleteBook:(parent, { id}, context, info) => {

        const bookIndex = users.findIndex(book => book.id == id);

        if (bookIndex == -1) throw new Error("Book not found.");

        books.splice(bookIndex, 1);
        return books;
      }
    }
  };
  

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

// export function sum(a,b){
//   return a+b;
// }
