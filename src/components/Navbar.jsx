import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({
  bgColor,
  primaryTextColor,
  secondaryTextColor,
}) {
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
    <div className="home-title" style={{ backgroundColor: bgColor }}>
      <div
        className="home-title-left"
        onClick={navigateToWork}
        style={{ color: primaryTextColor }}
      >
        ·   kaja mesaric
      </div>
      <div className="home-title-right">
        <p
          className={`htr-text ${isWorkActive ? "active" : ""}`}
          style={{ color: primaryTextColor }}
          onClick={navigateToWork}
        >
          work
        </p>
        <p
          className={`htr-text ${isWorkActive ? "activedot" : ""}`}
          style={{ color: primaryTextColor }}
        >
          ·
        </p>
        <p
          className={`htr-text ${isAboutActive ? "active" : ""}`}
          onClick={navigateToAbout}
          style={{ color: secondaryTextColor }}
        >
          about
        </p>
        <p
          className={`htr-text ${isAboutActive ? "activedot" : ""}`}
          style={{ color: secondaryTextColor }}
        >
          ·
        </p>
      </div>
    </div>
  );
}
