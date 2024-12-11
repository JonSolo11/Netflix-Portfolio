import React, { useState } from "react";
import Slider from "react-slick";
import "./VideoCarousel.css";
import { wait } from "@testing-library/user-event/dist/utils";

function VideoCarousel({ title, videos }) {
  const [hoveredCard, setHoveredCard] = useState(null); // Track the currently hovered card

  const settings = {
    dots: false,
    infinite: true,
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
    <div style={{ margin: "20px 0", padding: "0 20px", color: "#fff" }}>
      <h2 style={{ marginLeft: "10px" }}>{title}</h2>
      <Slider {...settings}>
        {videos.map((video) => (
          <div
            key={video.id}
            className="carousel-item"
            onMouseEnter={() => {
              setHoveredCard(video.id); // Only allow hover if no card is currently hovered
            }}
            onMouseLeave={() => {
              wait(.3)
              setHoveredCard(null)
            }
            } // Reset hover state
          >
            <div
              className={`card-container ${
                hoveredCard === video.id ? "hovered" : ""
              } ${hoveredCard && hoveredCard !== video.id ? "disable-hover" : ""}`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="thumbnail"
              />
              <div className="card-details">
                <h3 className="video-title">{video.title}</h3>
                <div className="meta">TV-MA | 3 Seasons | HD</div>
                <div className="buttons">
                  <button className="play-button">▶ Play</button>
                  <button className="icon-button">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VideoCarousel;
