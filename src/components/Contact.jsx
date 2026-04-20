import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin,FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call...
        setStatus('Sending...');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            // Remove the auto-hide so the user can see and manually close the popup
            // setTimeout(() => setStatus(''), 3000); 
        }, 1500);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let’s Work Together
                </motion.h2>

                <div className="contact-content">
                    <motion.div 
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Let's build something amazing together.</h3>
                        <p className="contact-subtitle">
                            I'm currently available for freelance projects and full-time opportunities. Drop a message to say hi or discuss a potential project!
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon glass"><FiMail /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>wrickguha2003@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon glass"><FiPhone /></div>
                                <div>
                                    <h4>Phone Number</h4>
                                    <p>+91 8145876884</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon glass"><FiMapPin /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>India (Open to Remote)</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/wrickguha" className="social-link glass" aria-label="GitHub"><FiGithub /></a>
                            <a href="https://www.linkedin.com/in/pratik-guha-54195b214/" className="social-link glass" aria-label="LinkedIn"><FiLinkedin /></a>
                        </div>
                    </motion.div>

                    <motion.form 
                        className="contact-form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="form-control" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="form-control" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                className="form-control" 
                                rows="5" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                                placeholder="I have a project for you..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            {status === 'success' ? 'Message Sent!' : status === 'Sending...' ? 'Sending...' : <><FiSend /> Send Message</>}
                        </button>
                    </motion.form>
                </div>
            </div>

            {/* Success Popup Modal */}
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div 
                        className="popup-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="popup-content glass-card"
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <div className="popup-icon">
                                <FiCheckCircle color="#10b981" />
                            </div>
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out, I will get back to you closely.</p>
                            <button 
                                className="btn btn-primary" 
                                style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }} 
                                onClick={() => setStatus('')}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
