import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
    const timeline = [
        {
            id: 1,
            type: "work",
            title: "Full Stack Developer",
            company: "SRD TECHNOLOGIES INDIA",
            date: "Present",
            description: "Developing and maintaining Winkelkart, a production-level e-commerce platform built with PHP (Laravel), contributing across both frontend and backend layers. Implemented core features including product management, cart system, order processing, and payment gateway integration. Designed RESTful APIs and backend modules using Laravel MVC architecture and managed MySQL databases along with deployment/server configuration.",
            icon: <FiBriefcase />
        },
        {
            id: 2,
            type: "work",
            title: "Freelance Developer",
            company: "Self-Employed",
            date: "2023 - Present",
            description: "Delivering clean, scalable, and responsive web applications for various clients. Successfully engineering solutions merging modern frontend React components with secure backend environments.",
            icon: <FiBriefcase />
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                <div className="timeline">
                    {timeline.map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-content glass-card">
                                <span className="timeline-date">{item.date}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <h4 className="timeline-company">{item.company}</h4>
                                <p className="timeline-desc">{item.description}</p>
                            </div>
                            <div className="timeline-icon">
                                {item.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
