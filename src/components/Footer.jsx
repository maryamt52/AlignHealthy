import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaPodcast } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ background: 'black', color: 'white', padding: '4rem 0' }}>
            <div className="container">
                <div className="grid grid-3" style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Align Health Method</h3>
                        <p style={{ opacity: 0.8, maxWidth: '500px', margin: '0 auto 2rem auto' }}>
                            Evolving Your Health. Built for the Long Game.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }} aria-label="Instagram">
                            <FaInstagram size={18} /> <span>Instagram</span>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }} aria-label="Facebook">
                            <FaFacebookF size={18} /> <span>Facebook</span>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }} aria-label="YouTube">
                            <FaYoutube size={18} /> <span>YouTube</span>
                        </a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }} aria-label="Podcast">
                            <FaPodcast size={18} /> <span>Podcast</span>
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }} aria-label="TikTok">
                            <FaTiktok size={18} /> <span>TikTok</span>
                        </a>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.875rem' }}>
                    © {new Date().getFullYear()} Align Health Method. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
