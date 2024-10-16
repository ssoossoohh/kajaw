import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToWork = () => {
    navigate("/");
  };

  const isAboutActive = location.pathname === "/about";
  const isWorkActive = location.pathname === "/";

  return (
    <div className="home-title">
      <div className="home-title-left" onClick={navigateToWork}>
        · kaja mesaric
      </div>
      <div className="home-title-right">
        <p
          className={`htr-text ${isWorkActive ? "active" : ""}`}
          onClick={navigateToWork}
        >
          work
        </p>
        <p className={`htr-text ${isWorkActive ? "activedot" : ""}`}>·</p>
        <p
          className={`htr-text ${isAboutActive ? "active" : ""}`}
          onClick={navigateToAbout}
        >
          about
        </p>
        <p className={`htr-text ${isAboutActive ? "activedot" : ""}`}>·</p>
      </div>
    </div>
  );
}
