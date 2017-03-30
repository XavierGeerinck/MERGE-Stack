const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const next = require('next')
const Wreck = require('wreck');
const cookieParser = require('cookie-parser');
const cookie = require('react-cookie');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(cookieParser());
  server.use(acceptToken());

  server.get('*', (req, res) => {
      cookie.plugToRequest(req, res);
      return handle(req, res)
  });

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Next-auth ready on http://localhost:3000')
  })
})

function apiGetUser (token) {
    return new Promise((resolve, reject) => {
        const query = "query { me { id, name, email }}";

        Wreck.post(`http://localhost:4000/graphql`, { 
            payload: {
                query: query
            }, 
            headers: { 
                Authorization: `Bearer ${token}`
            } 
        }, (err, res, payload) => {
            if (err) {
                return reject(err);
            }

            try {
                const response = JSON.parse(payload);
                return resolve(response.data.me);
            } catch (err) {
                return reject(err);
            }
        });
    });
}

/**
 * Handles the authentication of the user if the "token" cookie has been passed, the authenticated user is then available in req.user
 * @param {*} options 
 */
function acceptToken(options) {
    var self = this;

    return function (req, res, next) {
        const token = req.cookies['token'];

        if (!token) {
            return next();
        }

        apiGetUser(token)
        .then((user) => {
            req.user = user;
            return next();
        })
        .catch((err) => {
            return next(err);
            // return res.end(JSON.stringify(err));
        });
    }
}

