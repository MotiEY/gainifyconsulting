import React from 'react';
import { RocketIcon, ChartLineIcon } from './icons/Icons';

const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-white overflow-hidden">
      {/* subtle, quiet background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" aria-hidden="true" />
      <div className="absolute inset-x-0 -top-24 h-72 bg-gradient-to-r from-indigo-100/40 via-transparent to-purple-100/40 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-slate-700 bg-white ring-1 ring-slate-200">
            Gainify.ai — Strategic AI Implementation
          </div>

          <h1 className="mt-6 max-w-4xl mx-auto text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            From insight to impact.
            <span className="block mt-2 text-indigo-600">Value. Factory. Trust.</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600">
            We implement AI inside real workflows, prove ROI with a Value Ledger, then scale what works safely.
          </p>

          <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-slate-500">
            Start where value is obvious: Customer Service Ops or Delivery / Project Ops.
          </p>

          {/* quiet “micro-proof” line (no chips) */}
          <div className="mt-6 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">48–72h Reality Demo</span>
            <span className="mx-2 text-slate-300">•</span>
            Value Ledger
            <span className="mx-2 text-slate-300">•</span>
            Shadow Mode (safe parallel run)
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href="#reality-demo"
              onClick={handleLinkClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
            >
              <RocketIcon className="w-5 h-5" />
              Book Reality Demo
            </a>

            <a
              href="#pulse"
              onClick={handleLinkClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-bold text-slate-900 bg-white ring-1 ring-slate-200 hover:bg-slate-50 transition-all duration-300"
            >
              <ChartLineIcon className="w-5 h-5" />
              Take Gainify Pulse
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-400">
            No platform lock-in. We work inside your existing stack.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
