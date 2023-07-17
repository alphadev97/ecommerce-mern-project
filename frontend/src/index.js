import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";

const options = {
  duration: 5000,
  position: "bottom-center",
  style: {
    background: "#333",
    color: "#fff",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Toaster {...options} />
    <App />
  </Provider>
);
