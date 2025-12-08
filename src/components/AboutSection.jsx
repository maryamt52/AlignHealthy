import React from 'react';
import profileImage from '../assets/profile.png';

const AboutSection = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-white)' }}>
            <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                <div style={{ order: 2 }}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        borderRadius: 'var(--radius-lg)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <img
                            src={profileImage}
                            alt="Coach Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }}
                        />
                    </div>
                </div>

                <div style={{ order: 1 }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Mary: Certified Coach. Scientific Insight.</h2>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Nutritionist & Strength Coach
                    </h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                        I am a Certified Personal Trainer (CPT) and Certified Nutrition Coach (CNC) from the National Academy of Sports Medicine (NASM), bringing a unique perspective to health and fitness. My coaching is grounded in a deep academic foundation, including a Ph.D. in Bioanalytical Chemistry with a focus on Metabolomics.
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                        This background gives me a distinct analytical edge: the ability to see complex patterns, decipher evidence, and truly understand how your body works at a fundamental level.
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                        My role is to take scientific insight and translate it into practical, structured, and easy-to-follow coaching. Your program is built with intention—not based on trends, shortcuts, or guesswork.
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                        I am here to guide you—step by step—to help you achieve:
                    </p>
                    <ul style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)', listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ marginBottom: '0.5rem' }}>• Stronger Movement and Optimal Performance.</li>
                        <li style={{ marginBottom: '0.5rem' }}>• Informed and Sustainable Dietary Strategies.</li>
                        <li style={{ marginBottom: '0.5rem' }}>• Long-term, Verifiable Results.</li>
                    </ul>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', fontWeight: 'bold' }}>
                        If you are looking for a thoughtful, personalized, and scientifically honest approach to fitness and nutrition, I am here to help you align your goals with your biology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
