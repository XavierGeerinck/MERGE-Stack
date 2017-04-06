const UserModel = require('./db/models/').user;
const UserTokenModel = require('./db/models/').userToken;
const PostModel = require('./db/models/').post;

export const resolvers = {
    Query: {
        allPosts: (root, args) => {
            if (args.orderBy == 'DESC') {
                delete args.orderBy;
                return PostModel.findAll({ where: args, order: [[ 'createdAt', 'DESC']] });
            }

            delete args.orderBy;
            return PostModel.findAll({ where: args });
        },
        users: (root, args) => {
            return UserModel.findAll({ where: args });
        },
        me: (root, args) => {
            return root.user;
        }
    },
    Mutation: {
        createPost: (root, args) => {
            return PostModel.create(args);
        },
        login: (root, args) => {
            return UserModel.find({ where: {
                email: args.email,
                password: args.password // todo, hashing
            }})
            .then((user) => {
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
        author(post) {
            return post.getAuthor()
        }
    },
    User: {
        tokens(user) {
            return user.getUserTokens();
        }
    },
    UserToken: {
        user(token) {
            return token.getUser();
        }
    }
};