import React from "react";
import { hot } from "react-hot-loader";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default hot(module)(App);
