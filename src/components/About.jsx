import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu } from 'react-icons/fi';
import './About.css';

const About = () => {
    const defaultImg = "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Placeholder profile img

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div 
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-image-frame glass-card">
                            <img src={defaultImg} alt="Pratik Guha" className="about-image" />
                            <div className="image-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Transforming complex problems into elegant solutions</h3>
                        <p>
                            I am a Full Stack Developer from India who thrives on building production-grade applications. Whether it's architecting scalable e-commerce platforms, integrating complex payment gateways, or exploring the fascinating realms of AI-powered tools, I am dedicated to writing clean, maintainable code.
                        </p>
                        <p>
                            My approach combining modern frontend frameworks like React with robust backends in Laravel and Java allows me to engineer seamless experiences that deliver real-world business value.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight">
                                <div className="highlight-icon glass"><FiCode /></div>
                                <span>Clean Architecture</span>
                            </div>
                            <div className="highlight">
                                <div className="highlight-icon glass"><FiServer /></div>
                                <span>Scalable Systems</span>
                            </div>
                            <div className="highlight">
                                <div className="highlight-icon glass"><FiCpu /></div>
                                <span>AI Integration</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
