import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    }
    ,
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
    {
        title: 'City of gold',
        author: 'Paul hjjhj',
    },
    {
        title: 'City of humans',
        author: 'Paul Auster',
    },
    {
        title: 'City of birds',
        author: 'Paul Auster',
    },
    {
        title: 'City of animals',
        author: 'Paul Auster',
    },
    {
        title: 'City of colours',
        author: 'Paul Auster',
    },
    {
        title: 'City of flowers',
        author: 'Paul Auster',
    },
    {
        title: 'City of wonder',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation:{
      addBook: (_, args) => args 
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);