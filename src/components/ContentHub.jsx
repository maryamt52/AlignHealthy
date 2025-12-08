import React, { useState } from 'react';

const ContentCard = ({ type, title, category, duration, imageColor }) => (
    <div style={{
        background: 'white',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        transition: 'transform 0.2s',
        cursor: 'pointer'
    }}>
        <div style={{
            height: '160px',
            background: imageColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem'
        }}>
            {type === 'podcast' ? '🎙️' : '▶️'}
        </div>
        <div style={{ padding: '1.5rem' }}>
            <div style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--color-accent)',
                fontWeight: '600',
                marginBottom: '0.5rem'
            }}>
                {category}
            </div>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{title}</h3>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                {duration} • {type === 'podcast' ? 'Listen' : 'Watch'}
            </div>
        </div>
    </div>
);

const ContentHub = () => {
    const [filter, setFilter] = useState('All');

    const content = [
        { type: 'podcast', title: 'Understanding Your Gut Microbiome: Part 1', category: 'Gut Health', duration: '45 min', color: '#2C5F2D' },
        { type: 'video', title: '5 Supplements Every Woman Over 30 Needs', category: 'Supplements', duration: '12 min', color: '#E07A5F' },
        { type: 'podcast', title: 'Navigating Menopause with Confidence', category: 'Menopause', duration: '55 min', color: '#475569' },
        { type: 'video', title: 'Morning Routine for Lower Cortisol', category: 'Stress', duration: '8 min', color: '#D4AF37' },
        { type: 'podcast', title: 'Probiotics vs Prebiotics: What You Need', category: 'Gut Health', duration: '30 min', color: '#2C5F2D' },
        { type: 'video', title: 'Strength Training for Bone Density', category: 'Fitness', duration: '20 min', color: '#E07A5F' },
    ];

    const categories = ['All', 'Gut Health', 'Menopause', 'Supplements', 'Stress', 'Fitness'];

    const filteredContent = filter === 'All'
        ? content
        : content.filter(item => item.category === filter);

    return (
        <section id="content" className="section">
            <div className="container">
                <div className="mb-lg">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Learn & Grow</h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        Expert insights on nutrition, hormones, and holistic health.
                    </p>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: 'var(--radius-full)',
                                    background: filter === cat ? 'var(--color-primary)' : 'white',
                                    color: filter === cat ? 'white' : 'var(--color-text-main)',
                                    border: filter === cat ? 'none' : '1px solid var(--color-border)',
                                    fontSize: '0.875rem',
                                    fontWeight: '500'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-3">
                    {filteredContent.map((item, index) => (
                        <ContentCard
                            key={index}
                            {...item}
                            imageColor={item.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentHub;
