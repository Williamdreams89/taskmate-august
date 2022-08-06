import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiSlice } from "./Api/ApiSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={ApiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
