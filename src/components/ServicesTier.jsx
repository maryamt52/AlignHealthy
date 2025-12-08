import React from 'react';

const PricingCard = ({ title, price, period, description, features, isPopular }) => (
    <div style={{
        background: 'white',
        padding: '2.5rem',
        borderRadius: 'var(--radius-lg)',
        border: isPopular ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s ease',
        boxShadow: isPopular ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
    }}>
        {isPopular && (
            <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--color-primary)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.05em'
            }}>
                MOST POPULAR
            </div>
        )}
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>{title}</h3>
        <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-text-main)' }}>{price}</span>
            <span style={{ color: 'var(--color-text-muted)' }}>/{period}</span>
        </div>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
            {description}
        </p>
        <ul style={{ listStyle: 'none', marginBottom: '2.5rem', flex: 1 }}>
            {features.map((feature, i) => (
                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--color-accent)', marginRight: '0.75rem', marginTop: '2px' }}>●</span>
                    {feature}
                </li>
            ))}
        </ul>
        <button className={isPopular ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%' }}>
            Select Plan
        </button>
    </div>
);

const ServicesTier = () => {
    const plans = [
        {
            title: "Monthly",
            price: "$199",
            period: "mo",
            description: "Flexible coaching for those who want to take it one step at a time.",
            features: ["Custom Workout Plan", "Nutrition Guidance", "Weekly Check-in", "App Access"],
            isPopular: false
        },
        {
            title: "3-Month Commitment",
            price: "$179",
            period: "mo",
            description: "Build solid habits and see real physical changes.",
            features: ["Everything in Monthly", "Bi-Weekly Video Call", "Habit Tracking", "Priority Support"],
            isPopular: false
        },
        {
            title: "6-Month Transformation",
            price: "$149",
            period: "mo",
            description: "The sweet spot for serious, long-term lifestyle transformation.",
            features: ["Everything in 3-Month", "Advanced Gut Health Protocol", "Hormone Health Module", "Exclusive Community Access"],
            isPopular: true
        },
        {
            title: "12-Month Lifestyle",
            price: "$129",
            period: "mo",
            description: "Full year of guidance for a permanent new you. Best value.",
            features: ["All Premium Features", "Quarterly 1:1 Deep Dive", "Supplement Strategy", "Maintenance Phase Planning"],
            isPopular: false
        }
    ];

    return (
        <section id="pricing" className="section">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Invest in Your Future Self</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        Choose the timeline that fits your goals. All plans include full access to the Align Healthy app.
                    </p>
                </div>
                <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                    {plans.map((plan, i) => (
                        <PricingCard key={i} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesTier;
