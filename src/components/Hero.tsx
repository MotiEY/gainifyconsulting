import React from 'react';

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-semibold bg-white/80 ring-1 ring-stone-200 text-slate-700 backdrop-blur">
    {children}
  </span>
);

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
      {/* warm, quiet light */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[54rem] rounded-full blur-3xl bg-amber-200/25" />
        <div className="absolute -top-24 left-[8%] h-64 w-64 rounded-full blur-3xl bg-rose-200/15" />
        <div className="absolute bottom-[-12rem] right-[6%] h-80 w-80 rounded-full blur-3xl bg-stone-200/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: message */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Chip>Value</Chip>
              <span className="text-stone-300">→</span>
              <Chip>Factory</Chip>
              <span className="text-stone-300">→</span>
              <Chip>Trust</Chip>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
              Operational AI,
              <span className="block">measured and repeatable.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
              We implement AI inside real workflows and track impact with a simple Value Ledger
              (time saved → money). Start small, learn fast, scale safely.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <Chip>Customer Service Ops</Chip>
              <Chip>Delivery / Project Ops</Chip>
              <Chip>In-flow, inside your stack</Chip>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#reality-demo"
                onClick={handleLinkClick}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
              >
                Book Reality Demo
              </a>

              <a
                href="#pulse"
                onClick={handleLinkClick}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-slate-900 bg-white ring-1 ring-stone-200 hover:bg-stone-50 transition-all duration-300"
              >
                Take Gainify Pulse
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              No platform lock-in. We work inside your existing tools, data boundaries, and governance.
            </p>
          </div>

          {/* RIGHT: quiet “offer” card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/80 ring-1 ring-stone-200 shadow-sm backdrop-blur p-7 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Reality Demo
              </div>

              <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                48–72 hours to real signal
              </div>

              <p className="mt-3 text-slate-600 leading-relaxed">
                A safe “shadow run” on real workflow data, plus a clear Value Ledger and a practical
                next-step plan.
              </p>

              <div className="mt-6 space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600/80" />
                  <span className="text-sm">
                    <span className="font-semibold text-slate-900">Shadow mode</span> inside the flow of work
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600/80" />
                  <span className="text-sm">
                    <span className="font-semibold text-slate-900">Value Ledger</span> (minutes → money)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600/80" />
                  <span className="text-sm">
                    <span className="font-semibold text-slate-900">Scale plan</span> (what to do next, what to avoid)
                  </span>
                </div>
              </div>

              <a
                href="#reality-demo"
                onClick={handleLinkClick}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
              >
                See how it works
              </a>

              <p className="mt-3 text-xs text-slate-400 text-center">
                Quiet, practical, measurable — then we scale only what works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
