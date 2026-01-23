import React from 'react';

const IntroSection = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '0' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    color: '#0F3D2E',
                    lineHeight: '1.2'
                }}>
                    Personalized Fitness & Nutrition Coaching
                </h2>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We help you train with purpose, improve your fitness over time, and build nutrition habits that support energy, performance, and long-term health — without hype or unrealistic promises.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li>Personalized fitness coaching tailored to your level, goals, schedule, and stage of life</li>
                        <li>Nutrition coaching that builds sustainable day-to-day habits</li>
                        <li>Online or in-person coaching</li>
                        <li style={{ fontWeight: '600', marginTop: '0.5rem' }}>Structure + accountability + consistency (so results actually stick)</li>
                    </ul>
                    <p style={{ fontStyle: 'italic', fontWeight: '500' }}>
                        Real results come from what you repeat, not what you start.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
