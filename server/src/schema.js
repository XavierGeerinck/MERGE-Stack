import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type User {
    id: ID!
    email: String!
    name: String!
    posts: [Post],
    tokens: [UserToken]
}

type UserToken {
    user: User!,
    token: String!
}

type Post {
    id: String!
    description: String
    imageUrl: String
    author: User
}

enum OrderPost {
    DESC
}

type Query {
    me: User,
    users(id: String): [ User ],
    allPosts(orderBy: OrderPost): [Post]
}

type Mutation {
    createPost(imageUrl: String!, description: String!, authorId: String!): Post!
    login(email: String!, password: String!): UserToken
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };