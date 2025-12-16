
import React from 'react';

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-white ring-1 ring-slate-200 text-slate-700">
    {children}
  </span>
);

const Features: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      {/* Dual anchors: keep old + new links working */}
      <div id="about" className="scroll-mt-24" />
      <div id="layers" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Value → Factory → Trust
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
            We sell the 3-layer outcome. The 6 domains are the engine underneath — visible as “what’s inside” each layer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Layer 1 */}
          <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">1) Value</h3>
            <p className="mt-2 text-slate-600">
              Pick one workflow and prove ROI with simple, defensible metrics.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              <li>• Reduce time-to-handle and rework</li>
              <li>• Increase throughput without hiring</li>
              <li>• Improve quality with citations & checks</li>
            </ul>

            <div className="mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Under the hood
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {/* 6-domain mapping (Value layer) */}
                <Chip>Strategy & KPIs</Chip>
                <Chip>Process clarity</Chip>
              </div>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">2) Factory</h3>
            <p className="mt-2 text-slate-600">
              Make value repeatable: delivery cadence, backlog, and adoption loop.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              <li>• Monthly shipping cadence</li>
              <li>• Use-case backlog & prioritization</li>
              <li>• KPI dashboard + adoption playbook</li>
            </ul>

            <div className="mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Under the hood
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {/* 6-domain mapping (Factory layer) */}
                <Chip>Operating model</Chip>
                <Chip>Adoption enablement</Chip>
                <Chip>Tooling in-flow</Chip>
              </div>
            </div>
          </div>

          {/* Layer 3 */}
          <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">3) Trust</h3>
            <p className="mt-2 text-slate-600">
              Trust is speed: guardrails that prevent rollbacks and enable scale.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              <li>• Data boundaries & governance</li>
              <li>• Human-in-the-loop where needed</li>
              <li>• Evaluation, auditability, cost control</li>
            </ul>

            <div className="mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Under the hood
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {/* 6-domain mapping (Trust layer) */}
                <Chip>Data readiness</Chip>
                <Chip>Governance & security</Chip>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Want the full 6-domain diagnostic? Use{' '}
            <a href="#pulse" className="font-semibold text-slate-900 hover:underline">
              Gainify Pulse
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
