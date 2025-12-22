// /App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Methodology from './components/Methodology';
import PulseTool from './components/PulseTool';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
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
