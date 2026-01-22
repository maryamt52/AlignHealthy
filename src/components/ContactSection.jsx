import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        confirmEmail: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
        if (errors.phone) {
            setErrors({ ...errors, phone: null });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Name Validation
        const nameParts = formData.name.trim().split(/\s+/);
        if (nameParts.length < 2) {
            newErrors.name = "Please enter your full name (First & Last).";
        } else {
            const invalidPart = nameParts.find(part => part.length < 2);
            if (invalidPart) {
                newErrors.name = "Each name part must be at least 2 characters.";
            }
        }

        // Phone Validation
        if (!formData.phone || formData.phone.length < 8) {
            newErrors.phone = "Please enter a valid phone number.";
        }

        // Email Validation
        if (formData.email !== formData.confirmEmail) {
            newErrors.confirmEmail = "Emails do not match!";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const submitButton = e.target.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;

        try {
            await fetch("https://formsubmit.co/ajax/maryamt52@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    _subject: "New Application: Start Today - Align Health Method",
                    _template: "table"
                })
            });

            setSubmitted(true);
            setFormData({ name: '', phone: '', email: '', confirmEmail: '' });
            setErrors({});

        } catch (error) {
            console.error("Form submission error", error);
            setSubmitted(true);
            setFormData({ name: '', phone: '', email: '', confirmEmail: '' });
            setErrors({});
        }
    };

    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{
                    marginBottom: '2rem',
                    textAlign: 'left',
                    fontSize: '2.5rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '600',
                    color: '#0F3D2E'
                }}>Contact</h2>

                {submitted ? (
                    <div style={{ textAlign: 'center', color: '#2C5F2D', padding: '1rem', width: '100%', border: '1px solid #2C5F2D', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Thank you for reaching out.</h3>
                        <p style={{ fontSize: '1.1rem' }}>I’ll get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name <span style={{ color: 'red' }}>*</span></label>
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '4px',
                                    border: errors.name ? '1px solid red' : '1px solid #ccc'
                                }}
                                placeholder="First & Last Name"
                            />
                            {errors.name && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name}</span>}
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone <span style={{ color: 'red' }}>*</span></label>
                            <PhoneInput
                                country={'ca'}
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                inputStyle={{
                                    width: '100%',
                                    height: '46px',
                                    fontSize: '16px',
                                    border: errors.phone ? '1px solid red' : '1px solid #ccc'
                                }}
                                containerStyle={{ width: '100%' }}
                            />
                            {errors.phone && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.phone}</span>}
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email <span style={{ color: 'red' }}>*</span></label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Confirm Email <span style={{ color: 'red' }}>*</span></label>
                            <input
                                required
                                type="email"
                                name="confirmEmail"
                                value={formData.confirmEmail}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '4px',
                                    border: errors.confirmEmail ? '1px solid red' : '1px solid #ccc'
                                }}
                                placeholder="Confirm Email"
                            />
                            {errors.confirmEmail && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.confirmEmail}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                            Start Today
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactSection;
