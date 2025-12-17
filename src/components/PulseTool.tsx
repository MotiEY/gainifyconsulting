import React, { useState } from 'react';
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
      'Adoption friction: incentives, habits, and trust',
      'Enablement that changes day-to-day work',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Identify early adopters.', 'Show one win with a metric.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Short enablement sessions.', 'Light playbooks per workflow.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Role-based enablement.', 'Sustained ownership cadence.'] },
    ],
  },
  'Strategy & Governance': {
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    strategicLens: [
      'Business alignment and ROI definition',
      'Ownership model and decision flow',
      'Risk, privacy, and governance guardrails',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Define KPI + success criteria.', 'Assign sponsor + operator owner.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Approval flow + evaluation rubric.', 'Light governance cadence.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Quarterly ROI/risk reviews.', 'Metrics in operating reviews.'] },
    ],
  },
  'Usage & Adoption': {
    icon: <ClipboardListIcon className="w-6 h-6" />,
    strategicLens: [
      'Where AI fits in the flow of work',
      'Confidence and quality signals',
      'Adoption patterns and resistance points',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Baseline usage + pain points.', 'Start with one workflow.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Role-based training.', 'Weekly adoption + quality checks.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Expand to adjacent workflows.'] },
    ],
  },
  'Systems & Technology': {
    icon: <ChipIcon className="w-6 h-6" />,
    strategicLens: [
      'Integration readiness and access boundaries',
      'Security posture and permissions',
      'Embedding AI into core platforms',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Map systems and access boundaries.', 'Identify blockers.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Standardize connectors/APIs.', 'Harden identity & permissions.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Embed the pattern at scale.'] },
    ],
  },
  'Processes & Workflows': {
    icon: <CogsIcon className="w-6 h-6" />,
    strategicLens: [
      'Where manual work creates bottlenecks',
      'Handoffs and automation potential',
      'Where human-in-the-loop is required',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Select a measurable workflow.', 'Define a safe shadow run.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Move from shadow → assisted.', 'Document the pattern.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Roll out across similar workflows.'] },
    ],
  },
  'Data Readiness': {
    icon: <DatabaseIcon className="w-6 h-6" />,
    strategicLens: [
      'Trusted sources and data quality',
      'Privacy, access, and retention boundaries',
      'Grounding with citations / source control',
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ['Identify trusted sources.', 'Fix top data hygiene gaps.'] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ['Govern rules for data use.', 'Minimal KB / source registry.'] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ['Expand coverage + observability.'] },
    ],
  },
} as const;

type DimKey = keyof typeof showcaseData;

const MaturityScale: React.FC = () => {
  const levels = ['Foundation', 'Emerging', 'Building', 'Scaling'];

  return (
    <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm ring-1 ring-stone-200">
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Maturity scale</h3>
        <p className="mt-2 text-sm text-slate-600">
          A simple way to score readiness — from first steps to repeatable execution.
        </p>
      </div>

      <div className="mt-6">
        <div className="relative h-2 rounded-full bg-stone-100 overflow-hidden ring-1 ring-stone-200">
          <div className="absolute left-0 top-0 h-full w-1/4 bg-stone-200" />
          <div className="absolute left-1/4 top-0 h-full w-1/4 bg-stone-300" />
          <div className="absolute left-2/4 top-0 h-full w-1/4 bg-stone-400" />
          <div className="absolute left-3/4 top-0 h-full w-1/4 bg-slate-900" />
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2 text-xs sm:text-sm">
          {levels.map((l) => (
            <div key={l} className="text-center font-semibold text-slate-600">
              {l}
            </div>
          ))}
        </div>
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
      <div className="text-sm font-extrabold text-slate-900 mb-3">Example snapshot</div>
      <div className="space-y-3">
        {dims.map((d) => (
          <div key={d.label} className="flex items-center gap-3">
            <div className="w-20 text-sm font-semibold text-slate-600">{d.label}</div>
            <div className="flex-1">
              <div className="relative h-2 rounded-full bg-stone-100 overflow-hidden ring-1 ring-stone-200">
                <div
                  className="absolute left-0 top-0 h-full bg-stone-400"
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
          <span className="inline-block w-3 h-3 rounded-full bg-stone-400" />
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
  const activeContent = showcaseData[activeTab];
  const dimensions = Object.keys(showcaseData) as DimKey[];

  return (
    <section className="py-16 sm:py-20 bg-stone-50 overflow-hidden">
      <div id="pulse" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Gainify Pulse</h2>
          <p className="max-w-4xl mx-auto text-lg text-slate-600">
            A diagnostic across six dimensions — translated into a practical roadmap and ownership model.
          </p>
        </div>

        <MaturityScale />

        <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl shadow-sm ring-1 ring-stone-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Methodology showcase</h3>
            <p className="max-w-2xl mx-auto text-slate-600">
              Pick a dimension to see the lens and the phases we apply.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {dimensions.map((dim) => (
              <button
                key={dim}
                onClick={() => setActiveTab(dim)}
                className={[
                  'flex-grow sm:flex-grow-0 flex items-center gap-2 px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 rounded-full font-semibold transition-all',
                  activeTab === dim
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-stone-100 text-slate-700 hover:bg-stone-200',
                ].join(' ')}
              >
                <span className={activeTab === dim ? 'text-amber-200' : 'text-slate-700'}>
                  {showcaseData[dim].icon}
                </span>
                <span>{dim}</span>
              </button>
            ))}
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl ring-1 ring-stone-200">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Strategic lens
                  </div>
                  <ul className="space-y-3">
                    {activeContent.strategicLens.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Roadmap phases
                  </div>
                  <div className="space-y-4">
                    {activeContent.phases.map((phase, i) => (
                      <div key={i}>
                        <h5 className="font-extrabold text-slate-900">
                          {phase.phase}{' '}
                          <span className="text-sm text-slate-500 font-semibold ml-2">
                            {phase.timeframe}
                          </span>
                        </h5>
                        <ul className="mt-2 space-y-1">
                          {phase.actions.map((action, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col items-center justify-center">
                <div className="w-full bg-white p-6 rounded-2xl shadow-sm ring-1 ring-stone-200">
                  <MiniPulseSnapshot />
                </div>

                <div className="mt-6 text-center">
                  <div className="text-sm font-extrabold text-slate-900">Output</div>
                  <p className="mt-2 text-sm text-slate-600">
                    A prioritized roadmap mapped to owners — plus a simple measurement plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            Pulse is the diagnostic. Execution happens in the Reality Demo + Value Sprint.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseTool;
