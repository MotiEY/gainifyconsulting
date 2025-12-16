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
      {/* Local keyframes: no Tailwind config needed */}
      <style>{`
        @keyframes orbFloat {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(0, -10px, 0) scale(1.01); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes orbSpin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-30%); opacity: 0.25; }
          50%  { opacity: 0.45; }
          100% { transform: translateX(30%); opacity: 0.25; }
        }
      `}</style>

      {/* warm, quiet ambient light */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[46rem] rounded-full blur-3xl bg-amber-200/20" />
        <div className="absolute -top-24 left-[8%] h-64 w-64 rounded-full blur-3xl bg-rose-200/12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout: text + orb */}
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Text */}
          <div className="md:col-span-7">
            <div className="max-w-2xl">
              {/* whisper badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                Operational AI for execution teams
              </div>

              <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                AI inside real workflows.
                <span className="block mt-2">Measured outcomes.</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-slate-600">
                Gainify helps teams implement AI where work actually happens — define success, prove impact,
                and scale safely with governance and control.
              </p>

              {/* calm reassurance */}
              <p className="mt-6 text-xs text-slate-400">
                No platform lock-in. We work inside your existing stack.
              </p>

              {/* subtle scroll cue (quiet, not a CTA) */}
              <div className="mt-8">
                <a
                  href="#model"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="Scroll to the model section"
                >
                  <span>Explore how it works</span>
                  <span className="text-slate-400">↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Orb */}
          <div className="md:col-span-5 relative">
            <div
              aria-hidden="true"
              className="relative mx-auto w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px]"
              style={{ animation: 'orbFloat 10s ease-in-out infinite' }}
            >
              {/* soft outer glow */}
              <div className="absolute inset-0 rounded-full blur-3xl bg-amber-200/25" />

              {/* “3D” sphere */}
              <div className="absolute inset-6 rounded-full overflow-hidden ring-1 ring-stone-200 bg-white/40 backdrop-blur">
                {/* base gradients */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.85), rgba(255,255,255,0) 35%),' +
                      'radial-gradient(circle at 70% 75%, rgba(251,191,36,0.28), rgba(244,63,94,0.08) 55%, rgba(15,23,42,0.05) 100%)',
                  }}
                />

                {/* slow rotating inner tint */}
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      'conic-gradient(from 180deg, rgba(251,191,36,0.22), rgba(244,63,94,0.10), rgba(251,191,36,0.22))',
                    animation: 'orbSpin 22s linear infinite',
                  }}
                />

                {/* gentle highlight sweep */}
                <div
                  className="absolute -inset-10 rotate-12"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.45), rgba(255,255,255,0))',
                    filter: 'blur(10px)',
                    animation: 'shimmer 8s ease-in-out infinite',
                  }}
                />

                {/* vignette for depth */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.08) 100%)',
                  }}
                />
              </div>
            </div>

            {/* keep it quiet on mobile: push behind a bit */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 left-1/2 top-1/2 hidden sm:block -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full blur-3xl bg-rose-200/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
