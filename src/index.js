import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./container.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
import { ApiProvider } from "./context/api_context";
import { PopUpProvider } from "./context/popup_context";

// dev-x3moz4hrm53u8cx8.us.auth0.com
// meS4vspNKpnS7kbY5QpxtbIwayVGEfT3

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-x3moz4hrm53u8cx8.us.auth0.com"
    clientId="meS4vspNKpnS7kbY5QpxtbIwayVGEfT3"
    authorizationParams={{
      redirect_uri: window.location.origin,
      cacheLocation: "localstorage",
    }}
  >
    <PopUpProvider>
      <ApiProvider>
        <UserProvider>
          <ProductsProvider>
            <FilterProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FilterProvider>
          </ProductsProvider>
        </UserProvider>
      </ApiProvider>
    </PopUpProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
