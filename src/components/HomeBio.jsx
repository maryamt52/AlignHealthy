import React from 'react';

const HomeBio = () => {
    return (
        <section className="section" style={{ background: 'var(--color-white)', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <p style={{ fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--color-text-main)', textAlign: 'center' }}>
                    Personal training and nutrition coaching built for long-term health — with structure, accountability, and consistency.
                </p>

                <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--color-primary)' }}>
                    Evolving your health, built for the long game.
                </h2>

                <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '2rem', color: 'var(--color-text-main)' }}>
                    We help you train with purpose, improve your fitness over time, and build nutrition habits that support energy, performance, and long-term health — without hype or unrealistic promises.
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '3rem', fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Personal training tailored to your level, goals, schedule, and stage of life</li>
                    <li style={{ marginBottom: '0.5rem' }}>Nutrition coaching that builds sustainable day-to-day habits</li>
                    <li style={{ marginBottom: '0.5rem' }}>Online or in-person coaching</li>
                    <li style={{ marginBottom: '0.5rem' }}>Structure + accountability + consistency (so results actually stick)</li>
                </ul>
                <div style={{
                    backgroundColor: 'rgba(44, 95, 45, 0.1)', // Light primary color background
                    padding: '2rem',
                    borderRadius: '8px',
                    marginTop: '2rem',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)', margin: 0 }}>
                        Real results come from what you repeat, not what you start.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeBio;
