import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu } from 'react-icons/fi';
import './About.css';
const About = () => {
    const defaultImg = "/images/profile.jpg"; // Placeholder profile img

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
                        <h3>I’m a full-stack developer who enjoys turning complex ideas into clean, scalable, and real-world applications.</h3>
                        <p>
                            Currently, I’m building production-grade platforms like <strong>Winkelkart</strong>, where I work on multi-vendor architecture, payment integrations, and logistics systems, and <strong>NanoIce</strong>, where I focus on crafting high-conversion, visually engaging e-commerce experiences.
                        </p>
                        <p>
                            My approach blends modern frontend technologies like React with powerful backend systems using Laravel, Java, and Python frameworks such as Django and FastAPI. Beyond development, I actively explore machine learning and AI, working with tools like TensorFlow and Scikit-learn to build intelligent, data-driven solutions.
                        </p>
                        <p>
                            I care deeply about writing clean, maintainable code and designing systems that don’t just work — but scale.
                        </p>
                        <p>
                            Whether it’s engineering a seamless user experience, optimizing backend performance, or integrating complex third-party services, I focus on building products that deliver real impact.
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
