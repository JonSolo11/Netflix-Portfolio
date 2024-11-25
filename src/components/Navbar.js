import React from 'react';

function Navbar() {
  const navStyle = {
    backgroundColor: '#141414',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    margin: '0 10px',
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ fontSize: '24px' }}>Netflix Portfolio</h1>
      <div>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/projects" style={linkStyle}>
          Projects
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
