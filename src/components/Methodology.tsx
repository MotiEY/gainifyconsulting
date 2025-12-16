import React, { ReactNode, useEffect, useRef } from 'react';
import { SearchIcon, CogsIcon, ShieldCheckIcon } from './icons/Icons';

interface LayerCardProps {
  icon: ReactNode;
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
  alignedDomains: string[];
  delay: string;
}

const LayerCard: React.FC<LayerCardProps> = ({
  icon,
  number,
  title,
  subtitle,
  bullets,
  alignedDomains,
  delay,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-in-up');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 opacity-0"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="text-right">
          <div className="text-xs font-bold tracking-widest text-slate-400">LAYER {number}</div>
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{subtitle}</p>

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
          Aligned domains (under the hood)
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {alignedDomains.map((d) => (
            <span
              key={d}
              className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-white ring-1 ring-slate-200 text-slate-700"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Methodology: React.FC = () => {
  const layers: LayerCardProps[] = [
    {
      icon: <SearchIcon className="w-7 h-7" />,
      number: '1',
      title: 'Value',
      subtitle: 'Pick one workflow and prove ROI with simple, defensible metrics.',
      bullets: [
        'Choose a beachhead workflow (high-volume, measurable, politically “safe”).',
        'Run in Shadow Mode first — no disruption, fast learning.',
        'Deliver a Value Ledger: minutes → money (and quality impact).',
      ],
      alignedDomains: ['Strategy & Governance', 'Processes & Workflows'],
      delay: '0ms',
    },
    {
      icon: <CogsIcon className="w-7 h-7" />,
      number: '2',
      title: 'Factory',
      subtitle: 'Make value repeatable: cadence, backlog, adoption loop.',
      bullets: [
        'Monthly shipping cadence (not a one-time pilot).',
        'Backlog + prioritization + measurement loop.',
        'Enablement + in-the-flow tooling patterns so people actually use it.',
      ],
      alignedDomains: ['Usage & Adoption', 'Culture & People', 'Systems & Technology'],
      delay: '200ms',
    },
    {
      icon: <ShieldCheckIcon className="w-7 h-7" />,
      number: '3',
      title: 'Trust',
      subtitle: 'Scale safely without rollbacks, security drama, or “agent chaos”.',
      bullets: [
        'Data boundaries, access rules, and grounding (citations).',
        'Human-in-the-loop where it matters; evaluation where it doesn’t.',
        'Governance + auditability + cost control to unlock scale.',
      ],
      alignedDomains: ['Data Readiness', 'Strategy & Governance'],
      delay: '400ms',
    },
  ];

  return (
    <section id="methodology" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Value → Factory → Trust
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            We sell the 3-layer outcome. The 6 domains are the engine underneath — visible as “what’s inside” each layer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {layers.map((layer, i) => (
            <LayerCard key={i} {...layer} />
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
            Fixed scope, fast signal. Then we scale only what works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
