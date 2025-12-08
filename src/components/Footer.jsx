import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-primary)', color: 'white', padding: '4rem 0' }}>
            <div className="container">
                <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Align Healthy</h3>
                        <p style={{ opacity: 0.8, maxWidth: '300px' }}>
                            Empowering you to live a stronger, healthier life through science-based nutrition and fitness.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/program-selection" style={{ opacity: 0.8 }}>Programs</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#content" style={{ opacity: 0.8 }}>Podcast & Videos</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#about" style={{ opacity: 0.8 }}>About Me</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase' }}>Stay Connected</h4>
                        <p style={{ opacity: 0.8, marginBottom: '1rem' }}>Join the newsletter for weekly tips and recipes.</p>
                        <form style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="Your email"
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: 'var(--radius-full)',
                                    border: 'none',
                                    flex: 1
                                }}
                            />
                            <button className="btn btn-accent" style={{ padding: '0.5rem 1rem' }}>
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.875rem' }}>
                    © {new Date().getFullYear()} Align Healthy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
