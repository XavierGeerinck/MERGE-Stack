# MERGE Stack
## About
Since the rise of new client-side frameworks such as Angular, React and many others. A lot of code gets written and executed on the client-side. Resulting in a decreased performance, bad SEO, increased bandwith and many other issues. On the contrary side, client-side applications also have stronger points such as an improved UX flow, faster transitions and others. The question that we have to ask ourselves here, is how we are able to keep the advantages, and eliminate the disadvantages. Resulting in the rise of Universal Javascript applications.

These Universal Javascript applications [1](https://github.com/facebook/react/pull/4041) combine the power of Server Side and Client Side rendering to create applications that can run in servers, browsers and mobile devices. To improve SEO, initial load performance and many others.

The MERGE stack now offers a set of languages, tools and frameworks that allow the developer to get started with developing Universal Javascript applications in a short period of time, without the need of researching the best tools to use and combine.

It exists out of cutting edge technology such as MySQL, Express, React and GraphQL. Allowing for applications to be written in a modular way, and keeping the bandwith requirements as optimal as possible.

## Stack
* [MySQL](https://www.mysql.com/): Database engine used to store our data, this can easily be interchanged with any other relational database engine such as Postgres, MSSQL, Oracle SQL, ...
* [Express](https://expressjs.com/): Web application framework used to route GraphQL requests and apply authorization
* [React](https://facebook.github.io/react/): A Javascript library for building user interfaces
* [GraphQL](http://graphql.org/): A query language for your API, decreasing the bandwith utilized and replacing REST calls
* [Next.js](https://zeit.co/blog/next): A framework that implements Server Side rendering
* [Apollo Client](https://github.com/apollographql/apollo-client): A easy to use client to connect the UI to our GraphQL server.

## Installation
The setup of the MERGE stack can be done manually through the cloning of the components listed above. It is however more trivial to create a clone of this repository and work from there. Once this repository is cloned, the client and the server can both be installed and configured as listed below.

> Note: Make sure that enough memory is available for the build process of the client (1Gb recommended). You can also use swap through the following commands

```
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo cp /etc/fstab /etc/fstab.bak
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### Client
1. `cd client/`
2. `npm install` (or `yarn`)
3. `npm run dev` (or `yarn run dev`)

### Server
1. `cd server/`
2. `npm install` (or `yarn`)
3. `npm install -g sequelize-cli` (Installation of the Database Manager)
4. `npm install mysql` (Install the MySQL connector, or see http://docs.sequelizejs.com/en/v3/docs/getting-started/ for more)
4. `sequelize db:migrate` (Create the initial database schema, to adapt these configs, see: `server/config/config.js`)
3. `npm run dev` (or `yarn run dev`)

## Feature Solutions
### Authentication
Authentication in Universal Javascript applications can be a complex implementation, due to the use of both Server Side rendering and Client Side rendering. Because of this, we need to authenticate the user on the server on the first request, and also on the client.

To accomplish this, we are able to authenticate the user through a token based system, and store this token in a cookie. Once this is done, we are then able to forward this cookie to the server side, which is able to read and process the authentication.

For the client side, we can just read this token, and add it as a `Authorization: Bearer <token>` header, as described in the OAuth 2 token flow (https://tools.ietf.org/html/rfc6749#section-4.1).

The server can now lookup this token and add the user to the request for easy usage.

> Note that the choice was made to process the user in a middleware layer, to make this user easily available in the further layers of our application.