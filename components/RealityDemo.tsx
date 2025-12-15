import React from 'react';

const RealityDemo: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            48–72 Hour Reality Demo
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Not a slide deck. We run a safe shadow workflow on your real data and deliver a Value Ledger
            (minutes → money) plus a practical scale plan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">What we need</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• 200–500 recent tickets / emails export</li>
              <li>• Your KB / SOPs / macros</li>
              <li>• 60 min with an ops lead</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">What you get</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Shadow agent: triage / draft / route</li>
              <li>• Value Ledger: time, quality, deflection</li>
              <li>• Scale plan: assisted → semi-auto → scale</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">Why it matters</h3>
            <p className="mt-4 text-slate-600">
              You see measurable value before committing, and you avoid the “pilot graveyard” by designing trust and rollout from day one.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white bg-slate-900 hover:bg-slate-800"
              >
                Request the Reality Demo
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Paid, fixed-scope. No platform lock-in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealityDemo;
