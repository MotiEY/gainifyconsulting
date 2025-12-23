import React from 'react';

const PulseOutputTeaser: React.FC = () => {
  const deliverables = [
    {
      title: '1-page Decision Brief',
      desc: 'Top 3 bets, what to stop, owners, and KPI targets.',
    },
    {
      title: 'Value Ledger',
      desc: 'Baseline → target, measurement cadence, minutes → money.',
    },
    {
      title: '30-day Execution Plan',
      desc: 'Milestones, risks, dependencies, and shipping cadence.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            What you get after Pulse
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
            Not a survey. A decision engine that produces artifacts you can run with.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Left: deliverables */}
          <div className="rounded-2xl bg-stone-50 ring-1 ring-stone-200 p-7">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Deliverables (sample)
            </div>

            <div className="mt-5 space-y-4">
              {deliverables.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl bg-white ring-1 ring-stone-200 p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">{d.title}</div>
                      <div className="mt-1 text-sm text-slate-600">{d.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiet link (optional) */}
            <div className="mt-6 text-sm text-slate-500">
              <a href="#contact" className="font-semibold text-slate-900 hover:underline">
                Want a sample output tailored to your domain?
              </a>
            </div>
          </div>

          {/* Right: mini report snapshot */}
          <div className="rounded-2xl bg-white ring-1 ring-stone-200 p-7 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pulse Insight Brief
                </div>
                <div className="mt-1 text-lg font-extrabold text-slate-900">
                  Executive snapshot (illustrative)
                </div>
              </div>

              {/* subtle brand stripe */}
              <div className="h-2 w-20 rounded-full bg-amber-500/30 ring-1 ring-amber-200" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Top bet
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Support triage
                </div>
                <div className="mt-1 text-xs text-slate-600">Owner: CS Ops</div>
              </div>

              <div className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  KPI target
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  AHT ↓, Reopen ↓
                </div>
                <div className="mt-1 text-xs text-slate-600">Measured weekly</div>
              </div>

              <div className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  First 30 days
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Shadow → Assisted
                </div>
                <div className="mt-1 text-xs text-slate-600">Guardrails on</div>
              </div>
            </div>

            {/* tiny “value ledger” row */}
            <div className="mt-6 rounded-2xl bg-stone-50 ring-1 ring-stone-200 p-5">
              <div className="flex items-center justify-between text-sm">
                <div className="font-bold text-slate-900">Value Ledger</div>
                <div className="text-xs font-semibold text-slate-500">minutes → money</div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Baseline</span>
                  <span className="font-semibold text-slate-700">Target</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white ring-1 ring-stone-200 overflow-hidden">
                  <div className="h-full w-[62%] bg-amber-500/35" />
                </div>
                <div className="mt-3 text-xs text-slate-600">
                  Example: ~2.1 min saved per case (shadow-mode estimate)
                </div>
              </div>
            </div>

            <div className="mt-5 text-xs text-slate-400">
              Note: This is a visual sample to show the artifact style — your version is built on your workflow and data.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseOutputTeaser;
