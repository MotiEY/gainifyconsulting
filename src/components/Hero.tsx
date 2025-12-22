// /components/Hero.tsx
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
<div className="mt-4 text-[10px] text-slate-400">build: 123</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Strategic AI implementation
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            AI in real workflows.
            <span className="block mt-2">Measured outcomes.</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600">
            We implement AI where the work actually happens — define success, prove impact, and scale safely with governance and control.
          </p>

          {/* subtle “it’s alive” proof (not CTA, not noisy) */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-white/80 ring-1 ring-stone-200 shadow-sm backdrop-blur p-5 sm:p-6 text-left">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-bold text-slate-900">Value Ledger preview</div>
                <div className="text-xs font-semibold text-slate-500">shadow mode • illustrative</div>
              </div>

              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Workflow</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">Support triage</div>
                </div>

                <div className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Time saved</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">~2.1 min / case</div>
                </div>

                <div className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Quality</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">citations + checks</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Baseline → Assisted</span>
                  <span className="font-semibold text-slate-700">minutes → money</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-stone-100 ring-1 ring-stone-200 overflow-hidden">
                  <div className="h-full w-[62%] bg-amber-500/40" />
                </div>
              </div>
            </div>
          </div>

          {/* subtle scroll cue */}
          <div className="mt-10 flex justify-center">
            <a
              href="#model"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/75 ring-1 ring-stone-200 text-slate-600 hover:text-slate-900 hover:bg-white transition-all"
              aria-label="Scroll to next section"
              title="Scroll"
            >
              <span className="text-lg leading-none">↓</span>
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-400">No platform lock-in. We work inside your existing stack.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
