import React from 'react';
import { useModal } from '../context/ModalContext';

const About = () => {
    const { openModal } = useModal();
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <section className="section" style={{ background: 'var(--color-white)', flex: 1 }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    {/* The Header/Slogan Part */}
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <p style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--color-text-main)' }}>
                            Your health is built in the days you don’t quit.
                        </p>
                        <p style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                            With Align Healthy, we offer personal training and nutrition coaching designed to help you turn movement and better nutrition into habits that last — without extreme rules or short-lived hype. Whether coaching happens online or in person, the goal stays the same: giving you the structure and support you need to keep showing up long enough for real change to stick.
                        </p>
                    </div>

                    {/* The 3 Paragraphs requested to be moved here */}
                    <div style={{ textAlign: 'left', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            With Align Healthy, we help you train with purpose, improve your fitness over time, and build nutrition habits that support energy, performance, and long-term health — without hype, without clinical claims, and without promising overnight results.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Personal training is tailored to your current level, goals, schedule, and stage of life — so you’re not guessing what to do or bouncing between random routines. Nutrition coaching supports better day-to-day choices and helps replace old habits with healthier ones in a way you can actually sustain.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            Coaching is available online or in person, depending on what fits you best. The approach is simple: structure + accountability + consistency, because real results come from what you repeat, not what you start.
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <button onClick={openModal} className="btn btn-primary">
                            Learn How It Works
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
