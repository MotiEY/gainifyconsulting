import React from 'react';
import { SearchIcon, CogsIcon, ShieldCheckIcon } from './icons/Icons';

type StepCard = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bullets: string[];
  meta: string;
};

const Step: React.FC<StepCard> = ({ icon, title, subtitle, bullets, meta }) => {
  return (
    <div className="bg-white rounded-2xl p-7 ring-1 ring-stone-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12 rounded-xl bg-stone-50 ring-1 ring-stone-200 flex items-center justify-center text-slate-900">
          {icon}
        </div>
        <div className="text-xs font-bold tracking-wider uppercase text-slate-500">
          {meta}
        </div>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{subtitle}</p>

      <ul className="mt-5 space-y-2 text-slate-600">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Methodology: React.FC = () => {
  const steps: StepCard[] = [
    {
      icon: <SearchIcon className="w-6 h-6" />,
      meta: '48–72 hours',
      title: 'Reality Demo',
      subtitle: 'Fast signal on real work — before big commitments.',
      bullets: [
        'Select one high-volume, measurable workflow.',
        'Run a safe shadow-mode test on real data.',
        'Deliver a Value Ledger: minutes saved → money.',
      ],
    },
    {
      icon: <CogsIcon className="w-6 h-6" />,
      meta: '3–4 weeks',
      title: 'Value Sprint',
      subtitle: 'Turn the signal into production-grade workflow impact.',
      bullets: [
        'Define baseline + target KPIs with clear owners.',
        'Implement in-flow usage (not another “AI tool”).',
        'Measure weekly: quality, adoption, outcomes.',
      ],
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      meta: 'ongoing',
      title: 'Scale',
      subtitle: 'Make it repeatable — with trust, control, and governance.',
      bullets: [
        'Monthly shipping cadence + prioritized backlog.',
        'Evaluation, audit trail, and data boundaries where needed.',
        'Expand to adjacent workflows only after results hold.',
      ],
    },
  ];

  return (
    <section id="methodology" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            How we deliver
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-slate-600">
            Tight scope. Clean execution. Measured outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((s) => (
            <Step key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Gainify Pulse supports this with a 6-dimension diagnostic — used to remove ambiguity before we execute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
