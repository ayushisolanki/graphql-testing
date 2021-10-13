import { GraphQLClient } from "graphql-request";
import { graphql } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from "../src/resolvers";
import typeDefs from "../src/definitions";

/* import { sum } from "../app.js";
 */
const graphqlClient = new GraphQLClient("http://localhost:4000");

/* describe('Sum API',()=>{
    test('adss 1+2 to equal 3', ()=>{
        expect(sum(1,2)).toBe(3);
    });
}); */

describe("Books API",() => {
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    test("Returns all books", async ()=> {
      const query= `{
        books {
          id
          title
          author
        }
      }`
      const res= await graphql(schema, query);
      // console.log(JSON.stringify(res));
      console.log("Returned all books => ",res);
      // expect(res).toHaveLength(2);
    }); 

    test("Returns book with ID=1", async ()=> {
      const query=`{
        book(id:1) {
          id
          title
          author
        }
      }`;
      const res = await graphql(schema,query);
      
      const expected={
        "book": {
          "id": "1",
          "title": "The Awakening",
          "author": "Kate Chopin"
        }
      };
      console.log("Returned book with ID=1 => ", res);
      // expect(res).toEqual(expected);
    });

    test("Adds a book", async ()=> {
      const query=`
        mutation{
          createBook(id: 3, title: "Game of Thrones", author:"George Martin") {
            id
            title
            author
          }
        }`;
      const res = await graphql(schema,query);
      // const { books } = res;
      console.log("Added a book => ", res);
      // expect(books).toHaveLength(1);
    });

    test("Updates a book", async ()=> {
      const query=`
        mutation{
          createBook(id: 1, title: "Game of Thrones", author:"Ayushi") {
            id
            title
            author
          }
        }`;
      const res = await graphql(schema,query);   
      // const books = res;
      console.log("Updated a book => ", res);
      // expect(books).toHaveLength(1);
    });

    test("Deleted a book", async ()=>{
      const query=`
        mutation{
          deleteBook(id: 1) {
            id
          }
        }`;
      const res = await graphql(schema,query);   
      console.log("Deleted a book => ",res);
    });
});


