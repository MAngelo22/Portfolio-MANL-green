import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import ProgLang from './components/programLanguage';
import Contacto from './components/contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Educacion from './components/Educacion';
import Idiomas from './components/Idiomas';
import SoftSkill from './components/SoftSkill';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer'; 
import MatrixEffect from './components/MatrixEffect';
import Aditional from './components/datosinteres';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    setIsVisible(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen relative overflow-hidden">
      {/* Efecto Matrix */}
      <MatrixEffect /> {/* Efecto de letras cayendo */}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Educacion />

      {/* Languages Section */}
      <Idiomas />

      {/* Programming Languages Section */}
      <ProgLang />

      {/* Projects Section */}
      <Proyectos />

      {/* Soft Skills Section */}
      <SoftSkill />

      {/* Additional Data Section */}
      <Aditional />

      {/* Contact Section */}
      <Contacto />

      {/* Footer */}
      <Footer /> {/* Agrega el Footer aquí */}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`z-20 fixed bottom-8 right-8 bg-emerald-500 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-emerald-600 hover:scale-110 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App;
