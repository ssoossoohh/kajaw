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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const babushka = {
    coverImage: new URL("../images/babushka/babushka_1.png", import.meta.url)
      .href,
    images: [
      {
        url: new URL("../images/babushka/babushka_1.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/babushka/babushka_2.png", import.meta.url),
        bigIndex: 1,
      },
      {
        url: new URL("../images/babushka/babushka_3.png", import.meta.url),
        bigIndex: 1,
      },
      {
        url: new URL("../images/babushka/babushka_4.png", import.meta.url),
        bigIndex: 2,
      },
      {
        url: new URL("../images/babushka/babushka_5.png", import.meta.url),
        bigIndex: 2,
      },
      {
        url: new URL("../images/babushka/babushka_6.png", import.meta.url),
        bigIndex: 3,
      },
      {
        url: new URL("../images/babushka/babushka_7.png", import.meta.url),
        bigIndex: 3,
      },
      {
        url: new URL("../images/babushka/babushka_8.png", import.meta.url),
        bigIndex: 4,
      },
      {
        url: new URL("../images/babushka/babushka_9.png", import.meta.url),
        bigIndex: 4,
      },
    ],
    bigImages: [
      new URL("../images/babushka/babushka_1.png", import.meta.url),
      new URL(
        "../images/babushka/bigImages/babushka_big_1.jpeg",
        import.meta.url
      ),
      new URL(
        "../images/babushka/bigImages/babushka_big_2.png",
        import.meta.url
      ),
      new URL(
        "../images/babushka/bigImages/babushka_big_3.png",
        import.meta.url
      ),
      new URL(
        "../images/babushka/bigImages/babushka_big_4.jpeg",
        import.meta.url
      ),
    ],
    projectName: "babushka",
    projectDescriptionFirst:
      "For this boutique store offering gourmet products from northern Europe and Asia, I created a monotone background display to give the extravagant and unique product packaging all the freedom to stand out.",
    projectDescriptionSecond:
      "The central piece of the boutique is a semicircular island inspired by the peculiar semicircular shape of the retail space.",
    projectType: "Residential",
    projectBackgroundColor: "#121212",
    projectPrimaryTextColor: "#f43001",
    projectSecondaryTextColor: "#aabbcc",
    projectTextPosition: "6/7",
  };

  const bloemendaal = {
    coverImage: new URL(
      "../images/bloemendaal/bloemendaal_1.png",
      import.meta.url
    ),
    images: [
      {
        url: new URL(
          "../images/bloemendaal/bloemendaal_1.png",
          import.meta.url
        ),
        bigIndex: 0,
      },
      {
        url: new URL(
          "../images/bloemendaal/bloemendaal_2.png",
          import.meta.url
        ),
        bigIndex: 1,
      },
      {
        url: new URL(
          "../images/bloemendaal/bloemendaal_3.png",
          import.meta.url
        ),
        bigIndex: 2,
      },
      {
        url: new URL(
          "../images/bloemendaal/bloemendaal_4.png",
          import.meta.url
        ),
        bigIndex: 3,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 4,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 4,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 4,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 4,
      },
    ],
    bigImages: [
      new URL("../images/bloemendaal/bloemendaal_1.png", import.meta.url),
      new URL("../images/bloemendaal/bloemendaal_2.png", import.meta.url),
      new URL("../images/bloemendaal/bloemendaal_3.png", import.meta.url),
      new URL("../images/bloemendaal/bloemendaal_4.png", import.meta.url),
      new URL("../images/temp-image.png", import.meta.url),
    ],
    projectName: "bloemendaal",
    projectDescriptionFirst:
      "A private home with oversized windows and a high ceilings was a journey of designing a large space with right proportions.",
    projectDescriptionSecond: "",
    projectType: "Residential",
    projectBackgroundColor: "#121212",
    projectPrimaryTextColor: "#f43001",
    projectSecondaryTextColor: "#aabbcc",
    projectTextPosition: "6",
  };

  const franciamore = {
    coverImage: new URL(
      "../images/franciamore/franciamore_2.png",
      import.meta.url
    ),
    images: [
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL(
          "../images/franciamore/franciamore_2.png",
          import.meta.url
        ),
        bigIndex: 1,
      },
      {
        url: new URL(
          "../images/franciamore/franciamore_3.png",
          import.meta.url
        ),
        bigIndex: 1,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL(
          "../images/franciamore/franciamore_6.png",
          import.meta.url
        ),
        bigIndex: 2,
      },
      {
        url: new URL(
          "../images/franciamore/franciamore_7.png",
          import.meta.url
        ),
        bigIndex: 3,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 0,
      },
    ],
    bigImages: [
      new URL("../images/temp-image.png", import.meta.url),
      new URL(
        "../images/franciamore/bigImages/franciamore_big_1.png",
        import.meta.url
      ),
      new URL("../images/franciamore/franciamore_6.png", import.meta.url),
      new URL("../images/franciamore/franciamore_7.png", import.meta.url),
    ],
    projectName: "franciamore",
    projectDescriptionFirst:
      "Casa Franciamore came to be when an idea to turn an old hay storage hut into a two person studio apartment.",
    projectDescriptionSecond:
      "Because natural light was scarce, we decided to install a roof window and open up a window to the street that was previously bricked up.",
    projectType: "Residential",
    projectBackgroundColor: "#121212",
    projectPrimaryTextColor: "#f43001",
    projectSecondaryTextColor: "#aabbcc",
    projectTextPosition: "6/7",
  };

  const lassustraat = {
    coverImage: new URL(
      "../images/lassustraat/lassustraat_1.png",
      import.meta.url
    ),
    images: [
      {
        url: new URL(
          "../images/lassustraat/lassustraat_1.png",
          import.meta.url
        ),
        bigIndex: 0,
      },
      {
        url: new URL(
          "../images/lassustraat/lassustraat_2.png",
          import.meta.url
        ),
        bigIndex: 0,
      },
      {
        url: new URL(
          "../images/lassustraat/lassustraat_3.png",
          import.meta.url
        ),
        bigIndex: 0,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 1,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 1,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 1,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 1,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 1,
      },
    ],
    bigImages: [
      new URL(
        "../images/lassustraat/bigImages/lassustraat_big_1.png",
        import.meta.url
      ),
      new URL("../images/temp-image.png", import.meta.url),
    ],

    projectName: "lassustraat",
    projectDescriptionFirst:
      "A bold exploration of patterns and colours  results in a beautiful Amsterdam home for a young family.",
    projectDescriptionSecond: "",
    projectType: "Residential",
    projectBackgroundColor: "#121212",
    projectPrimaryTextColor: "#f43001",
    projectSecondaryTextColor: "#aabbcc",
    projectTextPosition: "6",
  };

  const azores = {
    coverImage: new URL("../images/azores/azores_1.png", import.meta.url),
    images: [
      {
        url: new URL("../images/azores/azores_1.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/azores/azores_2.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/azores/azores_3.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/azores/azores_4.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/azores/azores_5.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/azores/azores_6.png", import.meta.url),
        bigIndex: 0,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 1,
      },
      {
        url: new URL("../images/temp-image.png", import.meta.url),
        bigIndex: 1,
      },
    ],
    bigImages: [
      new URL("../images/azores/bigImages/azores_big_1.png", import.meta.url),
      new URL("../images/temp-image.png", import.meta.url),
    ],
    projectName: "azores",
    projectDescriptionFirst:
      "A colourful vacation house that drew the inspiration from the home island of Sao Miguel.",
    projectDescriptionSecond: "",
    projectType: "Residential",
    projectBackgroundColor: "#121212",
    projectPrimaryTextColor: "#f43001",
    projectSecondaryTextColor: "#aabbcc",
    projectTextPosition: "7",
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const projects = [babushka, bloemendaal, franciamore, lassustraat, azores];

  const [bgColor, setBgColor] = useState("#dedcd9");
  const [primaryTextColor, setPrimaryTextColor] = useState("#72330d");
  const [secondaryTextColor, setSecondaryTextColor] = useState("#847d77"); // Default color

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

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
      <div className="project-title">‎</div>
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
            <div className="project-name" style={{ color: secondaryTextColor }}>
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
        </div> 
        
        
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
    projectName: "test project",
    projectDescriptionFirst:
      "This is a brief description of my awesome project.",
    projectDescriptionSecond: "This is bottom text",
    projectType: "Residential",
    projectBackgroundColor: "#121212",
    projectPrimaryTextColor: "#f43001",
    projectSecondaryTextColor: "#aabbcc",
    projectTextPosition: "6",
  };
*/
