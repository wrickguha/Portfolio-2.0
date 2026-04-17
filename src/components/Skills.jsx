import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaReact, FaLaravel, FaPython, FaJava, FaPhp, FaDatabase
} from 'react-icons/fa';
import { 
    SiTailwindcss, SiTensorflow, SiPostgresql
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const categories = [
        {
            title: "Frontend & Backend",
            skills: [
                { name: "React JS", level: 90, icon: <FaReact /> },
                { name: "Laravel", level: 85, icon: <FaLaravel /> },
                { name: "Django / FastAPI / Flask", level: 80, icon: null },
                { name: "HTML5 / CSS3 / Tailwind", level: 95, icon: <SiTailwindcss /> }
            ]
        },
        {
            title: "Languages & Databases",
            skills: [
                { name: "Python", level: 90, icon: <FaPython /> },
                { name: "Java / C", level: 80, icon: <FaJava /> },
                { name: "PHP / SQL", level: 85, icon: <FaPhp /> },
                { name: "MySQL / PostgreSQL", level: 85, icon: <SiPostgresql /> }
            ]
        },
        {
            title: "Data Science & ML",
            skills: [
                { name: "Tensorflow & Scikit-Learn", level: 80, icon: <SiTensorflow /> },
                { name: "ANN / CNN", level: 75, icon: null },
                { name: "Supervised & Unsupervised Algos", level: 80, icon: null },
                { name: "EDA (Pandas, Numpy, Scipy)", level: 85, icon: <FaDatabase /> }
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Proficiency
                </motion.h2>

                <div className="skills-grid">
                    {categories.map((category, index) => (
                        <motion.div 
                            key={index}
                            className="glass-card skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3>{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, sIndex) => (
                                    <div key={sIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">
                                                {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                                {skill.name}
                                            </span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="progress-bar-bg">
                                            <motion.div 
                                                className="progress-bar-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div 
                    className="tools-ticker"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p><strong>Developer Tools:</strong> Git & Github, Docker, VS Code, Jupyter Notebook, Anaconda, Linux Environments, Postman, phpMyAdmin</p>
                    <p style={{marginTop: '0.5rem', fontSize: '0.9rem'}}><strong>ML/Visualization Libraries:</strong> Matplotlib, Seaborn, Numpy, Pandas, Scikit-Learn, Tensorflow, Scipy</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
