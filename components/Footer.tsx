import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a href="#home" className="inline-block mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Gainify.ai
          </span>
        </a>
        <p className="text-base">
          Guiding organizations to implement AI as a core capability.
        </p>
         <p className="mt-8 text-sm text-slate-400">&copy; {new Date().getFullYear()} Gainify.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;