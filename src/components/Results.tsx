import React from 'react';
import { CogsIcon, RocketIcon, TargetIcon, BarChartIcon } from './icons/Icons';

interface ResultCardProps {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  kpis: string[];
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, bullets, kpis }) => (
  <div className="bg-white p-7 rounded-2xl shadow-sm ring-1 ring-stone-200 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="flex justify-center items-center w-14 h-14 bg-stone-50 rounded-xl text-slate-900 ring-1 ring-stone-200">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
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
      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
        Example KPIs
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {kpis.map((k, idx) => (
          <span
            key={idx}
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
      icon: <CogsIcon className="w-7 h-7" />,
      title: 'Customer Service Ops',
      bullets: [
        'Drafting and triage inside the flow of work (safe parallel run first).',
        'Higher-quality responses using your KB (citations + checks).',
        'Fewer escalations and less rework.',
      ],
      kpis: ['AHT ↓', 'Deflection ↑', 'Reopen rate ↓', 'Backlog aging ↓'],
    },
    {
      icon: <RocketIcon className="w-7 h-7" />,
      title: 'Delivery / Project Ops',
      bullets: [
        'Status → Truth summaries across tools (less manual reporting).',
        'Risks and dependencies captured from real signals.',
        'Earlier detection and fewer surprises.',
      ],
      kpis: ['Status effort ↓', 'Risk discovery ↑', 'Cycle time ↓', 'Escalations ↓'],
    },
    {
      icon: <BarChartIcon className="w-7 h-7" />,
      title: 'Repeatability (Factory)',
      bullets: [
        'A monthly shipping cadence for improvements.',
        'Backlog + prioritization + measurement loop.',
        'Patterns that scale across teams.',
      ],
      kpis: ['Time-to-ship ↓', 'Adoption ↑', 'Cost control ↑', 'Repeatable patterns ↑'],
    },
    {
      icon: <TargetIcon className="w-7 h-7" />,
      title: 'Trust (Scale safely)',
      bullets: [
        'Clear guardrails: data boundaries and governance.',
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
            Outcomes you can measure
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            We focus on operational lift — proven in one workflow, then scaled with repeatability and trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resultsData.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Want to see this on your data? Use the <a href="#reality-demo" className="font-semibold text-slate-900 hover:underline">Reality Demo</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
