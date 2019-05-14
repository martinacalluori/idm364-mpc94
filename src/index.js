import React from "react";
import { render } from "react-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./components/App";
// import Nav from "./components/Nav";
import "./screen.css";

render(
  <>
    <App />
  </>,

  document.getElementById("app")
);
