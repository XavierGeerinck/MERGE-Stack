import { ApolloClient, createNetworkInterface } from 'react-apollo'
import cookie from "react-cookie"

let apolloClient = null

function _initClient(headers, initialState) {
  const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
    opts: {
      credentials: 'same-origin'
      // Pass headers here if your graphql server requires them
    }
  });

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};  // Create the header object if needed.
      }
      // get the authentication token from local storage if it exists
      req.options.headers.authorization = cookie.load('token') || null;
      next();
    }
  }]);

  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: networkInterface
  })
}

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return _initClient(headers, initialState)
  }

  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState)
  }

  return apolloClient
}
