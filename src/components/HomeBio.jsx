import React from 'react';

const HomeBio = () => {
    return (
        <section className="section" style={{ background: 'var(--color-white)', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <p style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--color-text-main)' }}>
                    Your health is built in the days you don’t quit.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                    At Align Healthy, we offer personal training and nutrition coaching designed to help you turn movement and better nutrition into habits that last — without extreme rules or short-lived hype. Whether coaching happens online or in person, the goal stays the same: giving you the structure and support you need to keep showing up long enough for real change to stick.
                </p>
            </div>
        </section>
    );
};

export default HomeBio;
