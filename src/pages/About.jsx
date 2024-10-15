import React from "react";
import Navbar from "../components/Navbar.jsx";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="abt-container">
        <div className="abt-left"></div>
        <div className="abt-right">
          <div className="abtr-top"></div>
          <div className="abtr-bottom">
            <div className="abtrb-left"></div>
            <div className="abtrb-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
