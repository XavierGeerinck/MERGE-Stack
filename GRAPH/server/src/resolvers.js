const UserModel = require('./db/models/').user;
const UserTokenModel = require('./db/models/').userToken;
const PostModel = require('./db/models/').post;
const GraphDB = require('./neo4j/connection');

export const resolvers = {
    Query: {
        allPosts: (root, args) => {
            return GraphDB.queryAsync('MATCH (p:Post) RETURN p');

            // if (args.orderBy == 'DESC') {
            //     delete args.orderBy;
            //     return PostModel.findAll({ where: args, order: [[ 'createdAt', 'DESC']] });
            // }

            // delete args.orderBy;
            // return PostModel.findAll({ where: args });
        },
        users: (root, args) => {
            return GraphDB.queryAsync('MATCH (p:User) RETURN p');
            // return UserModel.findAll({ where: args });
        },
        me: (root, args) => {
            return root.user;
        }
    },
    Mutation: {
        createPost: (root, args) => {
            let post = null;

            return GraphDB.saveAsync(args, 'Post')
            .then((p) => {
                post = p;
                
                return Promise.all([
                    GraphDB.relateAsync(post.id, ':POSTED_BY', args.authorId),
                    GraphDB.relateAsync(args.authorId, ':POSTED', post.id),
                ]);
            })
            .then((r) => {
                return post;
            });
            // return PostModel.create(args);
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
            console.log(post);
            return GraphDB.queryAsync(`MATCH (p:Post)-[:POSTED_BY]-(author) WHERE ID(p) = ${post.id} RETURN author`).then(r => r[0]);
            // return post.getAuthor()
        }
    },
    User: {
        tokens(user) {
            console.log(user);
            return GraphDB.queryAsync(`MATCH (a:User)-[:HAS_TOKEN]-(tokens) WHERE ID(a) = ${user.id} RETURN tokens`);
            // return user.getUserTokens();
        }
    },
    UserToken: {
        user(token) {
            return GraphDB.queryAsync(`MATCH (a:UserToken)-[:BELONGS_TO]-(user) WHERE ID(a) = ${token.id} RETURN user`).then(r => r[0]);
            // return token.getUser();
        }
    }
};