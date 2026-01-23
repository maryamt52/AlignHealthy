import React from 'react';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div id="home">
            <Hero />
            <IntroSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
        </div>
    );
};

export default Home;
