import React, { ReactNode, useRef, useEffect } from 'react';
import { SearchIcon, CodeIcon, LightningBoltIcon } from './icons/Icons';

interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  meta: string;
  delay: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, meta, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add('animate-fade-in-up');
          observer.unobserve(cardRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-0 ring-1 ring-slate-200"
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-white">
        {icon}
      </div>

      <div className="text-sm font-semibold text-slate-500">{meta}</div>
      <h3 className="text-xl font-bold mt-2 mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <SearchIcon className="w-7 h-7" />,
      meta: 'Station 1 • 48–72 hours • Fixed scope',
      title: 'Reality Demo',
      description:
        'We run a safe “shadow workflow” on your real data and deliver a Value Ledger (minutes → money) plus a practical scale plan.',
      delay: '0ms',
    },
    {
      icon: <CodeIcon className="w-7 h-7" />,
      meta: 'Station 2 • 3–4 weeks',
      title: 'Value Sprint',
      description:
        'We move from shadow → in-flow assisted usage: real users, measurable KPIs, and the first workflow that produces consistent operational lift.',
      delay: '200ms',
    },
    {
      icon: <LightningBoltIcon className="w-7 h-7" />,
      meta: 'Station 3 • Retainer / ongoing',
      title: 'Scale Factory',
      description:
        'We build the operating rhythm: backlog, templates, evaluation, governance, and a monthly shipping cadence that scales value across teams safely.',
      delay: '400ms',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      {/* Dual anchors: keep old + new links working */}
      <div id="methodology" className="scroll-mt-24" />
      <div id="how-we-work" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            How we deliver results
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            A simple, commercial flow that turns AI into measurable value — then makes it repeatable and safe to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <StepCard key={idx} {...step} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#reality-demo"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
          >
            Book the Reality Demo
          </a>
          <p className="mt-3 text-sm text-slate-500">
            Prefer diagnostics first? Start with <a href="#pulse" className="font-semibold text-slate-900 hover:underline">Gainify Pulse</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
