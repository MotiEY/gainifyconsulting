import React from 'react';
import { SearchIcon, CogsIcon, ShieldCheckIcon } from './icons/Icons';

type Card = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bullets: string[];
  underHood: string[];
};

const LayerCard: React.FC<Card> = ({ icon, title, subtitle, bullets, underHood }) => {
  return (
    <div className="bg-white rounded-2xl p-7 ring-1 ring-stone-200 shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded-xl bg-stone-50 ring-1 ring-stone-200 flex items-center justify-center text-slate-900">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-slate-600">{subtitle}</p>

      <ul className="mt-5 space-y-2 text-slate-600">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl bg-stone-50 p-4 ring-1 ring-stone-200">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Works across 6 domains
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {underHood.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700 ring-1 ring-stone-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Methodology: React.FC = () => {
  const cards: Card[] = [
    {
      icon: <SearchIcon className="w-6 h-6" />,
      title: '1) Value',
      subtitle: 'Choose one workflow and prove ROI.',
      bullets: [
        'Pick a high-volume workflow (measurable, low-risk).',
        'Set baseline metrics and success targets.',
        'Run Shadow Mode on real data to validate impact.',
      ],
      underHood: ['Strategy & KPIs', 'Process clarity'],
    },
    {
      icon: <CogsIcon className="w-6 h-6" />,
      title: '2) Factory',
      subtitle: 'Make results repeatable.',
      bullets: [
        'Build a monthly shipping cadence.',
        'Create a backlog + ownership model.',
        'Embed adoption inside the flow of work.',
      ],
      underHood: ['Operating model', 'Adoption enablement', 'Systems & tooling'],
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: '3) Trust',
      subtitle: 'Scale safely — without rollbacks.',
      bullets: [
        'Define data boundaries and access rules.',
        'Add evaluation + audit trail where needed.',
        'Govern cost, risk, and quality over time.',
      ],
      underHood: ['Data readiness', 'Governance & security'],
    },
  ];

  return (
    <section id="methodology" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            How Gainify delivers
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-slate-600">
            Simple outside. Serious execution underneath.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((c) => (
            <LayerCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
