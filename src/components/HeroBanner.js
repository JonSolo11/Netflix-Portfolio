import React from 'react';

function HeroBanner() {
  const bannerStyle = {
    background: 'url(/path-to-your-image.jpg) center/cover no-repeat',
    color: '#fff',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={bannerStyle}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Welcome to My Portfolio</h1>
      <p style={{ fontSize: '20px', maxWidth: '600px' }}>
        Explore my best work, from web apps to game projects, and see what I can create!
      </p>
    </div>
  );
}

export default HeroBanner;
