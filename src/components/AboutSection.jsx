const AboutSection = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-white)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <p style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Your health is built in the days you don’t quit.</p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                        At Align Healthy, we offer personal training and nutrition coaching designed to help you turn movement and better nutrition into habits that last — without extreme rules or short-lived hype. Whether coaching happens online or in person, the goal stays the same: giving you the structure and support you need to keep showing up long enough for real change to stick.
                    </p>
                </div>

                <div style={{ textAlign: 'left' }}>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                        At Align Healthy, we help you train with purpose, improve your fitness over time, and build nutrition habits that support energy, performance, and long-term health — without hype, without clinical claims, and without promising overnight results.
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                        Personal training is tailored to your current level, goals, schedule, and stage of life — so you’re not guessing what to do or bouncing between random routines. Nutrition coaching supports better day-to-day choices and helps replace old habits with healthier ones in a way you can actually sustain.
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                        Coaching is available online or in person, depending on what fits you best. The approach is simple: structure + accountability + consistency, because real results come from what you repeat, not what you start.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default AboutSection;
