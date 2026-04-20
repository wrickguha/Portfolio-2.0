import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const texts = [
        "Full Stack Developer.",
        "AI/ML Enthusiast.",
        "Problem Solver."
    ];
    
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            const fullText = texts[index % texts.length];
            
            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                if (currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setIndex(index + 1);
                }
            }
        }, isDeleting ? 50 : 100);
        
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, index]);

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="hero-greeting">Hi, my name is</h2>
                    <h1 className="hero-name">Pratik Guha.</h1>
                    <h2 className="hero-role">
                        I am a <span className="typewriter">{currentText}<span className="cursor">|</span></span>
                    </h2>
                    <p className="hero-desc">
                        I build production-grade applications including scalable systems, AI-powered tools, and e-commerce platforms. Let's build something exceptional together.
                    </p>
                    <div className="hero-cta">
                        <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View My Work <FiArrowRight className="btn-icon" />
                        </button>
                        <a href="/public/pdf/Pratik_Full_Stack_Developer.pdf" className="btn btn-outline" download>
                            Download Resume <FiDownload className="btn-icon" />
                        </a>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="hero-visuals"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="blob-container">
                        <div className="blob blob-1"></div>
                        <div className="blob blob-2"></div>
                        <div className="glass-card hero-glass-card">
                            <div className="code-snippet">
                                <p><span className="keyword">const</span> <span className="variable">developer</span> = {'{'}</p>
                                <p className="indent">name: <span className="string">'Pratik Guha'</span>,</p>
                                <p className="indent">skills: [<span className="string">'React'</span>, <span className="string">'Laravel'</span>, <span className="string">'AI/ML'</span>],</p>
                                <p className="indent">passionate: <span className="boolean">true</span></p>
                                <p>{'}'};</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
