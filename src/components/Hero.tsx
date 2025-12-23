// /src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-stone-50 overflow-hidden">
      {/* warm quiet light */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 h-80 w-[52rem] rounded-full blur-3xl bg-amber-200/35" />
        <div className="absolute -top-24 left-[8%] h-64 w-64 rounded-full blur-3xl bg-rose-200/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* quiet badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Strategic AI implementation
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            AI in real workflows.
            <span className="block mt-2">Measured outcomes.</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600">
            We implement AI where the work actually happens -> define success, prove impact, and scale safely with governance and control.
          </p>

          {/* subtle scroll cue */}
          <div className="mt-10 flex justify-center">
            <a
              href="#layers"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/75 ring-1 ring-stone-200 text-slate-600 hover:text-slate-900 hover:bg-white transition-all"
              aria-label="Scroll to next section"
              title="Scroll"
            >
              <span className="text-lg leading-none">↓</span>
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
