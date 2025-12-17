import React, { useMemo, useState } from 'react';
import {
  UsersIcon,
  ShieldCheckIcon,
  ClipboardListIcon,
  ChipIcon,
  CogsIcon,
  DatabaseIcon,
} from './icons/Icons';

const showcaseData = {
  'Culture & People': {
    icon: <UsersIcon className="w-5 h-5" />,
    strategicLens: [
      'Leadership alignment and communication loops',
      'Incentives, habits, and adoption friction',
      'Readiness to change day-to-day work',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Identify early adopters.', 'Show one win with a metric.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Short enablement sessions.', 'Light playbooks per workflow.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Role-based enablement.', 'Sustained ownership cadence.'] },
    ],
  },
  'Strategy & Governance': {
    icon: <ShieldCheckIcon className="w-5 h-5" />,
    strategicLens: [
      'Business alignment and ROI definition',
      'Ownership and decision flow',
      'Risk, privacy, and governance guardrails',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Define KPIs + success criteria.', 'Assign an exec sponsor + operator owner.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Define evaluation rubric.', 'Create a lightweight governance cadence.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Quarterly ROI/risk/cost reviews.', 'Embed metrics into operating reviews.'] },
    ],
  },
  'Usage & Adoption': {
    icon: <ClipboardListIcon className="w-5 h-5" />,
    strategicLens: [
      'Where AI fits in the flow of work',
      'Confidence and trust in outputs',
      'Adoption patterns and resistance points',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Baseline current usage + pain points.', 'Start with one high-volume workflow.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Role-based training on the chosen workflow.', 'Measure adoption + quality weekly.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Expand to adjacent workflows with the same pattern.'] },
    ],
  },
  'Systems & Technology': {
    icon: <ChipIcon className="w-5 h-5" />,
    strategicLens: [
      'Integration readiness and interoperability',
      'Security posture and access boundaries',
      'Embedding AI into core platforms',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Map systems and access boundaries.', 'Identify blockers for the first workflow.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Standardize connectors/APIs.', 'Harden identity and permissions.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Embed the pattern into core platforms at scale.'] },
    ],
  },
  'Processes & Workflows': {
    icon: <CogsIcon className="w-5 h-5" />,
    strategicLens: [
      'Where manual work creates bottlenecks',
      'Automation potential and handoffs',
      'Where human judgement must remain',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Select one workflow with baseline metrics.', 'Define a safe shadow-mode plan.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Move from shadow → assisted usage.', 'Document the repeatable pattern.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Roll out the pattern across similar workflows.'] },
    ],
  },
  'Data Readiness': {
    icon: <DatabaseIcon className="w-5 h-5" />,
    strategicLens: [
      'Trusted sources and data quality',
      'Privacy, retention, and access boundaries',
      'Grounding outputs (citations) where needed',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Identify trusted sources for the first workflow.', 'Fix the top hygiene gaps.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Define governance rules for data usage.', 'Create a minimal source registry.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Expand coverage, improve observability.'] },
    ],
  },
} as const;

type DimKey = keyof typeof showcaseData;

