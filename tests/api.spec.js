import { GraphQLClient } from "graphql-request";

/* import { sum } from "../app.js";
 */
const graphqlClient = new GraphQLClient("http://localhost:4000");

/* describe('Sum API',()=>{
    test('adss 1+2 to equal 3', ()=>{
        expect(sum(1,2)).toBe(3);
    });
}); */

describe("Books API",() => {

    test("Returns all books", async ()=> {
        const res = await graphqlClient.request(`{
            books {
              id
            }
          }`, {});
        const { books } = res;
        expect(books).toHaveLength(2);
    });

    test("Returns book with ID=1", async ()=> {
      const res = await graphqlClient.request(`{
          book(id:1) {
            id
            title
            author
          }
        }`, {});

      // const { books } = res;
      console.log("Returned book with ID=1 => ", res);
      // expect(res).toHaveProperty('id');
    });

    test("Adds a book", async ()=> {
      const res = await graphqlClient.request(`
      mutation{
        createBook(id: 3, title: "Game of Thrones", author:"George Martin") {
          id
          title
          author
        }
        }`, {});
      // const { books } = res;
      console.log("Added a book => ", res);
      // expect(books).toHaveLength(1);
    });

    test("Updates a book", async ()=> {
      const res = await graphqlClient.request(`
      mutation{
        createBook(id: 1, title: "Game of Thrones", author:"Ayushi") {
          id
          title
          author
        }
        }`, {});
      // const books = res;
      console.log("Updated a book => ", res);
      // expect(books).toHaveLength(1);
    });
});


