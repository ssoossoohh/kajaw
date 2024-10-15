import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/kajaw/about");
  };
  return (
    <div className="home-title">
      <div className="home-title-left">kaja m</div>
      <div className="home-title-right">
        <p className="htr-text">work</p>
        <p className="htr-text" onClick={navigateToAbout}>
          about
        </p>
      </div>
    </div>
  );
}