const MaturityScale: React.FC = () => {
  const levels = useMemo(
    () => [
      { step: '01', name: 'Foundation', desc: 'First workflows, basic guardrails' },
      { step: '02', name: 'Emerging', desc: 'Some wins, uneven adoption' },
      { step: '03', name: 'Building', desc: 'Measured cadence, clearer ownership' },
      { step: '04', name: 'Scaling', desc: 'Repeatable delivery + governance' },
    ],
    []
  );

  return (
    <div className="rounded-2xl bg-white p-6 sm:p-7 ring-1 ring-stone-200 shadow-sm">
      <div className="flex items-baseline justify-between gap-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Maturity scale</div>
          <div className="mt-1 text-lg font-bold text-slate-900">How we score readiness</div>
        </div>
        <div className="hidden sm:block text-sm text-slate-500">1 → 4</div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        {levels.map((l, idx) => (
          <div key={l.name} className="relative rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-500">{l.step}</div>
              <div className="h-2 w-2 rounded-full bg-amber-600" aria-hidden="true" />
            </div>
            <div className="mt-2 font-bold text-slate-900">{l.name}</div>
            <div className="mt-1 text-sm text-slate-600">{l.desc}</div>

            {idx < levels.length - 1 && (
              <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-px bg-stone-200" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MiniPulseSnapshot: React.FC = () => {
  const dims = [
    { label: 'Culture', current: 2, target: 4 },
    { label: 'Strategy', current: 3, target: 4 },
    { label: 'Adoption', current: 2, target: 4 },
    { label: 'Systems', current: 2, target: 4 },
    { label: 'Process', current: 3, target: 4 },
    { label: 'Data', current: 2, target: 4 },
  ];
  const max = 5;

  return (
    <div className="w-full">
      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Example snapshot</div>
      <div className="mt-4 space-y-3">
        {dims.map((d) => (
          <div key={d.label} className="flex items-center gap-3">
            <div className="w-20 text-sm font-semibold text-slate-600">{d.label}</div>
            <div className="flex-1">
              <div className="relative h-2 rounded-full bg-stone-100 overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-slate-400"
                  style={{ width: `${(d.current / max) * 100}%` }}
                />
                <div
                  className="absolute left-0 top-0 h-full bg-amber-600/25"
                  style={{ width: `${(d.target / max) * 100}%` }}
                />
              </div>
            </div>
            <div className="w-16 text-right text-xs text-slate-500">
              {d.current}/{max} → {d.target}/{max}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-slate-400" />
          Current
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-amber-600/25 ring-1 ring-amber-200" />
          Target
        </div>
      </div>
    </div>
  );
};

const PulseTool: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DimKey>('Culture & People');
  const dimensions = Object.keys(showcaseData) as DimKey[];
  const activeContent = showcaseData[activeTab];

  return (
    <section className="py-16 sm:py-20 bg-stone-50 overflow-hidden">
      <div id="pulse" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Gainify Pulse</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            A diagnostic across six dimensions — translated into a practical roadmap and ownership model.
          </p>
        </div>

        <div className="mb-10">
          <MaturityScale />
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm ring-1 ring-stone-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Inside Pulse</h3>
            <p className="max-w-2xl mx-auto text-slate-600">
              Pick a dimension to preview the lens and roadmap phases we apply.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {dimensions.map((dim) => {
              const isActive = activeTab === dim;
              return (
                <button
                  key={dim}
                  onClick={() => setActiveTab(dim)}
                  className={[
                    'flex-grow sm:flex-grow-0 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold transition-all',
                    'ring-1 ring-stone-200',
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-stone-50 text-slate-700 hover:bg-stone-100',
                  ].join(' ')}
                >
                  <span className={isActive ? 'text-white' : 'text-slate-900'}>{showcaseData[dim].icon}</span>
                  <span className="text-sm sm:text-base">{dim}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl bg-stone-50 p-6 sm:p-7 ring-1 ring-stone-200">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Strategic lens</div>
                  <ul className="mt-4 space-y-3">
                    {activeContent.strategicLens.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Roadmap phases</div>
                  <div className="mt-4 space-y-4">
                    {activeContent.phases.map((phase, i) => (
                      <div key={i} className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
                        <div className="flex items-baseline justify-between gap-4">
                          <div className="font-bold text-slate-900">{phase.phase}</div>
                          <div className="text-sm text-slate-500">{phase.timeframe}</div>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {phase.actions.map((action, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-stone-200">
                  <MiniPulseSnapshot />
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Output</div>
                  <p className="mt-3 text-sm text-slate-600">
                    A prioritized roadmap mapped to owners — plus a simple measurement plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* keep this quiet; no mid-page CTAs */}
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              Pulse informs what to do first — execution happens in the Reality Demo and Value Sprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseTool;
