import React from 'react';
import Slider from 'react-slick';
import './VideoCarousel.css';

function VideoCarousel({ title, videos }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of visible slides
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
    <div style={{ margin: '20px 0', padding: '0 20px', color: '#fff' }}>
      <h2 style={{ marginLeft: '10px' }}>{title}</h2>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="carousel-item">
            <div className="carousel-thumbnail">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="carousel-image"
              />
              <div className="carousel-overlay">
                <p>{video.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VideoCarousel;
