import React from 'react';
import { RocketIcon, CogsIcon, ShieldCheckIcon } from './icons/Icons';

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-semibold bg-stone-50 ring-1 ring-stone-200 text-slate-700">
    {children}
  </span>
);

type LayerCardProps = {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  chips: string[];
};

const LayerCard: React.FC<LayerCardProps> = ({ icon, eyebrow, title, desc, bullets, chips }) => (
  <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-sm ring-1 ring-stone-200 hover:shadow-md transition-all duration-300">
    <div className="flex items-start justify-between gap-6">
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{eyebrow}</div>
        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p>
      </div>

      <div className="shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-stone-50 ring-1 ring-stone-200 flex items-center justify-center text-slate-900">
          {icon}
        </div>
      </div>
    </div>

    <ul className="mt-6 space-y-2 text-slate-600">
      {bullets.map((b, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600/80" />
          <span>{b}</span>
        </li>
      ))}
    </ul>

    <div className="mt-7">
      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">What’s inside</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {chips.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      {/* Dual anchors: keep old + new links working */}
      <div id="about" className="scroll-mt-24" />
      <div id="layers" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200">
            Value <span className="mx-2 text-slate-300">→</span> Factory <span className="mx-2 text-slate-300">→</span> Trust
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            A simple model. Built for execution.
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
            We start with one workflow, prove impact, then turn it into a repeatable operating capability —
            with the guardrails to scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <LayerCard
            icon={<RocketIcon className="w-6 h-6" />}
            eyebrow="Layer 1"
            title="Value"
            desc="Pick one workflow and measure outcomes in plain business terms."
            bullets={[
              'Choose a high-volume workflow with clear ownership.',
              'Define KPIs and a simple ROI story everyone trusts.',
            ]}
            chips={['KPIs & ROI', 'Workflow clarity']}
          />

          <LayerCard
            icon={<CogsIcon className="w-6 h-6" />}
            eyebrow="Layer 2"
            title="Factory"
            desc="Make improvements ship on cadence — not as one-off experiments."
            bullets={[
              'Backlog + prioritization + monthly delivery rhythm.',
              'Adoption loop: enablement, feedback, iteration.',
            ]}
            chips={['Operating cadence', 'Adoption', 'In-flow tooling']}
          />

          <LayerCard
            icon={<ShieldCheckIcon className="w-6 h-6" />}
            eyebrow="Layer 3"
            title="Trust"
            desc="Scale safely with clear boundaries, evaluation, and accountability."
            bullets={[
              'Data boundaries, access, privacy, and cost control.',
              'Human-in-the-loop where it matters.',
            ]}
            chips={['Data readiness', 'Governance & security']}
          />
        </div>

        <div className="mt-10 text-center">
          <a
            href="#reality-demo"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
          >
            Start with the Reality Demo
          </a>
          <p className="mt-3 text-sm text-slate-500">
            Short, practical, measured. Then we scale only what works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
