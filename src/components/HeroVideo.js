import React from 'react';

function HeroVideo() {
  const heroStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))',
    zIndex: 1,
  };

  const textStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: '#fff',
    zIndex: 2,
  };

  return (
    <div style={heroStyle}>
      <video
        style={videoStyle}
        src="/GAMEDEMO.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div style={overlayStyle}></div>
      <div style={textStyle}>
        <h1>Featured Video Title</h1>
        <p>Some exciting description about this video.</p>
      </div>
    </div>
  );
}

export default HeroVideo;
