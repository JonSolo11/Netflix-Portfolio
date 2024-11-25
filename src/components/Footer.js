import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#141414', color: '#fff', textAlign: 'center', padding: '20px' }}>
      <p>© 2024 Netflix Portfolio</p>
      <p>
        <a href="https://github.com/JonSolo11" style={{ color: '#fff', textDecoration: 'none' }}>
          GitHub
        </a>{' '}
        |{' '}
        <a href="https://www.linkedin.com" style={{ color: '#fff', textDecoration: 'none' }}>
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;
