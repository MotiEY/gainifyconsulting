import React from 'react';
import { CogsIcon, RocketIcon, TargetIcon, BarChartIcon } from './icons/Icons';

interface ResultCardProps {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  kpis: string[];
}

const KPIChip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-white ring-1 ring-stone-200 text-slate-700">
    {children}
  </span>
);

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, bullets, kpis }) => (
  <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm ring-1 ring-stone-200 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-stone-50 ring-1 ring-stone-200 flex items-center justify-center text-slate-900">
        {icon}
      </div>
      <h3 className="text-xl font-extrabold tracking-tight text-slate-900">{title}</h3>
    </div>

    <ul className="mt-5 space-y-2 text-slate-600">
      {bullets.map((b, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600/80" />
          <span>{b}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6 rounded-xl bg-stone-50 p-4 ring-1 ring-stone-200">
      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Example KPIs</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {kpis.map((k) => (
          <KPIChip key={k}>{k}</KPIChip>
        ))}
      </div>
    </div>
  </div>
);

const Results: React.FC = () => {
  const resultsData: ResultCardProps[] = [
    {
      icon: <CogsIcon className="w-6 h-6" />,
      title: 'Customer Service operations',
      bullets: [
        'Faster triage + better drafts inside the existing workflow.',
        'Higher quality answers grounded in trusted internal sources.',
      ],
      kpis: ['AHT ↓', 'Reopen rate ↓', 'Escalations ↓', 'Backlog ↓'],
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: 'Delivery / Project operations',
      bullets: [
        'Less manual status reporting — more signal, fewer surprises.',
        'Risks and dependencies surfaced earlier, consistently.',
      ],
      kpis: ['Status effort ↓', 'Cycle time ↓', 'Risk discovery ↑', 'Escalations ↓'],
    },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: 'Repeatability (Factory)',
      bullets: [
        'A steady shipping cadence for AI improvements.',
        'A measured loop: backlog → build → adoption → KPI review.',
      ],
      kpis: ['Time-to-ship ↓', 'Adoption ↑', 'Cost control ↑', 'Throughput ↑'],
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: 'Trust at scale',
      bullets: [
        'Clear boundaries: data access, privacy, and evaluation.',
        'Auditability and accountability — without slowing delivery.',
      ],
      kpis: ['Policy compliance ↑', 'Rollback risk ↓', 'Confidence ↑', 'Waste ↓'],
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Outcomes you can measure
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Clear wins in the first workflow — then a repeatable system to keep improving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resultsData.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#reality-demo"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
          >
            Book Reality Demo
          </a>
          <p className="mt-3 text-sm text-slate-500">A focused starting point. Practical, fast, and grounded.</p>
        </div>
      </div>
    </section>
  );
};

export default Results;
