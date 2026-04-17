import React from 'react';
import { Scroll } from '@react-three/drei';

const UIOverlay = () => {
    return (
        <Scroll html style={{ width: '100%', height: '100%' }}>
            
            {/* HERO SECTION OVERLAY (z-index 0 conceptually) */}
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '0 10vw' }}>
                <div style={{ pointerEvents: 'none' }}>
                    <h2 style={{ color: '#3b82f6', fontSize: '1.5rem', marginBottom: '1rem' }}>Hi, my name is</h2>
                    <h1 style={{ fontSize: '5rem', fontWeight: '800', margin: 0, textShadow: '0 0 20px rgba(59,130,246,0.3)' }}>Pratik Guha.</h1>
                    <h2 style={{ fontSize: '2.5rem', color: '#cbd5e1', marginBottom: '2rem' }}>I build scalable systems.</h2>
                    <p style={{ maxWidth: '400px', fontSize: '1.2rem', color: '#94a3b8', lineHeight: '1.6' }}>
                        Scroll down to journey through my technical proficiencies, work experience, and interactive 3D projects.
                    </p>
                </div>
            </div>

            {/* SKILLS OVERLAY */}
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 10vw' }}>
                <div className="glass-panel" style={{ width: '350px' }}>
                    <h3 style={{ fontSize: '2rem', color: '#8b5cf6', marginBottom: '1rem' }}>Technical Proficiency</h3>
                    <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Hover over the floating orbs in 3D to see my core stack.</p>
                    <ul style={{ listStyle: 'none', color: '#94a3b8', lineHeight: '1.8' }}>
                        <li><strong>Frontend:</strong> React, Tailwind, HTML5/CSS3</li>
                        <li><strong>Backend:</strong> Laravel, Django, FastAPI</li>
                        <li><strong>Data / ML:</strong> TensorFlow, Pandas</li>
                    </ul>
                </div>
            </div>

            {/* PROJECTS OVERLAY */}
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 10vw' }}>
                <div style={{ pointerEvents: 'none', maxWidth: '400px' }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: '800', color: '#10b981', textShadow: '0 0 20px rgba(16,185,129,0.3)' }}>Interactive Showcase</h2>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginTop: '1rem' }}>
                        Click on the 3D structures in the scene to open project details.
                    </p>
                </div>
            </div>

            {/* CONTACT OVERLAY */}
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
                <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', color: '#3b82f6', marginBottom: '1.5rem' }}>Hire Me</h2>
                    <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '2rem' }}>
                        I'm currently available for freelance projects and full-time opportunities. Handcrafted with React Three Fiber.
                    </p>
                    <a href="mailto:hire.pratikguha@example.com" style={{ 
                        display: 'inline-block',
                        padding: '1rem 2rem', 
                        backgroundColor: '#3b82f6', 
                        color: 'white', 
                        textDecoration: 'none',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                    }}>Send Message</a>
                </div>
            </div>

        </Scroll>
    );
}

export default UIOverlay;
