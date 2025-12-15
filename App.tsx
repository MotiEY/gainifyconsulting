import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'; // we’ll refactor this to “3 Layers”
import Methodology from './components/Methodology';
import PulseTool from './components/PulseTool';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

// New sections (you’ll add these files)
import RealityDemo from './components/RealityDemo';
import Tracks from './components/Tracks';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      <Header />

      <main>
        {/* Anchor target for header logo */}
        <section id="top">
          <Hero />
        </section>

        {/* 3 Layers section (Value / Factory / Trust) */}
        <section id="layers">
          <Features />
        </section>

        {/* 48–72h Reality Demo conversion section */}
        <section id="reality-demo">
          <RealityDemo />
        </section>

        {/* Two tracks: Customer Service Ops / Delivery Ops */}
        <section id="tracks">
          <Tracks />
        </section>

        {/* 3-station methodology: Demo → Sprint → Factory */}
        <section id="how-we-work">
          <Methodology />
        </section>

        {/* Pulse is “under the hood” */}
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
