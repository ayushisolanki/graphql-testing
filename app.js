import { ApolloServer, gql } from 'apollo-server';
import resolvers from './src/resolvers.js';
import typeDefs from './src/definitions.js';
 
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

// export function sum(a,b){
//   return a+b;
// }
