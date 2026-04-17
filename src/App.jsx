import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <ThemeProvider>
      {/* Immersive 3D scene functioning as a magnificent animated background */}
      <ThreeBackground />
      
      {/* 2D Original UI Container stacked on top naturally */}
      <div className="app-container" style={{ position: 'relative', zIndex: 1, pointerEvents: 'auto' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)' }}>
          <p>&copy; {new Date().getFullYear()} Pratik Guha. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
