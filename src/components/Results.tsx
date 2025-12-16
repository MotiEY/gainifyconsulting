import React from 'react';
import { CogsIcon, RocketIcon, TargetIcon, BarChartIcon } from './icons/Icons';

interface ResultCardProps {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  kpis: string[];
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, bullets, kpis }) => (
  <div className="bg-white p-7 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="flex justify-center items-center w-14 h-14 bg-slate-50 rounded-xl text-slate-900 ring-1 ring-slate-200">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    </div>

    <ul className="mt-5 space-y-2 text-slate-600">
      {bullets.map((b, idx) => (
        <li key={idx} className="flex items-start">
          <span className="text-indigo-600 mr-3 mt-1">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
        Example KPIs
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {kpis.map((k, idx) => (
          <span
            key={idx}
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-white ring-1 ring-slate-200 text-slate-700"
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
      icon: <CogsIcon className="w-7 h-7" />,
      title: 'Customer Service Ops outcomes',
      bullets: [
        'Shadow triage & drafting inside the flow of work (safe parallel run).',
        'Higher quality responses using internal KB citations and checks.',
        'Fewer reopens and less escalation noise.',
      ],
      kpis: ['AHT ↓', 'Deflection ↑', 'Reopen rate ↓', 'Backlog aging ↓'],
    },
    {
      icon: <RocketIcon className="w-7 h-7" />,
      title: 'Delivery / Project Ops outcomes',
      bullets: [
        'Status → Truth summaries across tools (less manual reporting).',
        'RAID log extracted from real signals (meetings, tickets, messages).',
        'Earlier risk detection and fewer surprises.',
      ],
      kpis: ['Status effort ↓', 'Risk discovery ↑', 'Cycle time ↓', 'Escalations ↓'],
    },
    {
      icon: <BarChartIcon className="w-7 h-7" />,
      title: 'Factory outcomes (repeatability)',
      bullets: [
        'A monthly shipping cadence for AI improvements.',
        'Backlog + prioritization + measurement loop.',
        'Templates and patterns that scale across teams.',
      ],
      kpis: ['Time-to-ship ↓', 'Adoption ↑', 'Cost control ↑', 'Repeatable patterns ↑'],
    },
    {
      icon: <TargetIcon className="w-7 h-7" />,
      title: 'Trust outcomes (scale safely)',
      bullets: [
        'Clear guardrails: data boundaries, evaluation, and governance.',
        'Human-in-the-loop where it matters.',
        'Auditability and accountability for outputs.',
      ],
      kpis: ['Rollback risk ↓', 'Policy compliance ↑', 'Confidence ↑', 'Waste ↓'],
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            What you get (measured)
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            We don’t sell “AI features”. We sell operational lift — measured with a Value Ledger and scaled
            through a repeatable factory.
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
            Book the Reality Demo
          </a>
          <p className="mt-3 text-sm text-slate-500">Fixed scope, fast signal. Then we scale only what works.</p>
        </div>
      </div>
    </section>
  );
};

export default Results;
