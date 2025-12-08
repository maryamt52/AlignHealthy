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

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)', // Dark background
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
    transition: 'all 0.3s ease',
    padding: '0.5rem 0', // Reduced padding
  };

  const logoStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '-0.03em',
    color: 'white', // White text for dark bg
  };

  const linkStyles = {
    marginLeft: '2.5rem',
    fontWeight: '500',
    fontSize: '0.95rem',
    color: 'white', // White text for dark bg
    opacity: 0.9,
    transition: 'opacity 0.2s',
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Align Healthy" style={{ height: '120px', width: 'auto', maxHeight: '120px' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="desktop-links" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#about" style={linkStyles}>About</a>
            <a href="#content" style={linkStyles}>Learn</a>
            <a href="/program-selection" className="btn btn-primary" style={{ marginLeft: '2rem', padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
              Start Transformation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
