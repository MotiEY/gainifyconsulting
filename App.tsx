import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RealityDemo from './components/RealityDemo';
import Tracks from './components/Tracks';
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
        {/* Anchor target for header/footer logo */}
        <section id="top">
          <Hero />
        </section>

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
