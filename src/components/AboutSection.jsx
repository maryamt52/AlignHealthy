import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Specific Headline as Requested */}
                <h2 style={{
                    textAlign: 'center',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '600',
                    color: '#0F3D2E',
                    marginBottom: '3rem',
                    lineHeight: '1.2'
                }} className="about-headline">
                    About ALIGN Health Method
                </h2>

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

                        {/* "Learn How It Works" button removed here as replaced by "Start Today" in Contact section or global replacement */}
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
            <style jsx>{`
                .about-headline {
                    font-size: 32px; /* Mobile Default */
                }
                @media (min-width: 600px) {
                    .about-headline { font-size: 40px; } /* Tablet */
                }
                @media (min-width: 1024px) {
                    .about-headline { font-size: 48px; } /* Desktop */
                }
            `}</style>
        </section>
    );
};

export default AboutSection;
