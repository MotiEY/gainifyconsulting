import React from 'react';
import { SearchIcon, CogsIcon, ShieldCheckIcon } from './icons/Icons';

type StepCard = {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  output: string;
};

const Step: React.FC<StepCard> = ({ icon, eyebrow, title, subtitle, bullets, output }) => {
  return (
    <div className="bg-white rounded-2xl p-7 ring-1 ring-stone-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-xl bg-stone-50 ring-1 ring-stone-200 flex items-center justify-center text-slate-900">
          {icon}
        </div>
        <div className="text-xs font-bold tracking-wider uppercase text-slate-500">
          {eyebrow}
        </div>
      </div>

      <h3 className="mt-5 text-xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{subtitle}</p>

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
          Output
        </div>
        <div className="mt-2 text-sm font-semibold text-slate-800">
          {output}
        </div>
      </div>
    </div>
  );
};

const Methodology: React.FC = () => {
  const steps: StepCard[] = [
    {
      icon: <SearchIcon className="w-6 h-6" />,
      eyebrow: '48–72 hours',
      title: 'Reality Demo',
      subtitle: 'Fast signal on real work — before big commitments.',
      bullets: [
        'Select one high-volume, measurable workflow.',
        'Run a safe shadow test on real data.',
        'Translate impact into a simple Value Ledger (time → money).',
      ],
      output: 'Reality Demo pack: workflow map + baseline + Value Ledger',
    },
    {
      icon: <CogsIcon className="w-6 h-6" />,
      eyebrow: '3–4 weeks',
      title: 'Implementation Sprint',
      subtitle: 'Turn the signal into production-grade workflow impact.',
      bullets: [
        'Define KPI targets and owners.',
        'Embed AI inside the tools people already use.',
        'Measure weekly: quality, adoption, and outcomes.',
      ],
      output: 'Working workflow in production + KPI tracking',
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      eyebrow: 'ongoing',
      title: 'Scale',
      subtitle: 'Expand carefully — with guardrails that keep speed safe.',
      bullets: [
        'Establish a monthly shipping cadence and a prioritized backlog.',
        'Add evaluation, audit trail, and data boundaries where needed.',
        'Expand to adjacent workflows only after results hold.',
      ],
      output: 'Repeatable rollout plan + governance & controls',
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

        {/* quiet, non-pushy connector to Pulse (no button, no noise) */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Gainify Pulse is the diagnostic behind the plan —{' '}
            <a href="#pulse" className="font-semibold text-slate-900 hover:underline">
              see the six dimensions
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
