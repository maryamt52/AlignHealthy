import React from 'react';
import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openModal } = useModal();
    return (
        <header style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        }}>
            {/* Video Background Placeholder */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: '#111' // Fallback
            }}>
                {/* 
           USER INSTRUCTION: 
           Replace the src below with your actual video file path after placing it in src/assets/hero-video.mp4
        */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.6 // Overlay effect
                    }}
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))'
                }}></div>
            </div>

            <div className="container text-center fade-in" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    lineHeight: 1.2,
                    color: 'white',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',

                }}>
                    Align Health Method<br />
                    <span style={{ fontSize: '0.6em', fontWeight: '400', display: 'block', marginTop: '0.5rem' }}>Personal Training & Nutrition Coaching</span>
                    <span style={{ fontSize: '0.4em', fontWeight: '300', display: 'block', marginTop: '0.5rem', opacity: 0.9 }}>Online or In Person.</span>
                </h1>

                <button onClick={openModal} className="btn" style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '1.25rem 2.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginTop: '1rem',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '4px'
                }}>
                    Learn How It Works
                </button>

            </div>
        </header>
    );
};

export default Hero;
