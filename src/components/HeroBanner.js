import React from 'react';
import './HeroBanner.css';

function HeroBanner({ project }) {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${project.imageUrl})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{project.title}</h1>
          <p className="hero-description">{project.description}</p>
          <button className="hero-button">View Project</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
