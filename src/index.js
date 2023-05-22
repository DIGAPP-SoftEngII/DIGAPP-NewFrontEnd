import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Auth0Provider} from "@auth0/auth0-react";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ApolloClient, ApolloProvider, HttpLink,InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000"
  })
})
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Auth0Provider
        domain="digapp.us.auth0.com"
        clientId="2ucCXdsyqbfuYIYVYv0670aJcN89PAxj"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </ApolloProvider>
);
