import React from 'react';
import { SearchIcon, CogsIcon, ShieldCheckIcon } from './icons/Icons';

type StepCard = {
  icon: React.ReactNode;
  step: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

const Step: React.FC<StepCard> = ({ icon, step, title, subtitle, bullets }) => {
  return (
    <div className="bg-white rounded-2xl p-7 ring-1 ring-stone-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-stone-50 ring-1 ring-stone-200 flex items-center justify-center text-slate-900">
          {icon}
        </div>

        <div className="text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{step}</div>
          <h3 className="text-xl font-extrabold text-slate-900 leading-tight">{title}</h3>
        </div>
      </div>

      <p className="mt-3 text-slate-600">{subtitle}</p>

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
      step: 'Step 01',
      title: 'Reality Demo (48–72 hours)',
      subtitle: 'Fast signal on real work — before big commitments.',
      bullets: [
        'Choose one high-volume, measurable workflow.',
        'Run a safe shadow test on real data.',
        'Deliver a Value Ledger: minutes saved → money.',
      ],
    },
    {
      icon: <CogsIcon className="w-6 h-6" />,
      step: 'Step 02',
      title: 'Value Sprint (3–4 weeks)',
      subtitle: 'Turn the signal into production-grade workflow impact.',
      bullets: [
        'Baseline + target KPIs, owners, and quality checks.',
        'Implement inside the flow of work (not a separate “AI tool”).',
        'Measure weekly: adoption, quality, and outcomes.',
      ],
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      step: 'Step 03',
      title: 'Scale (repeatable + controlled)',
      subtitle: 'Expand only after results hold — with guardrails.',
      bullets: [
        'Monthly shipping cadence + prioritized backlog.',
        'Data boundaries, evaluation, and audit trail where needed.',
        'Roll out to adjacent workflows with the same pattern.',
      ],
    },
  ];

  return (
    <section id="methodology" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">How we deliver</h2>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-slate-600">
            Tight scope. Clean execution. Measured outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((s) => (
            <Step key={s.step} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
