// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      title: 'WhatsApp',
      description: 'Responde en minutos',
      action: 'Escribir ahora',
      link: 'https://wa.me/5491122334455?text=Hola%20Jardín%20de%20la%20Ovejita,%20me%20interesan%20sus%20suculentas',
      icon: '💬',
      color: '#25D366'
    },
    {
      id: 2,
      title: 'Correo',
      description: 'jardinovejita@gmail.com',
      action: 'Enviar correo',
      link: 'mailto:jardinovejita@gmail.com',
      icon: '📧',
      color: '#EA4335'
    },
    {
      id: 3,
      title: 'Llamada',
      description: '+54 9 11 2233-4455',
      action: 'Llamar ahora',
      link: 'tel:+5491122334455',
      icon: '📞',
      color: '#34A853'
    }
  ];

  return (
    <section className="contact">
      <div className="container">
        <h2 className="fade-in">Contacto directo</h2>
        <p className="contact-subtitle fade-in">
          ¿Prefieres contactarnos directamente? Estamos aquí para ayudarte.
        </p>
        
        <div className="contact-grid">
          {contactMethods.map((method) => (
            <div key={method.id} className="contact-card fade-in">
              <div 
                className="contact-icon"
                style={{ backgroundColor: `${method.color}20`, color: method.color }}
              >
                {method.icon}
              </div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
              <a 
                href={method.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn contact-btn"
                style={{ backgroundColor: method.color }}
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;