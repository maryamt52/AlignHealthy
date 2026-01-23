import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-white)' }}>
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
                            <strong style={{ fontWeight: '600' }}>The ALIGN Health Method</strong> was founded by Mary, a PhD-trained bioanalytical chemist with a research background in metabolomics. During her postdoctoral work, she explored how dietary amino acids can impact health and disease. This research inspired a mission to help people improve their health for the long term, motivating her to transition from the lab to client-focused fitness and nutrition coaching. To bridge the gap between science and practical application, she earned her credentials as a Certified Personal Trainer, Nutrition Coach, and Corrective Exercise Specialist from the National Academy of Sports Medicine (NASM), translating scientific insight into sustainable habits for clients.
                        </p>
                        <p>
                            <strong style={{ fontWeight: '600' }}>The ALIGN Health Method</strong> is not about extremes, trends, or one-size-fits-all programs. It aligns science-based fitness and nutrition methods—from strength training to sustainable eating—in a way that works for real life, at any age and starting point.
                        </p>


                        {/* Mobile Image: Appears after 2nd paragraph */}
                        <img
                            src="/align-method-chart.png?v=14"
                            alt="Align Health Method - Personalized, Structured, Sustainable"
                            className="about-chart mobile-only-chart"
                        />

                        <p>
                            This approach is for people who want to stay <strong style={{ fontWeight: '600' }}>strong, mobile, and fit over the long term</strong>—or who are simply looking for a sustainable way to support their healthspan.
                        </p>
                        <p>
                            <strong style={{ fontWeight: '600' }}>At its core, the method focuses on consistency—not extremes.</strong>
                        </p>
                        <p>
                            If your goal is to <strong style={{ fontWeight: '600' }}>get fitter, build muscle, or stay strong as you age</strong>, two of the biggest factors are how you move and how you eat. Many people struggle with careless training or aggressive dieting—only to miss their goals.
                        </p>
                        <p>
                            We offer <strong style={{ fontWeight: '600' }}>personalized fitness and nutrition coaching — online or in person</strong> — to build a lifestyle you can actually maintain. We build plans that fit your level, schedule, and goals.
                        </p>
                        <p style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                            We believe that <strong style={{ fontWeight: '600' }}>real results don’t come from where you start, but from your consistency</strong>.
                        </p>
                    </div>


                    <div className="about-image desktop-only-chart">
                        <img
                            src="/align-method-chart.png?v=14"
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
