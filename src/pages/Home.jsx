import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import projectOne from "../images/kaja-about.png";

export default function Home() {
  ///tuki bom meu array objectov. vsak object bo vsebovou atribute: coverImage, imagesArray(kle bodo vse ostale slike k se bodo
  /// pol pokazale na project page-u), projectName, projectDesc, projectType
  //Pol bom meu loop kjer gre cez ta array objectov in na tej strani render-a vsak ta object in vzame coverImage in projectName
  //Pol pa še nekak nrdim, da ko klikneš na določen project se njegov objekt pass-a Project.jsx page-u kjer bo pa pol še
  ///description in vse slike skoz katere se bo dal scrollat, treba pogruntat kako spreminjat color scheme če bo to želja

  const navigate = useNavigate();

  const objectTemplate = {
    coverImage: "path/to/cover-image.jpg",
    images: ["path/to/image1.jpg", "path/to/image2.jpg", "path/to/image3.jpg"],
    projectName: "My Awesome Project",
    projectDescription: "This is a brief description of my awesome project.",
    projectType: "Residential",
  };

  const [bgColor, setBgColor] = useState("#dedcd9");
  const [primaryTextColor, setPrimaryTextColor] = useState("#72330d");
  const [secondaryTextColor, setSecondaryTextColor] = useState("#847d77"); // Default color

  const navigateToProject = () => {
    navigate("/project");
  };

  const handleMouseLeave = () => {
    // Reset to default color when not hovering
    setBgColor("#dedcd9");
    setPrimaryTextColor("#72330d");
    setSecondaryTextColor("#847d77");
  };

  return (
    <div className="home-container" style={{ backgroundColor: bgColor }}>
      <Navbar
        bgColor={bgColor}
        primaryTextColor={primaryTextColor}
        secondaryTextColor={secondaryTextColor}
      />
      <div className="home-grid">
        <div
          className="home-grid-item"
          onMouseEnter={() => {
            setBgColor("#ff0000");
            setPrimaryTextColor("#ffffff");
            setSecondaryTextColor("#123456");
          }}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: bgColor }}
          onClick={navigateToProject}
        >
          <img
            src={projectOne}
            alt="Project 1"
            className="home-grid-item-image"
          />
          <div className="project-name" style={{ color: primaryTextColor }}>
            project
          </div>
        </div>
        <div className="home-grid-item">Rectangle 2</div>
        <div className="home-grid-item">Rectangle 3</div>
        <div className="home-grid-item">Rectangle 4</div>
        <div className="home-grid-item">Rectangle 5</div>
        <div className="home-grid-item">Rectangle 6</div>
      </div>
    </div>
  );
}
