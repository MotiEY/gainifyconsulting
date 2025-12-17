import React from 'react';
import { CogsIcon, RocketIcon, TargetIcon, BarChartIcon } from './icons/Icons';

type ResultCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
  kpis: string[];
};

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, desc, bullets, kpis }) => (
  <div className="bg-white p-7 rounded-2xl shadow-sm ring-1 ring-stone-200 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="flex justify-center items-center w-12 h-12 bg-stone-50 rounded-xl text-slate-900 ring-1 ring-stone-200">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-1 text-slate-600">{desc}</p>
      </div>
    </div>

    <ul className="mt-5 space-y-2 text-slate-600">
      {bullets.map((b, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
          <span>{b}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6 rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200">
      <div className="text-xs font-semibold tracking-wide text-slate-500">Typical metrics</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {kpis.map((k) => (
          <span
            key={k}
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-white ring-1 ring-stone-200 text-slate-700"
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Results: React.FC = () => {
  const resultsData: ResultCardProps[] = [
    {
      icon: <CogsIcon className="w-6 h-6" />,
      title: 'Customer Service Ops',
      desc: 'Less load. Better responses. Fewer escalations.',
      bullets: [
        'Triage + drafting inside existing tools (start in safe shadow mode).',
        'Quality improves with grounded answers (your KB, checks, and guardrails).',
      ],
      kpis: ['AHT ↓', 'Reopen rate ↓', 'Escalations ↓', 'Deflection ↑'],
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: 'Delivery / Project Ops',
      desc: 'Fewer surprises. Faster alignment.',
      bullets: [
        'Status summaries across meetings, tickets, and docs — without manual chasing.',
        'Risks and dependencies captured early from real signals.',
      ],
      kpis: ['Status effort ↓', 'Risk discovery ↑', 'Cycle time ↓', 'Surprises ↓'],
    },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: 'Repeatability',
      desc: 'A delivery system that keeps shipping improvements.',
      bullets: [
        'A clear backlog + prioritization, tied to business KPIs.',
        'A monthly cadence to release, learn, and improve adoption.',
      ],
      kpis: ['Time-to-ship ↓', 'Adoption ↑', 'Throughput ↑', 'Waste ↓'],
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: 'Trust',
      desc: 'Guardrails that increase speed — not bureaucracy.',
      bullets: [
        'Data boundaries, access rules, and evaluation where it matters.',
        'Auditability + cost control so scale doesn’t create chaos.',
      ],
      kpis: ['Policy compliance ↑', 'Rollback risk ↓', 'Confidence ↑', 'Cost control ↑'],
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Outcomes you can measure
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Practical gains in real workflows — then made repeatable and safe to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resultsData.map((result) => (
            <ResultCard key={result.title} {...result} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            The goal isn’t “AI projects” — it’s operational lift you can keep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
