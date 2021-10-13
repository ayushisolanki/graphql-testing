import {books} from './db.js';
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
      createBook: (parent, bookData, context, info) => {
        // const newBook = { id, title, author };
  
        books.push(bookData);
  
        return bookData;
      },
      updateBook:(parent, bookData, context, info) => {
        let newBook = books.find(book => book.id == bookData.id);

        newBook.author = bookData.author;
        newBook.title = bookData.title;
        
        return newBook;
      },
      deleteBook:(parent, { id}, context, info) => {

        const bookIndex = books.findIndex(book => book.id == id);

        if (bookIndex == -1) throw new Error("Book not found.");

        console.log(books.splice(bookIndex, 1));
        return books;
      }
    }
  };
  
export default resolvers;