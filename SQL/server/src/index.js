import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';
import cors from 'cors';
import morgan from 'morgan';
import { userToken as UserTokenModel } from './db/models';
// const UserTokenModel = require('./db/models/').userToken;

const PORT = 4000;

// Server
const server = express();

const tokenParser = () => {
  return (req, res, next) => {
    let token = req.query['access_token'];

    // Parse Bearer Token
    if (req.headers['authorization']) {
      const splits = req.headers['authorization'].split(' ');

      if (splits.length < 2) {
        return next();
      }

      token = splits[1];
    }

    if (!token) {
      return next();
    }

    // Fetch user
    UserTokenModel.findOne({ where: {
        token: token
    }})
    .then((userToken) => {
      if (!userToken) {
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({
            errors: [{ message: 'USER_DOES_NOT_EXIST' }]
          }));
      }

      req.user = userToken.getUser();
      return next();
    });
  }
};

server.use(tokenParser());

// Log requests
server.use(morgan('dev'));

server.use('/graphql', cors(), graphqlHTTP((request) => ({
    schema: schema,
    graphiql: true,
    pretty: true,
    context: require('./resolvers'),
    rootValue: {
      user: request.user
    }
})));

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(PORT, () => console.log(`GraphQL Server (CORS enabled) is now running on http://localhost:${PORT}`));
