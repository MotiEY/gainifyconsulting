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
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-stone-50 overflow-hidden"
    >
      {/* warm quiet light */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[46rem] rounded-full blur-3xl bg-amber-200/30" />
        <div className="absolute -top-24 left-[10%] h-64 w-64 rounded-full blur-3xl bg-rose-200/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Operational AI, built for execution
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            AI in real workflows.
            <span className="block mt-2">Measured outcomes.</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600">
            We implement AI where the work actually happens, prove impact with simple metrics,
            and scale what works with trust and control.
          </p>

          {/* Single CTA only */}
          <div className="mt-10 flex justify-center">
            <a
              href="#reality-demo"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all"
            >
              Book Reality Demo
            </a>
          </div>

          {/* Subtle scroll cue (not a CTA) */}
          <div className="mt-10">
            <a
              href="#model"
              onClick={handleLinkClick}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Scroll to next section"
            >
              <span className="opacity-70">Scroll</span>
              <span className="text-base leading-none">↓</span>
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
