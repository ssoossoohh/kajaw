import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="kajaw/" element={<Home />} />
        <Route exact path="kajaw/about" element={<About />} />
      </Routes>
    </Router>
  );
}
