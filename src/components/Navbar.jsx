import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <img src="/logo.png" alt="Align Health Method" className="navbar-logo" />
        </a>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="desktop-links" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
