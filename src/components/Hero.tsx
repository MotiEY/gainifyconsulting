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
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-stone-50 overflow-hidden">
      {/* quiet warm “light” — no tech grid, no loud gradients */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[46rem] rounded-full blur-3xl bg-amber-200/30" />
        <div className="absolute -top-24 left-[10%] h-64 w-64 rounded-full blur-3xl bg-rose-200/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* small signature – premium sites do “whisper”, not “shout” */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Value → Factory → Trust
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Operational AI that delivers
            <span className="block mt-2 text-slate-900">
              measurable outcomes.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600">
            We implement AI inside real workflows, prove ROI with a Value Ledger, then scale what works — safely.
          </p>

          {/* ONE hook line, concrete, human */}
          <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-slate-500">
            Start where impact is obvious: Customer Service Ops or Delivery / Project Ops.
          </p>

          {/* micro-proof (quiet, not chips) */}
          <div className="mt-7 text-sm text-slate-500">
            <span className="font-semibold text-slate-800">48–72h Reality Demo</span>
            <span className="mx-2 text-stone-300">•</span>
            Shadow Mode on real data
            <span className="mx-2 text-stone-300">•</span>
            Value Ledger (minutes → money)
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href="#reality-demo"
              onClick={handleLinkClick}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all"
            >
              Book Reality Demo
            </a>

            <a
              href="#pulse"
              onClick={handleLinkClick}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-slate-900 bg-white ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
            >
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
