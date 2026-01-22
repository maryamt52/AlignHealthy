import React from 'react';
import { useModal } from '../context/ModalContext';

const About = () => {
    const { openModal } = useModal();
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <section className="section" style={{ background: 'var(--color-white)', flex: 1 }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Increased maxWidth for grid */}
                    <div className="about-grid">
                        <div className="about-text about-content">
                            <p>
                                <strong style={{ fontWeight: '600' }}>The ALIGN Health Method was created by Mary, a PhD-trained bioanalytical chemist with a research background in metabolomics.</strong> During her postdoctoral work, she explored how amino acids in nutrition can impact health and disease. The ambition of understanding how her scientific knowledge and research experience could actually help people live healthier lives led to her deliberate transition from lab-based research to applied health coaching, where scientific insight is translated into practical, sustainable habits and used directly with people.
                            </p>
                            <p>
                                The ALIGN Health Method is not about extremes, trends, or one-size-fits-all programs. It means aligning science-based health methods—from movement to nutrition, recovery, and daily life—in a way that works in the real world, at any age and at any starting point.
                            </p>

                            {/* Mobile Image: Appears after 2nd paragraph */}
                            <img
                                src="/align-method-chart.png"
                                alt="Align Health Method - Personalized, Structured, Sustainable"
                                className="about-chart mobile-only-chart"
                            />

                            <p>
                                This approach is for people who want to stay strong, mobile, balanced, and healthy over the long term—whether they are returning to training, managing recurring discomfort, or simply looking for a sustainable way to support their healthspan.
                            </p>
                            <p>
                                Coaching is available both online and in person, depending on individual needs.
                                The goal is simple: to turn evidence-based science into practical methods that help you stay aligned with your health—now and in the years ahead.
                            </p>

                            <div style={{ marginTop: '2.5rem' }}>
                                <button onClick={openModal} className="btn btn-primary">
                                    Learn How It Works
                                </button>
                            </div>
                        </div>

                        <div className="about-image desktop-only-chart">
                            <img
                                src="/align-method-chart.png"
                                alt="Align Health Method - Personalized, Structured, Sustainable"
                                className="about-chart"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
