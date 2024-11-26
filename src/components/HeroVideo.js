import React from 'react';
import './HeroVideo.css';

function HeroVideo() {
  return (
    <div className="hero-video">
      {/* Background video */}
      <video
        className="hero-video-background"
        src="/GAMEDEMO.mp4" // Ensure the file path is correct
        autoPlay
        muted
        loop
      ></video>

      {/* Gradient fade-to-gray overlay */}
      <div className="hero-gradient"></div>

      {/* Content overlay */}
      <div className="hero-content">
        <h1 className="hero-title">Title</h1>
        <p className="hero-description">
          Description
        </p>
      </div>
    </div>
  );
}

export default HeroVideo;
