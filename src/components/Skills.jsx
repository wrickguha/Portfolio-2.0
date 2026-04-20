import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaReact, FaLaravel, FaPython, FaJava, FaPhp, FaDatabase, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaLinux, FaBrain, FaChartPie, FaNetworkWired, FaSearch, FaChartLine, FaCode
} from 'react-icons/fa';
import { 
    SiTailwindcss, SiTensorflow, SiPostgresql, SiNextdotjs, SiTypescript, SiC, SiMysql, SiBootstrap, SiFlask, SiFastapi, SiDjango, SiJupyter, SiAnaconda, SiPostman, SiPhpmyadmin, SiScikitlearn, SiNumpy, SiPandas, SiScipy
} from 'react-icons/si';
import './Skills.css';

const technologies = [
    // Programming Languages
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "PHP", icon: <FaPhp color="#777BB4" /> },
    { name: "C", icon: <SiC color="#A8B9CC" /> },
    { name: "SQL", icon: <FaDatabase color="#f29111" /> },

    // Frontend
    { name: "React JS", icon: <FaReact color="#61DAFB" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },

    // Backend Frameworks
    { name: "Flask", icon: <SiFlask color="#ffffff" /> },
    { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },

    // Databases
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },

    // Developer Tools
    { name: "Git & GitHub", icon: <FaGithub color="#ffffff" /> },
    { name: "Docker", icon: <FaDocker color="#2496ED" /> },
    { name: "VS Code", icon: <FaCode color="#007ACC" /> },
    { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
    { name: "Anaconda", icon: <SiAnaconda color="#44A833" /> },
    { name: "Linux", icon: <FaLinux color="#FCC624" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "phpMyAdmin", icon: <SiPhpmyadmin color="#6C78AF" /> },

    // Data Science Concepts
    { name: "Data Visualisation", icon: <FaChartPie color="#FFD700" /> },
    { name: "Supervised Learning", icon: <FaBrain color="#FF69B4" /> },
    { name: "Unsupervised Learning", icon: <FaBrain color="#FF69B4" /> },
    { name: "ANN / CNN", icon: <FaNetworkWired color="#4fc08d" /> },
    { name: "EDA", icon: <FaSearch color="#61dafb" /> },

    // ML / Data Science Libraries
    { name: "Scikit-Learn", icon: <SiScikitlearn color="#F7931E" /> },
    { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
    { name: "Numpy", icon: <SiNumpy color="#013243" /> },
    { name: "Pandas", icon: <SiPandas color="#150458" /> },
    { name: "Scipy", icon: <SiScipy color="#8CAAEE" /> },
    { name: "Matplotlib", icon: <FaChartLine color="#11557c" /> },
    { name: "Seaborn", icon: <FaChartLine color="#4c72b0" /> }
];

// Split the tech items into two different tracks for the marquee
const track1 = technologies.slice(0, Math.ceil(technologies.length / 2));
const track2 = technologies.slice(Math.ceil(technologies.length / 2));

const track1Extended = [...track1, ...track2];
const track2Extended = [...track2, ...track1];

const MarqueeTrack = ({ items, reverse = false, speed = 40 }) => {
    // Duplicate the array so it loops infinitely across the screen width.
    const loopItems = [...items, ...items];
    
    return (
        <div className="marquee-container">
            <motion.div 
                className="marquee-track"
                initial={{ x: reverse ? "-50%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-50%" }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {loopItems.map((item, index) => (
                    <div key={index} className="tech-pill">
                        <div className="tech-pill-bg"></div>
                        <span className="tech-icon">{item.icon}</span>
                        <span className="tech-name">{item.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="unified-skills-section">
            <div className="skills-background"></div>

            <div className="skills-content">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 className="premium-title">Tech Stack</h2>
                    <p className="tech-subtitle">Continuously expanding my engineering toolkit</p>
                </motion.div>

                <div className="marquee-wrapper">
                    {/* Top track moving left */}
                    <MarqueeTrack items={track1Extended} speed={65} />
                    
                    {/* Bottom track moving right */}
                    <MarqueeTrack items={track2Extended} reverse={true} speed={75} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
