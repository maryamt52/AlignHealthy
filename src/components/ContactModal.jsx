import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactModal = () => {
    const { isModalOpen, closeModal } = useModal();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        confirmEmail: '',
        service: 'Fitness Training' // Default value
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    if (!isModalOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
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

        // Name Validation: At least 2 words (First Last), each 2+ chars
        const nameParts = formData.name.trim().split(/\s+/);
        if (nameParts.length < 2) {
            newErrors.name = "Please enter your full name (First & Last).";
        } else {
            const invalidPart = nameParts.find(part => part.length < 2);
            if (invalidPart) {
                newErrors.name = "Each name part must be at least 2 characters.";
            }
        }

        // Phone Validation: Check if empty or too short (rough validity check)
        // react-phone-input-2 returns the dial code + number string
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
                    phone: formData.phone, // Formatted phone string
                    email: formData.email,
                    service: formData.service,
                    _subject: "New Application: Learn How It Works - Align Health Method",
                    _template: "table"
                })
            });

            // Show success message
            setSubmitted(true);
            setFormData({ name: '', phone: '', email: '', confirmEmail: '', service: 'Fitness Training' });
            setErrors({});

        } catch (error) {
            console.error("Form submission error", error);
            // Fallback success for better user experience
            setSubmitted(true);
            setFormData({ name: '', phone: '', email: '', confirmEmail: '', service: 'Fitness Training' });
            setErrors({});
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            backdropFilter: 'blur(5px)'
        }} onClick={closeModal}>
            <div style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '8px',
                width: '90%',
                maxWidth: '500px',
                position: 'relative',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }} onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    zIndex: 10
                }}>&times;</button>

                {submitted ? (
                    <div style={{ textAlign: 'center', color: '#2C5F2D', padding: '1rem', width: '100%' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Thank you for reaching out.</h3>
                        <p style={{ fontSize: '1.1rem' }}>I’ll get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <div style={{ width: '100%' }}>
                        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.8rem' }}>Learn How It Works</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                                        height: '46px', // Match standard input height
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
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Verify Email <span style={{ color: 'red' }}>*</span></label>
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
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Service Selection <span style={{ color: 'red' }}>*</span></label>
                                <select
                                    required
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'white' }}
                                >
                                    <option value="Fitness Training">Fitness Training</option>
                                    <option value="Nutrition Coaching">Nutrition Coaching</option>
                                    <option value="Both Fitness Training & Nutrition Coaching">Both Fitness Training & Nutrition Coaching</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
                                Submit Application
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
