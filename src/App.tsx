import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import Navbar from "./components/Navbar";
import "./App.css";
import Wheels from "./components/Wheels";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={App} /> */}
        <Route path="/wheels" element={<Wheels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default hot(module)(App);
