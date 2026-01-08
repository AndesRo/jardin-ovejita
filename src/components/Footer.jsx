// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-logo">Jardín de la Ovejita</h2>
            <p className="footer-tagline">Cultivamos con amor 🌱</p>
            <p className="footer-description">
              Pequeño emprendimiento familiar dedicado al cultivo y venta de suculentas.
            </p>
          </div>
          
          <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a href="#" aria-label="Facebook">
                <span className="social-icon">👍</span>
                <span>Facebook</span>
              </a>
              <a href="#" aria-label="Pinterest">
                <span className="social-icon">📌</span>
                <span>Pinterest</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Jardín de la Ovejita. Todos los derechos reservados.</p>
          <p>Desarrollado con 🌿 para amantes de las suculentas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;