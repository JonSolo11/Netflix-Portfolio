import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ hideNavbar }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (hideNavbar) {
    return null; // Completely hide navbar
  }

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <img
        src="/logo.png"
        alt="Netflix Portfolio Logo"
        className="navbar-logo"
      />
      <div className="navbar-links">
        <a href="/" className="navbar-link navbar-link-active">
          Home
        </a>
        <a href="/projects" className="navbar-link">
          Projects
        </a>
        <a href="/about" className="navbar-link">
          About
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
