import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import "./indexCss/index.css"

import reducers from "./reducers";

// Create the Redux store with thunk middleware
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Get the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app, wrapping it with the Redux Provider to provide the store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
