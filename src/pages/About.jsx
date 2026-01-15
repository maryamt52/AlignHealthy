import React from 'react';
import { useModal } from '../context/ModalContext';

const About = () => {
    const { openModal } = useModal();
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <section className="section" style={{ background: 'var(--color-white)', flex: 1 }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    {/* The Header/Slogan Part */}
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <p style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--color-text-main)' }}>
                            The Align Health Method is led by Mary, a PhD-trained bioanalytical chemist with a focus on metabolomics.
                        </p>
                    </div>

                    <div style={{ textAlign: 'left', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            During her postdoctoral research, she studied how nutrition and metabolites (amino acids) influence human health. That work inspired her to shift from lab-based research into real-world health coaching, with a mission to help people improve their healthspan through sustainable fitness and nutrition habits.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The Align Health Method brings a structured, evidence-informed approach to personal training and nutrition coaching — translating complex science into practical habits people can actually follow.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            The focus isn’t on extremes or trends, but on building systems that work in real life and support long-term health.
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <button onClick={openModal} className="btn btn-primary">
                            Learn How It Works
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
