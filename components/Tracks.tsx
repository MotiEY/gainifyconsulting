import React from 'react';

const Tracks: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Where we start
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Two focused tracks. Same engine: Value → Factory → Trust.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">Customer Service Ops</h3>
            <p className="mt-2 text-slate-600">
              Fast ROI, high volume, safe to run in shadow mode.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              <li>• Triage & routing</li>
              <li>• Draft responses with KB citations</li>
              <li>• QA & policy checks</li>
              <li>• Deflection + knowledge gap detection</li>
            </ul>
          </div>

          <div className="rounded-2xl p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">Delivery / Project Ops</h3>
            <p className="mt-2 text-slate-600">
              Harder, higher value: reduce coordination tax and prevent surprises.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              <li>• Status → Truth summaries</li>
              <li>• RAID extraction + follow-ups</li>
              <li>• Dependency & risk radar</li>
              <li>• Change / scope drift detection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
