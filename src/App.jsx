// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Gallery />
      <HowItWorks />
      <QuoteForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;