import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Project() {
  const [project, setProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageChanging, setIsImageChanging] = useState(false);

  useEffect(() => {
    const storedProject = localStorage.getItem("selectedProject");
    if (storedProject) {
      setProject(JSON.parse(storedProject));
    }
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null && project) {
      const nextIndex = (selectedImageIndex + 1) % project.images.length;
      setIsImageChanging(true);
      setTimeout(() => {
        setSelectedImageIndex(nextIndex);
        setIsImageChanging(false);
      }, 500);
    }
  };

  const showPrevImage = () => {
    if (selectedImageIndex !== null && project) {
      const prevIndex =
        (selectedImageIndex - 1 + project.images.length) %
        project.images.length;
      setIsImageChanging(true);
      setTimeout(() => {
        setSelectedImageIndex(prevIndex);
        setIsImageChanging(false);
      }, 500);
    }
  };

  if (!project) {
    return <div>Loading project data...</div>;
  }

  const firstArray = project.images.slice(0, 2);
  const secondArray = project.images.slice(2, 5);
  const thirdArray = project.images.slice(5);

  return (
    <div>
      <Navbar />
      <div className="project-container">
        <div className="project-title">{project.projectName}</div>
        <div className="project-grid">
          {firstArray.map((image, index) => (
            <div key={index} className="project-grid-item">
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="project-grid-item-image"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
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
                &#10094;
              </span>

              <img
                className={`modal-content ${isImageChanging ? "" : "show"}`}
                src={project.images[selectedImageIndex]}
                alt={`Full Image ${selectedImageIndex + 1}`}
              />

              <span
                className="arrow-next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
              >
                &#10095;
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
