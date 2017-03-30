# MERGE Stack
## Introduction
MERGE stands for MySQL, Express, React, GraphQL with an additional E for prononciation

This stack accomplishes the goal of a Universal Javascript app, allowing for initial **Server Side Rendering (SSR)** with the client taking over after this initial render.
Due to the use of GraphQL, we are able to minimise the data being sent over the network.

## Project Description
In this repository, you will be able to find an Instagram example, with user authentication functionallity. Once a user has been signed in, posts can be created and viewed, as well as a user management dropdown box. This project therefor features important use cases such as authentication, CRUD basics, routing and server and client side rendering.

### Technologies & Features
The technologies and features used within this project are:

* Authentication
* GraphQL (with [Apollo](https://github.com/apollographql/apollo-client))
* Server Side Rendering & Client Side Rendering (with [Next.js](https://github.com/zeit/next.js/))
* React
* Sequelize for Database Communication

### Setup
#### Client
1. `cd client/`
2. `npm install` (or `yarn`)
3. `npm run dev` (or `yarn run dev`)

#### Server
1. `cd server/`
2. `npm install` (or `yarn`)
3. `npm install -g sequelize-cli` (Installation of the Database Manager)
4. `sequelize db:migrate` (Create the initial database schema, to adapt these configs, see: `server/config/config.js`)
3. `npm run dev` (or `yarn run dev`)

### Authentication Details
Authentication has to be supported on both the server and client side. Therefor the cookies are used to accomplish this. We are able to provide the server with the client's cookie, where the token can be extracted from. Once this token has been read, the user can be authenticated on the server through a GraphQL call from the Client Server to the Main Server. Once the user is logged in, the client can take over by adding this same token from the cookie to an `Authorization: Bearer <token>` header. This is also the header that is used on the Client Server to authenticate the user with the token on the Main Server.

### Documentation
For more documentation, see the [Client](./client/README.md) or [Server](./server/README.md) documentations.