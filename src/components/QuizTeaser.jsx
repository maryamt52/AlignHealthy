import React, { useState } from 'react';

const QuizTeaser = () => {
    const [step, setStep] = useState('intro'); // intro, goal, gender, age, result
    const [formData, setFormData] = useState({
        goal: '',
        gender: '',
        age: ''
    });

    const handleStart = () => setStep('goal');

    const handleOption = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (field === 'goal') setStep('gender');
        if (field === 'gender') setStep('age');
    };

    const handleAge = (e) => {
        setFormData(prev => ({ ...prev, age: e.target.value }));
    };

    const calculatePlan = () => {
        // Simple logic for demo purposes
        // In a real app, this would be more complex or call an API
        setStep('result');
    };

    // Render different content based on step
    const renderScreen = () => {
        switch (step) {
            case 'intro':
                return (
                    <>
                        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '2rem' }}>
                            <img src="/logo.png" alt="Logo" style={{ height: '30px', width: 'auto' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img src="/logo.png" alt="Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem', color: '#111' }}>Body Profile Assessment</h3>
                        <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '3rem' }}>
                            Let's build your custom plan. This takes about 2 minutes.
                        </p>
                        <button onClick={handleStart} style={{ width: '100%', height: '50px', background: '#000', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', marginBottom: '1rem', border: 'none', cursor: 'pointer' }}>
                            Begin
                        </button>
                    </>
                );
            case 'goal':
                return (
                    <>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}>What is your primary goal?</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                            {['Lose Weight', 'Build Muscle', 'Improve Energy', 'Fix Gut Health'].map(opt => (
                                <button key={opt} onClick={() => handleOption('goal', opt)} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', background: 'white', textAlign: 'left', fontWeight: '500', cursor: 'pointer' }}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </>
                );
            case 'gender':
                return (
                    <>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}>Biological Sex</h3>
                        <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1.5rem', textAlign: 'center' }}>Used for calorie/hormone calculations.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                            {['Female', 'Male'].map(opt => (
                                <button key={opt} onClick={() => handleOption('gender', opt)} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', background: 'white', textAlign: 'left', fontWeight: '500', cursor: 'pointer' }}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </>
                );
            case 'age':
                return (
                    <>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}>How old are you?</h3>
                        <input
                            type="number"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleAge}
                            style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1.1rem', marginBottom: '2rem' }}
                        />
                        <button onClick={calculatePlan} style={{ width: '100%', height: '50px', background: '#000', borderRadius: '25px', color: 'white', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                            Calculate Plan
                        </button>
                    </>
                );
            case 'result':
                return (
                    <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Plan Ready!</h3>
                        <p style={{ color: '#666', marginBottom: '2rem' }}>Based on your goal to <strong>{formData.goal}</strong>:</p>

                        <div style={{ background: 'white', padding: '1rem', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.25rem' }}>Daily Calories</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>
                                {formData.gender === 'Male' ? '2,400' : '1,800'} kcal
                            </div>
                        </div>

                        <div style={{ background: 'white', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.25rem' }}>Recommended Split</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                                3x Strength + 2x Zone 2 Cardio
                            </div>
                        </div>

                        <a href="#pricing" style={{ display: 'block', width: '100%', padding: '1rem', background: 'var(--color-primary)', color: 'white', borderRadius: '25px', fontWeight: '600', textDecoration: 'none' }}>
                            Get Full Program
                        </a>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="quiz" className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
            <div className="container grid grid-2" style={{ alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>Where Do You Stand?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
                        Discover your unique body profile. Our AI-powered assessment analyzes your posture, stress levels, and goals to recommend the perfect plan.
                    </p>
                    <ul style={{ marginBottom: '2.5rem', listStyle: 'none' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', marginRight: '1rem', fontSize: '0.8rem' }}>1</span>
                            Take the 2-minute quiz
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', marginRight: '1rem', fontSize: '0.8rem' }}>2</span>
                            Get your personalized report
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', marginRight: '1rem', fontSize: '0.8rem' }}>3</span>
                            Start your custom transformation
                        </li>
                    </ul>
                    <button className="btn" style={{ background: 'white', color: 'black' }} onClick={() => document.getElementById('phone-screen').scrollIntoView({ behavior: 'smooth' })}>
                        Start Free Assessment
                    </button>
                </div>

                <div id="phone-screen" style={{ display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
                    {/* CSS Phone Mockup */}
                    <div style={{
                        width: '320px',
                        height: '640px',
                        background: '#111',
                        borderRadius: '45px',
                        padding: '12px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        transform: 'rotateY(-5deg)',
                        transition: 'transform 0.3s ease',
                        position: 'relative'
                    }}>
                        {/* Screen */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: '#F7F3EF',
                            borderRadius: '35px',
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Status Bar */}
                            <div style={{ height: '40px', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 25px', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: '#000' }}>
                                <span>9:41</span>
                                <div style={{ width: '80px', height: '20px', background: '#000', borderRadius: '10px' }}></div>
                                <span>100%</span>
                            </div>

                            {/* Dynamic App Content */}
                            <div style={{ padding: '20px 25px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#111' }}>
                                {renderScreen()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuizTeaser;
