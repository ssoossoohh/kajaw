import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Project() {
  return (
    <div>
      <Navbar />
      <div className="project-container">
        <div className="project-title">manifattura tabacchi</div>
        <div className="project-grid">
          <div className="project-grid-item">Rect 1</div>
          <div className="project-grid-item">Rect 2</div>
          <div className="project-grid-item-text">
            The task of this project was to create a symbiotic relaitonship
            between two connecte but by functionality independent buidlings: a
            residential complex and a hotel. The main objective was to maximise
            the unit count in both objects and to provide privacy to the
            residential section, while offering all the excitement that make an
            extraoridnary hotel.
          </div>

          <div className="project-grid-item">Rect 1</div>
          <div className="project-grid-item">Rect 2</div>
          <div className="project-grid-item">Rect 3</div>

          <div className="project-grid-item-text">
            A creative challenge that resulted in an exploration of
            possibilities and a unique end product.
          </div>
          <div className="project-grid-item">Rect 2</div>
          <div className="project-grid-item">Rect 3</div>

          <div className="project-grid-item">Rect 1</div>
          <div className="project-grid-item">Rect 2</div>
          <div className="project-grid-item">Rect 3</div>
        </div>
      </div>
    </div>
  );
}
