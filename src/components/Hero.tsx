import React from 'react';

const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-stone-50 overflow-hidden"
    >
      {/* warm quiet light (background only) */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-72 w-[46rem] rounded-full blur-3xl bg-amber-200/25" />
        <div className="absolute -top-20 left-[12%] h-56 w-56 rounded-full blur-3xl bg-rose-200/20" />
        <div className="absolute top-24 right-[10%] h-48 w-48 rounded-full blur-3xl bg-stone-200/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* small whisper badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Strategic AI Implementation
          </div>

          {/* headline: shorter, calmer, more premium */}
          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            AI in real workflows.
            <span className="block mt-2">Measured outcomes.</span>
          </h1>

          {/* subhead: fewer words, clearer */}
          <p className="mt-5 text-base md:text-lg text-slate-600">
            We implement AI where work happens, prove impact with simple metrics,
            then scale with trust and control.
          </p>

          {/* no big CTA buttons here (header already has the main CTA) */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm font-semibold">
            <a
              href="#model"
              onClick={handleLinkClick}
              className="text-slate-900 hover:text-slate-900/80 underline decoration-stone-300 underline-offset-4"
            >
              See the model
            </a>
            <a
              href="#pulse"
              onClick={handleLinkClick}
              className="text-slate-700 hover:text-slate-900 underline decoration-stone-300 underline-offset-4"
            >
              Explore Gainify Pulse
            </a>
          </div>

          {/* subtle scroll cue */}
          <div className="mt-10 flex justify-center">
            <a
              href="#model"
              onClick={handleLinkClick}
              aria-label="Scroll to model"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
            >
              Scroll
              <span className="inline-block h-5 w-5 rounded-full bg-white/70 ring-1 ring-stone-200 group-hover:bg-white transition">
                <span className="block h-full w-full leading-5 text-center">↓</span>
              </span>
            </a>
          </div>

          <div className="mt-5 text-xs text-slate-400">
            No platform lock-in. We work inside your existing stack.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
