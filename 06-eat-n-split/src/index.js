import React from "react";
import ReactDOM from "react-dom/client";
import reportWebvitals from "./reportWebVitals";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebvitals();
