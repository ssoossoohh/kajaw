import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import projectOne from "../images/kaja-about.png";

import test1 from "../images/test img1.png";
import test2 from "../images/test img2.jpeg";

export default function Home() {
  ///tuki bom meu array objectov. vsak object bo vsebovou atribute: coverImage, imagesArray(kle bodo vse ostale slike k se bodo
  /// pol pokazale na project page-u), projectName, projectDesc, projectType
  //Pol bom meu loop kjer gre cez ta array objectov in na tej strani render-a vsak ta object in vzame coverImage in projectName
  //Pol pa še nekak nrdim, da ko klikneš na določen project se njegov objekt pass-a Project.jsx page-u kjer bo pa pol še
  ///description in vse slike skoz katere se bo dal scrollat, treba pogruntat kako spreminjat color scheme če bo to želja

  const navigate = useNavigate();

  const testObj = {
    coverImage: test1,
    images: [
      test2,
      test2,
      test1,
      test2,
      test2,
      test1,
      test2,
      test2,
      test1,
      test2,
    ],
    projectName: "Test Project",
    projectDescriptionTop: "This is a brief description of my awesome project.",
    projectDescriptionBottom: "This is bottom text",
    projectType: "Residential",
    projectBackgroundColor: "#121212",
    projectPrimaryTextColor: "#f43001",
    projectSecondaryTextColor: "#aabbcc",
  };

  const testObj2 = {
    coverImage: test2,
    images: [
      test1,
      test1,
      test2,
      test1,
      test1,
      test2,
      test1,
      test1,
      test2,
      test1,
    ],
    projectName: "Second Project",
    projectDescriptionTop: "Top of 2nd",
    projectDescriptionBottom: "Bottom of 2nd",
    projectType: "Commercial",
    projectBackgroundColor: "#8881a2",
    projectPrimaryTextColor: "#7bbc21",
    projectSecondaryTextColor: "#3311cc",
  };

  const projects = [testObj, testObj2];

  const [bgColor, setBgColor] = useState("#dedcd9");
  const [primaryTextColor, setPrimaryTextColor] = useState("#72330d");
  const [secondaryTextColor, setSecondaryTextColor] = useState("#847d77"); // Default color

  const navigateToProject = (project) => {
    console.log(project);
    localStorage.setItem("selectedProject", JSON.stringify(project));
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
        {projects.map((project, index) => (
          <div
            key={index}
            className="home-grid-item"
            onMouseEnter={() => {
              setBgColor(project.projectBackgroundColor);
              setPrimaryTextColor(project.projectPrimaryTextColor);
              setSecondaryTextColor(project.projectSecondaryTextColor);
            }}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigateToProject(project)}
            style={{ backgroundColor: bgColor }}
          >
            <img
              src={project.coverImage}
              alt={project.projectName}
              className="home-grid-item-image"
            />
            <div className="project-name" style={{ color: primaryTextColor }}>
              {project.projectName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*      <div
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
        </div> */
