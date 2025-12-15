import React from 'react';

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
            Our North Star is stable: turn AI into a repeatable business capability — measurable value,
            shipped consistently, and safe to scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">1) Value</h3>
            <p className="mt-2 text-slate-600">
              Start with one workflow and prove ROI with simple, defensible metrics.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              <li>• Reduce time-to-handle and rework</li>
              <li>• Increase throughput without hiring</li>
              <li>• Improve quality with citations & checks</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">2) Factory</h3>
            <p className="mt-2 text-slate-600">
              Make value repeatable: a delivery cadence, a backlog, and a measurement loop.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              <li>• Monthly shipping cadence</li>
              <li>• Use-case backlog & prioritization</li>
              <li>• KPI dashboard + adoption playbook</li>
            </ul>
          </div>

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
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Under the hood, we assess readiness across 6 dimensions using{' '}
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
