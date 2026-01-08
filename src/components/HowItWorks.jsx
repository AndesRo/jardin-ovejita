// src/components/HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Cotiza en el formulario',
      description: 'Completa nuestro formulario con los detalles de tu pedido.',
      icon: '📝'
    },
    {
      id: 2,
      title: 'Te contactamos',
      description: 'Responderemos en menos de 24 horas por WhatsApp o correo.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'Coordinamos entrega',
      description: 'Acordamos método de pago y entrega de tus suculentas.',
      icon: '🚚'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="fade-in">¿Cómo funciona?</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card fade-in">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;