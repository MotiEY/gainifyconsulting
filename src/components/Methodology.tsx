import React, { ReactNode, useRef, useEffect } from 'react';
import { SearchIcon, CodeIcon, LightningBoltIcon } from './icons/Icons';

interface LayerCardProps {
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  domains: string[];
  delay: string;
}

const LayerCard: React.FC<LayerCardProps> = ({ icon, title, tagline, description, domains, delay }) => {
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
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white">
        {icon}
      </div>

      <h3 className="text-xl font-extrabold mb-2 text-slate-900">{title}</h3>
      <p className="text-indigo-700 font-semibold mb-4">{tagline}</p>

      <p className="text-slate-600 leading-relaxed mb-6">{description}</p>

      <div className="border-t border-slate-100 pt-5">
        <div className="text-sm font-bold text-slate-800 mb-3">Aligned domains</div>
        <div className="flex flex-wrap gap-2">
          {domains.map((d) => (
            <span
              key={d}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
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
      title: 'Layer 1: Value',
      tagline: 'Prove measurable impact in one real workflow.',
      description:
        'We start with a beachhead workflow and define success in business terms (time saved, cost-to-serve, throughput, quality). Then we validate quickly with a practical “reality demo” mindset — not slideware.',
      domains: ['Strategy & Governance', 'Processes & Workflows'],
      delay: '0ms',
    },
    {
      icon: <CodeIcon className="w-7 h-7" />,
      title: 'Layer 2: Factory',
      tagline: 'Turn the win into a repeatable delivery system.',
      description:
        'We build the operating cadence that keeps AI shipping: ownership, backlog, enablement, adoption loops, and “in-the-flow-of-work” patterns — so it doesn’t die after the first demo.',
      domains: ['Culture & People', 'Usage & Adoption'],
      delay: '200ms',
    },
    {
      icon: <LightningBoltIcon className="w-7 h-7" />,
      title: 'Layer 3: Trust',
      tagline: 'Scale safely without rollbacks or “agent chaos.”',
      description:
        'We put guardrails in place: secure data boundaries, evaluation, governance, and reliable integrations — so leadership is confident to scale beyond a single team.',
      domains: ['Data Readiness', 'Systems & Technology'],
      delay: '400ms',
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            The Gainify Model: 3 Layers, 6 Domains
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            The website stays simple (3 layers). Under the hood, we diagnose and execute across 6 domains to make AI stick.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {layers.map((layer, idx) => (
            <LayerCard key={idx} {...layer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
