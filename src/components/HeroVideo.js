import React, { forwardRef } from "react";
import "./HeroVideo.css";

const HeroVideo = forwardRef((props, ref) => (
  <div className="hero-video">
    <video
      ref={ref}
      className="hero-video-background"
      src="/GAMEDEMO.mp4"
      autoPlay
      muted
      loop
    ></video>
    <div className="hero-gradient"></div>
    <div className="hero-content">
      <h1 className="hero-title">Title</h1>
      <p className="hero-description">Description</p>
    </div>
  </div>
));

export default HeroVideo;
