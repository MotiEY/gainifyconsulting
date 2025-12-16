import React from 'react';
import { TargetIcon, CogsIcon, ShieldCheckIcon } from './icons/Icons';

const Card: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}> = ({ icon, title, desc, bullets }) => (
  <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-200">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-stone-50 ring-1 ring-stone-200 flex items-center justify-center text-slate-900">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600">{desc}</p>
    <ul className="mt-5 space-y-2 text-slate-600">
      {bullets.map((b) => (
        <li key={b} className="flex items-start">
          <span className="text-amber-600 mr-3 mt-1">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      {/* keep anchors for old links + new nav */}
      <div id="about" className="scroll-mt-24" />
      <div id="model" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            A simple model. Built for execution.
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
            Start by proving value in one workflow. Then make delivery repeatable. Then scale safely.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            icon={<TargetIcon className="w-6 h-6" />}
            title="Value"
            desc="Choose one workflow. Define success. Prove impact with defensible metrics."
            bullets={['Pick a high-volume, measurable workflow', 'Set baseline + KPI targets', 'Run in “shadow mode” safely']}
          />
          <Card
            icon={<CogsIcon className="w-6 h-6" />}
            title="Factory"
            desc="Turn wins into a delivery system that ships improvements every month."
            bullets={['Backlog + prioritization', 'Monthly shipping cadence', 'Adoption loop (enablement + usage)']}
          />
          <Card
            icon={<ShieldCheckIcon className="w-6 h-6" />}
            title="Trust"
            desc="Guardrails that increase speed: quality, governance, data boundaries, and control."
            bullets={['Clear access boundaries', 'Evaluation & auditability', 'Cost and risk control']}
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Want the diagnostic behind this model?{' '}
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
