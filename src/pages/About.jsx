import React from "react";
import Navbar from "../components/Navbar.jsx";

export default function About() {
  return (
    <div className="abt-container">
      <Navbar />
      <div className="abt-container-small">
        <div className="abt-left"></div>
        <div className="abt-right">
          <p className="abt-txt">
            My commitment to finding sustainable solutions in my everyday life
            extends to my love for renovantion and renovation projects that
            always present a unique challenge. As a designer, I strive to create
            personalized spaces that not onky reflect inidividuality and
            aesthetics but also contribute to a sustainable lifestyle. I have a
            passion for up-cycling second hand furniture and a dream of
            designing a project with high-end second hand furniture{" "}
          </p>

          <p className="abt-txt">kjmesaric@gmail.com</p>

          <p>+31 645179256</p>
        </div>
      </div>
    </div>
  );
}
