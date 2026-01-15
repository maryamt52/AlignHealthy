import React from 'react';

const HomeBio = () => {
    return (
        <section className="section" style={{ background: 'var(--color-white)', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <p style={{ fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--color-text-main)' }}>
                    Personal training and nutrition coaching built for long-term health — with structure, accountability, and consistency. Online or in person.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '2rem', color: 'var(--color-text-main)' }}>
                    We help you train with purpose, improve your fitness over time, and build nutrition habits that support energy, performance, and long-term health — without hype or unrealistic promises.
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Personal training tailored to your level, goals, schedule, and stage of life</li>
                    <li style={{ marginBottom: '0.5rem' }}>Nutrition coaching that builds sustainable day-to-day habits</li>
                    <li style={{ marginBottom: '0.5rem' }}>Online or in-person coaching</li>
                    <li style={{ marginBottom: '0.5rem' }}>Structure + accountability + consistency (so results actually stick)</li>
                </ul>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)', textAlign: 'center' }}>
                    Real results come from what you repeat, not what you start.
                </p>
            </div>
        </section>
    );
};

export default HomeBio;
