import React, { useState } from 'react';

const ProgramSelection = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const programs = [
        { id: 'fitness', title: 'Fitness Coaching', description: 'Personalized workout plans designed for your goals.' },
        { id: 'nutrition', title: 'Nutrition Coaching', description: 'Science-based dietary strategies for sustainable health.' },
        { id: 'both', title: 'Fitness & Nutrition Coaching', description: 'The complete package for total transformation.' }
    ];

    const handleProgramClick = (id) => {
        setSelectedProgram(id);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log('Form Submitted:', { program: selectedProgram, ...formData });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="section container text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Submitted successfully.</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>We will contact you shortly.</p>
                <a href="/" className="btn btn-outline" style={{ marginTop: '2rem' }}>Return Home</a>
            </div>
        );
    }

    return (
        <div className="section container" style={{ minHeight: '80vh' }}>
            {!selectedProgram ? (
                <>
                    <h2 className="text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Choose Your Program</h2>
                    <div className="grid grid-3">
                        {programs.map((prog) => (
                            <button
                                key={prog.id}
                                onClick={() => handleProgramClick(prog.id)}
                                style={{
                                    background: 'white',
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--color-border)',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: 'var(--shadow-sm)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                    e.currentTarget.style.borderColor = 'var(--color-border)';
                                }}
                            >
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>{prog.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{prog.description}</p>
                                <span style={{ marginTop: 'auto', paddingTop: '1.5rem', color: 'var(--color-primary)', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                                    Select Program →
                                </span>
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <button
                        onClick={() => setSelectedProgram(null)}
                        style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}
                    >
                        ← Back to programs
                    </button>

                    <div style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                        <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>You selected:</h2>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '2rem', fontSize: '1.5rem' }}>
                            {programs.find(p => p.id === selectedProgram)?.title}
                        </h3>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                                    placeholder="Jane Doe"
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgramSelection;
