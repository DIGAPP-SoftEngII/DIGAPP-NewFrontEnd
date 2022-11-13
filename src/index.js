import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="digapp.us.auth0.com"
      clientId="2ucCXdsyqbfuYIYVYv0670aJcN89PAxj"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
