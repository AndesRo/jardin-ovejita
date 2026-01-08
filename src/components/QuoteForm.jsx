// src/components/QuoteForm.jsx (versión con EmailJS real)
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './QuoteForm.css';

const QuoteForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    succulentType: 'individual',
    quantity: '1-5',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const succulentOptions = [
    { value: 'individual', label: 'Suculentas individuales' },
    { value: 'arreglos', label: 'Arreglos decorativos' },
    { value: 'regalos', label: 'Regalos / Souvenirs' },
    { value: 'personalizado', label: 'Pedido personalizado' }
  ];

  const quantityOptions = [
    { value: '1-5', label: '1-5 unidades' },
    { value: '6-10', label: '6-10 unidades' },
    { value: '11-20', label: '11-20 unidades' },
    { value: '20+', label: 'Más de 20 unidades' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo electrónico no válido';
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Por favor ingresa tu WhatsApp';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Configuración de EmailJS (reemplaza con tus credenciales)
    const serviceId = 'YOUR_SERVICE_ID'; // De Email Services
    const templateId = 'YOUR_TEMPLATE_ID'; // De Email Templates
    const publicKey = 'YOUR_PUBLIC_KEY'; // De API Keys
    
    try {
      // Enviar email usando EmailJS
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Resetear formulario después de éxito
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        succulentType: 'individual',
        quantity: '1-5',
        message: ''
      });
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="quote-form">
      <div className="container">
        <h2 className="fade-in">Cotiza tus suculentas</h2>
        
        {isSubmitted ? (
          <div className="success-message fade-in">
            <h3>¡Gracias por tu cotización! 🌿</h3>
            <p>Te responderemos pronto por WhatsApp o correo electrónico.</p>
            <p className="success-note">
              Mientras tanto, puedes explorar nuestras redes sociales o contactarnos directamente.
            </p>
          </div>
        ) : (
          <form ref={form} className="form-container fade-in" onSubmit={handleSubmit}>
            <input type="hidden" name="form_type" value="cotizacion_suculentas" />
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Ej: María González"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Ej: maria@ejemplo.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp *</label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={errors.whatsapp ? 'error' : ''}
                  placeholder="Ej: +54 9 11 2233-4455"
                />
                {errors.whatsapp && <span className="error-message">{errors.whatsapp}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="quantity">Cantidad aproximada *</label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                >
                  {quantityOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="succulentType">Tipo de suculenta *</label>
              <select
                id="succulentType"
                name="succulentType"
                value={formData.succulentType}
                onChange={handleChange}
              >
                {succulentOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje / pedido especial</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Describe lo que necesitas: tipo de suculentas, ocasión especial, colores preferidos, etc."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar cotización'}
            </button>
            
            <p className="form-note">
              * Campos obligatorios. Te contactaremos en menos de 24 horas hábiles.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;