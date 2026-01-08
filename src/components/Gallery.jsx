// src/components/Gallery.jsx
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const succulentTypes = [
    {
      id: 1,
      title: 'Suculentas individuales',
      description: 'Hermosas suculentas de diversas especies, perfectas para coleccionar.',
      emoji: '🌵'
    },
    {
      id: 2,
      title: 'Arreglos decorativos',
      description: 'Combinaciones artesanales para decorar cualquier espacio.',
      emoji: '🪴'
    },
    {
      id: 3,
      title: 'Regalos / Souvenirs',
      description: 'Ideales para eventos especiales, con empaque personalizado.',
      emoji: '🎁'
    }
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="fade-in">Nuestras Suculentas</h2>
        <p className="gallery-info fade-in">
          Trabajamos por pedido y personalizamos cada cotización según tus necesidades.
          ¡Todas nuestras plantas son cultivadas con amor!
        </p>
        
        <div className="gallery-grid">
          {succulentTypes.map((type, index) => (
            <div 
              key={type.id} 
              className="gallery-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-emoji">{type.emoji}</div>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;