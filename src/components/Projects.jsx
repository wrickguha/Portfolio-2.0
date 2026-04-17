import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Paella Experience Valencia",
            description: "A full-stack restaurant booking platform ensuring seamless reservations, integrated administrative panels, and bilingual support. Built to enhance emotional engagement without compromising functionality.",
            tech: ["React", "Laravel", "MySQL", "Tailwind"],
            image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            live: "https://magenta-newt-861501.hostingersite.com/",
            github: "#"
        },
        {
            id: 2,
            title: "Winkelkart",
            description: "A comprehensive production-level e-commerce platform. Features include complex product management, cart systems, order processing, and highly secure payment gateway integrations.",
            tech: ["PHP (Laravel)", "MySQL", "MVC Architecture"],
            image: "/images/winkelkart.png",
            live: "https://winkelkart.com/",
            github: "#"
        },
        {
            id: 3,
            title: "Nano-Ice",
            description: "A modern, highly responsive corporate website focusing on premium performance and a stunning user experience to highlight industrial cutting-edge solutions.",
            tech: ["React", "Frontend Design", "UI/UX Optimization"],
            image: "/images/image.png",
            live: "https://nano-ice.com/",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.id} 
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="glass project-link" aria-label="GitHub">
                                        <FiGithub />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="glass project-link" aria-label="Live Demo">
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, tIndex) => (
                                        <span key={tIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
