import React from 'react';

const ServicesSection = () => {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '100%'
    };

    const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#0F3D2E',
        marginBottom: '0.5rem'
    };

    const textStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#444'
    };

    const buttonStyle = {
        marginTop: 'auto',
        alignSelf: 'flex-start',
        backgroundColor: '#0F3D2E',
        color: '#fff',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '4px',
        fontWeight: '600',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.2s'
    };

    return (
        <section id="services" className="section" style={{ backgroundColor: '#F7F3EF' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '600',
                    color: '#0F3D2E',
                    marginBottom: '3rem',
                    fontSize: '2.5rem'
                }}>Services</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Free Consultation */}
                    <div style={cardStyle}>
                        <h3 style={titleStyle}>Free Consultation</h3>
                        <div style={textStyle}>
                            <p style={{ marginBottom: '1rem' }}>
                                This free online call is the first step toward understanding your goals, current challenges, and the support you’re looking for. You’ll get a clear overview of our services, what working together looks like, and whether the ALIGN Health Method is the right fit for you—so you can make a confident, informed decision.
                            </p>
                        </div>
                        <button onClick={scrollToContact} style={buttonStyle}>Start Today</button>
                    </div>

                    {/* Personalized Fitness Coaching */}
                    <div style={cardStyle}>
                        <h3 style={titleStyle}>Personalized Fitness Coaching</h3>
                        <div style={textStyle}>
                            <p style={{ marginBottom: '1rem' }}>
                                Available online or in-person, this fully individualized service is built around your goals, your body, and your current physical condition. Coaching is based on evidence-based training principles and designed to evolve as your fitness, capacity, and confidence improve.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                You’ll receive structured programming, thoughtful progressions, and ongoing adjustments based on how your body responds. Programs emphasize safety, sustainability, and long-term progress—so training supports your health, not just short-term results.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Whether online or in-person, the method remains the same: structured programming, clear guidance, and education on why your plan works. This builds movement awareness, confidence, and long-term control over your training—rather than dependency.
                            </p>
                            <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#666' }}>
                                *Personalized fitness coaching is available on its own or combined with Nutrition Coaching.*
                            </p>
                        </div>
                        <button onClick={scrollToContact} style={buttonStyle}>Start Today</button>
                    </div>

                    {/* Nutrition */}
                    <div style={cardStyle}>
                        <h3 style={titleStyle}>Nutrition</h3>
                        <div style={textStyle}>
                            <p style={{ marginBottom: '1rem' }}>
                                Our nutrition coaching is provided entirely online for maximum flexibility. We begin with a structured assessment using targeted questionnaires to understand your current habits, lifestyle, and challenges. This allows us to clearly identify your starting point and set realistic, personalized goals.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                From there, using precise, current, science-based methods, we help you build a sustainable system around nutrition and daily routines—something that fits your life and is maintainable long term.
                            </p>
                            <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#666' }}>
                                *Nutrition coaching is available on its own or with fitness Coaching.*
                            </p>
                        </div>
                        <button onClick={scrollToContact} style={buttonStyle}>Start Today</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
