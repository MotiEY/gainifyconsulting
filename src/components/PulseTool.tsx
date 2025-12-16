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
    icon: <UsersIcon className="w-6 h-6" />,
    strategicLens: [
      'Leadership alignment and communication loops',
      'Adoption friction: incentives, influence, habits',
      'Readiness to change day-to-day execution',
    ],
    phases: [
      {
        phase: 'Quick wins',
        timeframe: '0–30 days',
        actions: ['Identify early adopters.', 'Share initial wins with clear metrics.'],
      },
      {
        phase: 'Build capability',
        timeframe: '1–3 months',
        actions: ['Office hours + short enablement.', 'Lightweight playbooks per workflow.'],
      },
      {
        phase: 'Scale & embed',
        timeframe: '3–6 months',
        actions: ['Role-based enablement.', 'Sustained adoption cadence with ownership.'],
      },
    ],
  },
  'Strategy & Governance': {
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    strategicLens: [
      'Business alignment and ROI definition',
      'Decision model and ownership',
      'Risk, privacy, and governance guardrails',
    ],
    phases: [
      {
        phase: 'Quick wins',
        timeframe: '0–30 days',
        actions: ['Define KPI + success criteria.', 'Assign sponsor + operator owner.'],
      },
      {
        phase: 'Build capability',
        timeframe: '1–3 months',
        actions: ['Define evaluation rubric.', 'Create lightweight governance cadence.'],
      },
      {
        phase: 'Scale & embed',
        timeframe: '3–6 months',
        actions: ['Quarterly reviews: ROI, risk, cost.', 'Embed metrics in operating reviews.'],
      },
    ],
  },
  'Usage & Adoption': {
    icon: <ClipboardListIcon className="w-6 h-6" />,
    strategicLens: [
      'Where AI fits in the flow of work',
      'Confidence in outputs',
      'Adoption patterns and resistance points',
    ],
    phases: [
      {
        phase: 'Quick wins',
        timeframe: '0–30 days',
        actions: ['Baseline current usage + pain points.', 'Start with one high-volume workflow.'],
      },
      {
        phase: 'Build capability',
        timeframe: '1–3 months',
        actions: ['Role-based training for the workflow.', 'Measure adoption + quality weekly.'],
      },
      {
        phase: 'Scale & embed',
        timeframe: '3–6 months',
        actions: ['Expand to adjacent workflows using the same pattern.'],
      },
    ],
  },
  'Systems & Technology': {
    icon: <ChipIcon className="w-6 h-6" />,
    strategicLens: [
      'Integration readiness and interoperability',
      'Security posture and access boundaries',
      'Embedding AI into core platforms',
    ],
    phases: [
      {
        phase: 'Quick wins',
        timeframe: '0–30 days',
        actions: ['Map systems and access boundaries.', 'Identify integration blockers.'],
      },
      {
        phase: 'Build capability',
        timeframe: '1–3 months',
        actions: ['Standardize connectors/APIs.', 'Harden identity and permissions.'],
      },
      {
        phase: 'Scale & embed',
        timeframe: '3–6 months',
        actions: ['Embed the pattern into core platforms at scale.'],
      },
    ],
  },
  'Processes & Workflows': {
    icon: <CogsIcon className="w-6 h-6" />,
    strategicLens: [
      'Where manual work creates bottlenecks',
      'Automation potential and handoffs',
      'Which steps need human-in-the-loop',
    ],
    phases: [
      {
        phase: 'Quick wins',
        timeframe: '0–30 days',
        actions: ['Select a workflow with clear baseline metrics.', 'Define a shadow-mode run plan.'],
      },
      {
        phase: 'Build capability',
        timeframe: '1–3 months',
        actions: ['Move from shadow → assisted usage.', 'Document a repeatable pattern.'],
      },
      {
        phase: 'Scale & embed',
        timeframe: '3–6 months',
        actions: ['Roll out the pattern across similar workflows.'],
      },
    ],
  },
  'Data Readiness': {
    icon: <DatabaseIcon className="w-6 h-6" />,
    strategicLens: [
      'Trusted sources and data quality',
      'Access, privacy, and retention boundaries',
      'Ability to ground outputs (citations)',
    ],
    phases: [
      {
        phase: 'Quick wins',
        timeframe: '0–30 days',
        actions: ['Identify trusted sources for the workflow.', 'Fix top data hygiene gaps.'],
      },
      {
        phase: 'Build capability',
        timeframe: '1–3 months',
        actions: ['Define governance rules for data usage.', 'Create a minimal source registry.'],
      },
      {
        phase: 'Scale & embed',
        timeframe: '3–6 months',
        actions: ['Expand coverage + catalog, improve observability.'],
      },
    ],
  },
} as const;

