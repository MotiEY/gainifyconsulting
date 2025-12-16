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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* whisper badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Operational AI for execution teams
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            AI inside real workflows.
            <span className="block mt-2">Measured outcomes.</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600">
            Gainify helps teams implement AI where work actually happens — define success, prove impact,
            and scale safely with governance and control.
          </p>

          {/* single, quiet action (primary CTA stays in Header) */}
          <div className="mt-10 flex justify-center">
            <a
              href="#model"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all"
            >
              See the Model
            </a>
          </div>

          {/* calm reassurance line */}
          <div className="mt-6 text-xs text-slate-400">
            No platform lock-in. We work inside your existing stack.
          </div>

          {/* subtle scroll cue */}
          <div className="mt-6">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
