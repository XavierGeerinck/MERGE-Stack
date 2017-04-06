'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var UserModel = require('./db/models/').user;
var UserTokenModel = require('./db/models/').userToken;
var PostModel = require('./db/models/').post;

var resolvers = exports.resolvers = {
    Query: {
        allPosts: function allPosts(root, args) {
            if (args.orderBy == 'DESC') {
                delete args.orderBy;
                return PostModel.findAll({ where: args, order: [['createdAt', 'DESC']] });
            }

            delete args.orderBy;
            return PostModel.findAll({ where: args });
        },
        users: function users(root, args) {
            return UserModel.findAll({ where: args });
        },
        me: function me(root, args) {
            return root.user;
        }
    },
    Mutation: {
        createPost: function createPost(root, args) {
            return PostModel.create(args);
        },
        login: function login(root, args) {
            return UserModel.find({ where: {
                    email: args.email,
                    password: args.password // todo, hashing
                } }).then(function (user) {
                if (!user) {
                    throw new Error("USER_DOES_NOT_EXIST");
                }

                return UserTokenModel.create({
                    token: "RANDOM_GEN_TOKEN",
                    userId: user.id
                });
            });
        }
    },
    // Resolves of complex fields
    Post: {
        author: function author(post) {
            return post.getAuthor();
        }
    },
    User: {
        tokens: function tokens(user) {
            return user.getUserTokens();
        }
    },
    UserToken: {
        user: function user(token) {
            return token.getUser();
        }
    }
};