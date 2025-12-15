import React from 'react';
import { RocketIcon, ChartLineIcon } from './icons/Icons';

const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* Subtle background — more “enterprise”, less “AI hype gradient” */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-slate-100 blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.35]" />
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-white/70 ring-1 ring-slate-200 text-slate-700">
          AI → measurable value → repeatable capability
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
          Make AI a repeatable business capability —
          <span className="text-indigo-600"> not a collection of pilots</span>.
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-slate-600">
          Gainify helps leadership teams operationalize AI across workflows:
          <span className="font-semibold text-slate-800"> measurable value</span>, a delivery factory that keeps shipping,
          and <span className="font-semibold text-slate-800">trust</span> you can scale.
        </p>

        {/* 3 proof chips — this is your “bypass hype” move */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="rounded-full px-5 py-2 bg-white/70 ring-1 ring-slate-200 text-slate-700">
            <span className="font-semibold text-slate-900">Value Ledger</span>: minutes → money
          </div>
          <div className="rounded-full px-5 py-2 bg-white/70 ring-1 ring-slate-200 text-slate-700">
            <span className="font-semibold text-slate-900">Shadow Mode</span>: safe parallel run
          </div>
          <div className="rounded-full px-5 py-2 bg-white/70 ring-1 ring-slate-200 text-slate-700">
            <span className="font-semibold text-slate-900">Factory</span>: monthly shipping cadence
          </div>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mt-12">
          <a
            href="#reality-demo"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full text-base font-bold shadow-sm hover:bg-slate-800 transition-all duration-300"
          >
            <RocketIcon className="w-5 h-5" />
            Book a Reality Demo
          </a>

          <a
            href="#pulse"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full text-base font-bold ring-1 ring-slate-200 hover:bg-slate-50 transition-all duration-300"
          >
            <ChartLineIcon className="w-5 h-5" />
            Take the Gainify Pulse
          </a>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Fixed-scope demo. No platform lock-in.
        </p>
      </div>
    </section>
  );
};

export default Hero;
