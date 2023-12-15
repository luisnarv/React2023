import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StarR from "./components/StarR";

import "./index.css";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarR
        maxRating={10}
        defaultRating={1}
        color="white"
        onSetRating={setMovieRating}
      />
      <p>this movie was rated {movieRating} stars </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarR maxRating={8} defaultRating={8} />
    <StarR maxRating={3} />
    <StarR maxRating={10} />
    <StarR /> 
    <Test />*/}
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
