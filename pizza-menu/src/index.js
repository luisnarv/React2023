import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import Pizza from "./components/Pizza";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />;
      <Menu />;
      <Footer />;
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);