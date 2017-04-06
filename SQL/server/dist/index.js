'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./schema');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _models = require('./db/models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const UserTokenModel = require('./db/models/').userToken;

var PORT = 4000;

// Server
var server = (0, _express2.default)();

var tokenParser = function tokenParser() {
  return function (req, res, next) {
    var token = req.query['access_token'];

    // Parse Bearer Token
    if (req.headers['authorization']) {
      var splits = req.headers['authorization'].split(' ');

      if (splits.length < 2) {
        return next();
      }

      token = splits[1];
    }

    if (!token) {
      return next();
    }

    // Fetch user
    _models.userToken.findOne({ where: {
        token: token
      } }).then(function (userToken) {
      if (!userToken) {
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({
          errors: [{ message: 'USER_DOES_NOT_EXIST' }]
        }));
      }

      req.user = userToken.getUser();
      return next();
    });
  };
};

server.use(tokenParser());

// Log requests
server.use((0, _morgan2.default)('dev'));

server.use('/graphql', (0, _cors2.default)(), (0, _expressGraphql2.default)(function (request) {
  return {
    schema: _schema.schema,
    graphiql: true,
    pretty: true,
    context: require('./resolvers'),
    rootValue: {
      user: request.user
    }
  };
}));

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(PORT, function () {
  return console.log('GraphQL Server (CORS enabled) is now running on http://localhost:' + PORT);
});