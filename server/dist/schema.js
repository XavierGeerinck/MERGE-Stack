'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = undefined;

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var typeDefs = '\ntype User {\n    id: ID!\n    email: String!\n    name: String!\n    posts: [Post],\n    tokens: [UserToken]\n}\n\ntype UserToken {\n    user: User!,\n    token: String!\n}\n\ntype Post {\n    id: String!\n    description: String\n    imageUrl: String\n    author: User\n}\n\nenum OrderPost {\n    DESC\n}\n\ntype Query {\n    me: User,\n    users(id: String): [ User ],\n    allPosts(orderBy: OrderPost): [Post]\n}\n\ntype Mutation {\n    createPost(imageUrl: String!, description: String!, authorId: String!): Post!\n    login(email: String!, password: String!): UserToken\n}\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _resolvers.resolvers });
exports.schema = schema;