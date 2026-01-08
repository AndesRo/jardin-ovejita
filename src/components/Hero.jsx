// src/components/Hero.jsx
import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <h1>Suculentas llenas de vida para tu hogar y regalos especiales</h1>
          <p className="hero-subtitle">
            Cotiza fácilmente y te respondemos por WhatsApp o correo
          </p>
          <div className="hero-buttons">
            <a href="#quote-form" className="btn btn-primary">Cotizar suculentas</a>
            <a 
              href="https://wa.me/5491122334455?text=Hola%20Jardín%20de%20la%20Ovejita,%20me%20interesan%20sus%20suculentas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="image-placeholder">
            {/* En un proyecto real, aquí iría una imagen de suculentas */}
            <div className="image-content">
              <span>🌵</span>
              <span>🌱</span>
              <span>🪴</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;