import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VideoPlayer.css";

function VideoPlayer() {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, src } = location.state || {}; // Extract data passed from VideoCarousel

  useEffect(() => {
    // Ensure no scrolling in full-screen mode
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when leaving the page
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!src) {
    return <div>Error: No video selected!</div>; // Handle invalid navigation
  }

  return (
    <div className="video-player">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        ⬅
      </button>
      <video className="video-player-element" controls autoPlay>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="video-title">{title}</h1>
    </div>
  );
}

export default VideoPlayer;
