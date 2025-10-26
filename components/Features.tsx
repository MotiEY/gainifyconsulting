
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            <span className="relative">
              Who We Are
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  Gainify.ai
                  </span>
              </div>
              <p className="text-center text-lg md:text-xl text-slate-600 leading-relaxed">
              Gainify.ai guides organizations in implementing AI as a core capability and strategic engine. Using our tool, Gainify Pulse, we connect business leadership, technology, and culture, and our methodology delivers bottom-line results.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
