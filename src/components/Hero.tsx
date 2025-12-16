import React from 'react';

const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-stone-50 overflow-hidden"
    >
      {/* warm, quiet light */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[46rem] rounded-full blur-3xl bg-amber-200/25" />
        <div className="absolute -top-24 left-[8%] h-64 w-64 rounded-full blur-3xl bg-rose-200/15" />
        <div className="absolute top-24 right-[10%] h-56 w-56 rounded-full blur-3xl bg-stone-200/35" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* whisper badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Strategic AI implementation for operations
          </div>

          {/* headline: smaller, premium, very clear */}
          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            AI inside real workflows.
            <span className="block mt-2">Measured outcomes.</span>
          </h1>

          {/* short, clean subhead */}
          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600">
            We help teams deploy AI where work actually happens, measure impact with simple operational KPIs,
            and scale delivery with control and trust.
          </p>

          {/* secondary “proof” line (quiet, not shouty) */}
          <div className="mt-7 flex flex-wrap justify-center gap-2 text-sm text-slate-500">
            <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 ring-1 ring-stone-200">
              Value Ledger (minutes → money)
            </span>
            <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 ring-1 ring-stone-200">
              Shadow Mode on real data
            </span>
            <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 ring-1 ring-stone-200">
              Works in your stack
            </span>
          </div>

          {/* CTAs: no “Book Reality Demo” here */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href="#model"
              onClick={handleLinkClick}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all"
            >
              See the Model
            </a>

            <a
              href="#pulse"
              onClick={handleLinkClick}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-slate-900 bg-white ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
            >
              Explore Gainify Pulse
            </a>
          </div>

          {/* gentle scroll cue */}
          <div className="mt-8">
            <a
              href="#model"
              onClick={handleLinkClick}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Scroll to the model section"
            >
              <span>Scroll</span>
              <span className="text-slate-400">↓</span>
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-400">
            Premium, quiet delivery. No platform lock-in.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
