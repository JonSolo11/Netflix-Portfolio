import React, { useState } from "react";
import Slider from "react-slick";
import "./VideoCarousel.css";
import { wait } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";


function VideoCarousel({ title, videos, heroVideoRef }) {
  const [hoveredCard, setHoveredCard] = useState(null); // Track the currently hovered card

  const navigate = useNavigate();

  const handlePlay = (video) => {
    navigate("/player", { state: { title: video.title, src: video.src } });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "20px 0", padding: "0 20px", color: "#fff", zIndex: 0 }}>
      <h2 style={{ marginLeft: "10px" }}>{title}</h2>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {videos.map((video) => (
            <div
              key={video.id}
              className="carousel-item"
              onMouseEnter={() => {
                setHoveredCard(video.id); // Only allow hover if no card is currently hovered
                // Pause Hero Video
                if (heroVideoRef?.current) {
                  heroVideoRef.current.pause();
                }
              }}
              onMouseLeave={() => {
                wait(0.3);
                setHoveredCard(null);
                if (heroVideoRef?.current) {
                  heroVideoRef.current.play();
                }
              }}
            >
              <div
                className={`card-container ${
                  hoveredCard === video.id ? "hovered" : ""
                } ${hoveredCard && hoveredCard !== video.id ? "disable-hover" : ""}`}
              >
                <div className="thumbnail-container">
                {hoveredCard === video.id ? (
                    <video
                    className="thumbnail"
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    wait
                  />
                ) : (
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="thumbnail"
                  />
                )}
              </div>
                <div className="card-details">
                  <h3 className="video-title">{video.title}</h3>
                  <div className="meta">{video.tech ? video.tech : "| TV-MA | 3 Seasons | HD"}</div>
                  <div className="buttons">
                  <button className="play-button" onClick={() => handlePlay(video)}>▶ Play</button>
                    <button className="icon-button">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default VideoCarousel;
