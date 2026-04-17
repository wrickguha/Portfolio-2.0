import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Hire Me', id: 'contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'nav-scrolled glass' : ''}`}>
            <div className="container nav-container">
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    PG<span className="logo-dot">.</span>
                </div>

                {/* Desktop Menu */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <button 
                            key={link.id} 
                            onClick={() => scrollToSection(link.id)}
                            className="nav-item"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle">
                    <button onClick={toggleTheme} className="theme-toggle mobile-theme-btn" aria-label="Toggle Theme">
                        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                    </button>
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                        className="menu-btn"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu glass-card ${mobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <button 
                        key={link.id} 
                        onClick={() => scrollToSection(link.id)}
                        className="mobile-nav-item"
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
