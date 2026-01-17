import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import '../styles/main.css';

const Navbar = () => {
  const { openModal } = useModal();
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
    backgroundColor: 'var(--color-bg)', // Cream background to match theme
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    padding: '0 0',
    height: '80px', // Reduced height (narrower)
    display: 'flex',
    alignItems: 'center'
  };

  const linkStyles = {
    marginLeft: '2rem',
    fontWeight: '600',
    fontSize: '0.95rem',
    color: '#1a1a1a', // Dark text
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: 'inherit'
  };

  return (
    <nav style={navStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', width: '100%', padding: '0 2rem' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <img src="/logo.png" alt="Align Health Method" style={{ height: '240px', width: 'auto', objectFit: 'contain', marginTop: '10px' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="desktop-links" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" style={linkStyles}>Home</a>
            <a href="/about" style={linkStyles}>About</a>
            <button onClick={openModal} style={linkStyles}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
