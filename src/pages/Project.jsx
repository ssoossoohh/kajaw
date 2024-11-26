import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Project() {
  const [project, setProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedBigImageIndex, setSelectedBigImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageChanging, setIsImageChanging] = useState(false);

  let firstImagesArray = [];
  let otherImagesArray = [];

  useEffect(() => {
    const storedProject = localStorage.getItem("selectedProject");
    if (storedProject) {
      setProject(JSON.parse(storedProject));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        switch (e.key) {
          case "ArrowRight":
            showNextImage();
            break;
          case "ArrowLeft":
            showPrevImage();
            break;
          case "Escape":
            closeModal();
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, selectedImageIndex]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setSelectedBigImageIndex(project.images[index].bigIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null && project) {
      let nextIndex = selectedImageIndex;
      do {
        nextIndex = (nextIndex + 1) % project.images.length;
      } while (
        project.images[nextIndex].bigIndex ===
        project.images[selectedImageIndex].bigIndex
      );
      console.log(nextIndex);
      console.log(project.images[nextIndex].bigIndex);

      setIsImageChanging(true);
      setTimeout(() => {
        setSelectedImageIndex(nextIndex);
        setSelectedBigImageIndex(project.images[nextIndex].bigIndex);

        setIsImageChanging(false);
      }, 400);
    }
  };

  const showPrevImage = () => {
    if (selectedImageIndex !== null && project) {
      let prevIndex = selectedImageIndex;
      do {
        prevIndex =
          (prevIndex - 1 + project.images.length) % project.images.length;
      } while (
        project.images[prevIndex].bigIndex ===
        project.images[selectedImageIndex].bigIndex
      );

      setIsImageChanging(true);
      setTimeout(() => {
        setSelectedImageIndex(prevIndex);
        setSelectedBigImageIndex(project.images[prevIndex].bigIndex);
        setIsImageChanging(false);
      }, 400);
    }
  };

  if (!project) {
    return <div>Loading project data...</div>;
  }

  if (
    project.projectTextPosition === "6" ||
    project.projectTextPosition === "6/7"
  ) {
    firstImagesArray = project.images.slice(0, 5);
    otherImagesArray = project.images.slice(5);
  } else if (project.projectTextPosition === "7") {
    firstImagesArray = project.images.slice(0, 6);
    otherImagesArray = project.images.slice(6);
  }

  /*5 pictures ALWAYS, then we have three options: 
  -text on 6
  -text on 7
  -text on 6 and 7
  */

  return (
    <div>
      <Navbar />
      <div className="project-container">
        <div className="project-title">{project.projectName}</div>
        <div className="project-grid">
          {firstImagesArray.map((image, index) => (
            <div key={index} className="project-grid-item">
              <img
                src={image.url}
                alt={`Project Image ${index + 1}`}
                className="project-grid-item-image"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
          <div className="project-grid-item-text">
            {project.projectDescriptionFirst}
          </div>

          {project.projectTextPosition === "6/7" && (
            <div className="project-grid-item-text">
              {project.projectDescriptionSecond}
            </div>
          )}

          {(project.projectTextPosition === "6" ||
            project.projectTextPosition === "6/7") &&
            otherImagesArray.map((image, index) => (
              <div key={index} className="project-grid-item">
                <img
                  src={image.url}
                  alt={`Project Image ${index + 1}`}
                  className="project-grid-item-image"
                  onClick={() => openModal(index + 5)}
                />
              </div>
            ))}

          {project.projectTextPosition === "7" &&
            otherImagesArray.map((image, index) => (
              <div key={index} className="project-grid-item">
                <img
                  src={image.url}
                  alt={`Project Image ${index + 1}`}
                  className="project-grid-item-image"
                  onClick={() => openModal(index + 6)}
                />
              </div>
            ))}

          {isModalOpen && (
            <div className="modal" onClick={closeModal}>
              <span className="close">&times;</span>

              <span
                className="arrow-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevImage();
                }}
              >
                &#10229;
              </span>

              <img
                className={`modal-content ${isImageChanging ? "" : "show"}`}
                src={project.bigImages[selectedBigImageIndex]}
                alt={`Full Image ${selectedImageIndex + 1}`}
              />

              <span
                className="arrow-next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
              >
                &#10230;
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* 

   <div className="project-grid-item-text">
            {project.projectDescriptionTop}
          </div>


{secondArray.map((image, index) => (
            <div key={index} className="project-grid-item">
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="project-grid-item-image"
                onClick={() => openModal(index + 2)}
              />
            </div>
          ))}
          <div className="project-grid-item-text">
            {project.projectDescriptionBottom}
          </div>
          {thirdArray.map((image, index) => (
            <div key={index} className="project-grid-item">
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="project-grid-item-image"
                onClick={() => openModal(index + 5)}
              />
            </div>
          ))}
*/
