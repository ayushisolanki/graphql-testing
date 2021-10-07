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
              author
            }
          }`, {});
        const { books } = res;
        expect(books).toHaveLength(2);
    })
})


