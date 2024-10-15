import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-grid">
        <div className="home-grid-item">Rectangle 1</div>
        <div className="home-grid-item">Rectangle 2</div>
        <div className="home-grid-item">Rectangle 3</div>
        <div className="home-grid-item">Rectangle 4</div>
        <div className="home-grid-item">Rectangle 5</div>
        <div className="home-grid-item">Rectangle 6</div>
      </div>
    </div>
  );
}
