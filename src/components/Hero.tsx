import React from 'react';
import { RocketIcon, ChartLineIcon } from './icons/Icons';

const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
       <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Transform Your Business with Strategic AI Implementation
          <span className="ml-3 text-xs font-bold text-red-600">BUILD-OK-777</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-100 mb-10">
          We guide organizations in implementing AI as a core capability and strategic engine. Our proven methodology delivers bottom-line results through culture, strategy, and technology alignment.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-indigo-200">
            <div className="flex items-center gap-2">
                <span className="font-bold text-white text-lg">Simply</span>
                <span className="text-lg">Processes</span>
            </div>
            <div className="hidden md:block text-indigo-400 text-2xl font-light">&rarr;</div>
            <div className="flex items-center gap-2">
                <span className="font-bold text-white text-lg">Amplify</span>
                <span className="text-lg">with AI</span>
            </div>
            <div className="hidden md:block text-indigo-400 text-2xl font-light">&rarr;</div>
            <div className="flex items-center gap-2">
                <span className="font-bold text-white text-lg">Gain</span>
                <span className="text-lg">Results</span>
            </div>
        </div>
        <div className="flex justify-center gap-4 flex-wrap mt-12">
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full text-base font-bold shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <RocketIcon className="w-5 h-5" />
            Start Your AI Journey
          </a>
          <a
            href="#pulse"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 ease-in-out"
          >
            <ChartLineIcon className="w-5 h-5" />
            Assess AI Maturity
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
