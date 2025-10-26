
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Methodology from './components/Methodology';
import PulseTool from './components/PulseTool';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
        <div className="w-16 h-16 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <Methodology />
        <PulseTool />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
