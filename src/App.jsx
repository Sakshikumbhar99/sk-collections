import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/index.jsx";
import Portfolio from "../src/pages/portfolio/index.jsx";
import Contact from "../src/pages/contact/index.jsx";
import About from "../src/pages/about/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
