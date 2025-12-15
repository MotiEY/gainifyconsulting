import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'; // repurpose to "ThreeLayers"
import Methodology from './components/Methodology';
import PulseTool from './components/PulseTool';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

// NEW
import RealityDemo from './components/RealityDemo';
import Tracks from './components/Tracks';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main>
        <section id="top">
          <Hero />
        </section>

        {/* Rename/reshape Features to be the 3 Layers */}
        <section id="layers">
          <Features />
        </section>

        <section id="reality-demo">
          <RealityDemo />
        </section>

        <section id="tracks">
          <Tracks />
        </section>

        <section id="how-we-work">
          <Methodology />
        </section>

        {/* Pulse becomes “Under the hood”, not the main hook */}
        <section id="pulse">
          <PulseTool />
        </section>

        <section id="results">
          <Results />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