type DimKey = keyof typeof showcaseData;

const MaturityScale: React.FC = () => {
  const levels = [
    { n: 1, name: 'Foundation', desc: 'Ad-hoc usage, unclear ownership.' },
    { n: 2, name: 'Emerging', desc: 'Some wins, inconsistent execution.' },
    { n: 3, name: 'Building', desc: 'Defined workflows, measured outcomes.' },
    { n: 4, name: 'Scaling', desc: 'Repeatable factory + governance.' },
  ];

  return (
    <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm ring-1 ring-stone-200">
      <div className="text-center mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">Maturity scoring</h3>
        <p className="mt-2 text-sm text-slate-600">
          A simple, consistent scale used across all six dimensions.
        </p>
      </div>

      <div className="grid sm:grid-cols-4 gap-3">
        {levels.map((l) => (
          <div key={l.n} className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold tracking-wider text-slate-500">LEVEL</div>
              <div className="w-8 h-8 rounded-full bg-white ring-1 ring-stone-200 flex items-center justify-center font-extrabold text-slate-900">
                {l.n}
              </div>
            </div>
            <div className="mt-3 font-bold text-slate-900">{l.name}</div>
            <div className="mt-1 text-sm text-slate-600">{l.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4 text-sm text-slate-600">
        Output: a prioritized roadmap, owners, and the first workflow to prove measurable impact.
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
      <div className="text-sm font-semibold text-slate-800 mb-3">Example snapshot</div>
      <div className="space-y-3">
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
  const dimensions = useMemo(() => Object.keys(showcaseData) as DimKey[], []);
  const [activeTab, setActiveTab] = useState<DimKey>('Culture & People');
  const activeContent = showcaseData[activeTab];

  return (
    <section className="py-16 sm:py-20 bg-stone-50 overflow-hidden">
      <div id="pulse" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Diagnostic framework
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-slate-900">Gainify Pulse</h2>
          <p className="mt-3 max-w-4xl mx-auto text-lg text-slate-600">
            A structured readiness assessment across six dimensions — designed to turn AI intent into an execution roadmap.
          </p>
        </div>

        {/* Maturity scoring */}
        <div className="mb-10">
          <MaturityScale />
        </div>

        {/* Showcase */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm ring-1 ring-stone-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">How we read a dimension</h3>
            <p className="max-w-2xl mx-auto text-slate-600">
              Select a dimension to see the lens and the typical roadmap phases.
            </p>
          </div>

          {/* Tabs (quiet) */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {dimensions.map((dim) => {
              const isActive = activeTab === dim;
              return (
                <button
                  key={dim}
                  onClick={() => setActiveTab(dim)}
                  className={[
                    'flex-grow sm:flex-grow-0 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold transition-all duration-200',
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-stone-100 text-slate-700 hover:bg-stone-200',
                  ].join(' ')}
                >
                  <span className={isActive ? 'text-white' : 'text-slate-900'}>{showcaseData[dim].icon}</span>
                  <span className="text-sm sm:text-base">{dim}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-stone-50 p-6 rounded-xl ring-1 ring-stone-200">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left: lens + phases */}
              <div className="lg:col-span-3">
                <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-stone-200 mb-6">
                  <h4 className="font-bold text-lg text-slate-900 mb-4">Strategic lens</h4>
                  <ul className="space-y-3">
                    {activeContent.strategicLens.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber-600 mr-3 mt-1">•</span>
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-stone-200">
                  <h4 className="font-bold text-lg text-slate-900 mb-4">Roadmap phases</h4>

                  <div className="space-y-4">
                    {activeContent.phases.map((phase, i) => (
                      <div key={i} className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
                        <div className="flex items-baseline justify-between flex-wrap gap-2">
                          <div className="font-semibold text-slate-900">{phase.phase}</div>
                          <div className="text-sm text-slate-500">{phase.timeframe}</div>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {phase.actions.map((action, j) => (
                            <li key={j} className="flex items-start text-sm text-slate-600">
                              <span className="text-slate-400 mr-2 mt-1">–</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: snapshot + output */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="w-full bg-white p-6 rounded-xl shadow-sm ring-1 ring-stone-200">
                  <MiniPulseSnapshot />
                </div>

                <div className="mt-6 bg-white p-6 rounded-xl shadow-sm ring-1 ring-stone-200">
                  <div className="text-sm font-semibold text-slate-900">What you get</div>
                  <p className="mt-2 text-sm text-slate-600">
                    A prioritized roadmap mapped to owners, plus the first workflow to prove measurable value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing line (no mid-page CTAs) */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Pulse informs what to do first — then we validate quickly with real work and measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PulseTool;
