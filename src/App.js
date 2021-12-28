import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <BrowserRouter>
      <Provider {...{ store }}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
