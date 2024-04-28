import React from "react";
import "./App.css";
import Routs from "./Router/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routs />
    </BrowserRouter>
  );
}

export default App;
