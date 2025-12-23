import React, { useMemo, useState } from 'react';
import {
  UsersIcon,
  ShieldCheckIcon,
  ClipboardListIcon,
  ChipIcon,
  CogsIcon,
  DatabaseIcon,
} from './icons/Icons';

type Phase = { phase: string; timeframe: string; actions: string[] };

type ShowcaseItem = {
  icon: React.ReactNode;
  strategicLens: string[];
  phases: Phase[];
};

const showcaseData: Record<
  | 'Culture & People'
  | 'Strategy & Governance'
  | 'Usage & Adoption'
  | 'Systems & Technology'
  | 'Processes & Workflows'
  | 'Data Readiness',
  ShowcaseItem
> = {
  'Culture & People': {
    icon: <UsersIcon className="w-5 h-5" />,
    strategicLens: [
      'Leadership alignment and communication loops',
      'Incentives, influencers, adoption friction',
      'Readiness to change day-to-day work habits',
    ],
    phases: [
      { phase: 'Quick wins', timeframe: '0–30 days', actions: ['Identify early adopters.', 'Share initial wins with simple metrics.'] },
      { phase: 'Build capability', timeframe: '1–3 months', actions: ['Short enablement sessions.', 'Lightweight playbooks per workflow.'] },
      { phase: 'Scale & embed', timeframe: '3–6 months', actions: ['Role-based enablement.', 'Sustained ownership + adoption cadence.'] },
    ],
  },
  'Strategy & Governance': {
    icon: <ShieldCheckIcon className="w-5 h-5" />,
    strategicLens: [
      'Business alignment and ROI definition',
      'Decision-making and ownership model',
      'Risk, privacy, and governance guardrails',
    ],
    phases: [
      { phase: 'Quick wins', timeframe: '0–30 days', actions: ['Define success metrics per workflow.', 'Assign an exec sponsor + operator owner.'] },
      { phase: 'Build capability', timeframe: '1–3 months', actions: ['Define evaluation approach.', 'Create a lightweight governance cadence.'] },
      { phase: 'Scale & embed', timeframe: '3–6 months', actions: ['Quarterly ROI/risk/cost review.', 'Embed metrics into operating reviews.'] },
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
      { phase: 'Quick wins', timeframe: '0–30 days', actions: ['Baseline current usage and pain points.', 'Start with one high-volume workflow.'] },
      { phase: 'Build capability', timeframe: '1–3 months', actions: ['Role-based training for the chosen workflow.', 'Measure adoption + quality weekly.'] },
      { phase: 'Scale & embed', timeframe: '3–6 months', actions: ['Expand to adjacent workflows with the same pattern.'] },
    ],
  },
  'Systems & Technology': {
    icon: <ChipIcon className="w-5 h-5" />,
    strategicLens: [
      'Integration readiness (APIs, identity, access)',
      'Security posture and boundary controls',
      'Embedding AI into existing platforms',
    ],
    phases: [
      { phase: 'Quick wins', timeframe: '0–30 days', actions: ['Map systems and access boundaries.', 'Identify integration blockers for the first workflow.'] },
      { phase: 'Build capability', timeframe: '1–3 months', actions: ['Standardize connectors/APIs for target systems.', 'Harden identity and permissions.'] },
      { phase: 'Scale & embed', timeframe: '3–6 months', actions: ['Operationalize the integration pattern at scale.'] },
    ],
  },
  'Processes & Workflows': {
    icon: <CogsIcon className="w-5 h-5" />,
    strategicLens: [
      'Where manual work creates bottlenecks',
      'Automation potential and handoffs',
      'Which steps need human-in-the-loop',
    ],
    phases: [
      { phase: 'Quick wins', timeframe: '0–30 days', actions: ['Select one workflow with baseline metrics.', 'Define a safe shadow-mode plan.'] },
      { phase: 'Build capability', timeframe: '1–3 months', actions: ['Move from shadow → assisted usage in-flow.', 'Document the repeatable pattern.'] },
      { phase: 'Scale & embed', timeframe: '3–6 months', actions: ['Roll out the pattern across similar workflows.'] },
    ],
  },
  'Data Readiness': {
    icon: <DatabaseIcon className="w-5 h-5" />,
    strategicLens: [
      'Trusted sources and data quality',
      'Access, privacy, retention boundaries',
      'Ability to ground outputs (citations)',
    ],
    phases: [
      { phase: 'Quick wins', timeframe: '0–30 days', actions: ['Identify trusted sources for the first workflow.', 'Fix the top data hygiene gaps.'] },
      { phase: 'Build capability', timeframe: '1–3 months', actions: ['Define data usage rules.', 'Create a minimal source registry / KB.'] },
      { phase: 'Scale & embed', timeframe: '3–6 months', actions: ['Expand coverage + catalog, improve observability.'] },
    ],
  },
};

type DimKey = keyof typeof showcaseData;

const MiniPulseSnapshot: React.FC = () => {
  const dims = useMemo(
    () => [
      { label: 'Culture', current: 2, target: 4 },
      { label: 'Strategy', current: 3, target: 4 },
      { label: 'Adoption', current: 2, target: 4 },
      { label: 'Systems', current: 2, target: 4 },
      { label: 'Process', current: 3, target: 4 },
      { label: 'Data', current: 2, target: 4 },
    ],
    []
  );
  const max = 5;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-800">Example snapshot</div>
        <div className="text-xs text-slate-400">illustrative</div>
      </div>

      <div className="mt-4 space-y-3">
        {dims.map((d) => (
          <div key={d.label} className="flex items-center gap-3">
            <div className="w-20 text-sm font-semibold text-slate-600">{d.label}</div>

            <div className="flex-1">
              <div className="relative h-2 rounded-full bg-stone-100 overflow-hidden ring-1 ring-stone-200">
                <div
                  className="absolute left-0 top-0 h-full bg-slate-400"
                  style={{ width: `${(d.current / max) * 100}%` }}
                />
                <div
                  className="absolute left-0 top-0 h-full bg-amber-500/25"
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
          <span className="inline-block w-3 h-3 rounded-full bg-amber-500/25 ring-1 ring-amber-200" />
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

  const score = [
    { n: 1, label: 'Foundation', hint: 'ad-hoc' },
    { n: 2, label: 'Emerging', hint: 'some structure' },
    { n: 3, label: 'Building', hint: 'repeatable' },
    { n: 4, label: 'Scaling', hint: 'owned + measured' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-stone-50 overflow-hidden">
      <div id="pulse" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Gainify Pulse</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            A diagnostic across six dimensions turning readiness into a prioritized roadmap with owners and measurable outcomes.
          </p>
        </div>

        {/* Scoring scale (quiet, premium) */}
        <div className="bg-white rounded-2xl ring-1 ring-stone-200 shadow-sm p-7 sm:p-8 mb-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
              Scoring scale
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {score.map((s) => (
                  <div
                    key={s.n}
                    className="rounded-2xl bg-stone-50 ring-1 ring-stone-200 px-5 py-4 text-center"
                  >
                    <div className="text-sm font-extrabold text-slate-900">{s.n}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-800">{s.label}</div>
                    <div className="mt-1 text-xs text-slate-500">{s.hint}</div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-center text-sm text-slate-500">
                Scored for execution: ownership, workflow fit, data boundaries, and adoption.
              </p>
            </div>
          </div>
        </div>

        {/* Dimensions (one calm surface) */}
        <div className="bg-white rounded-2xl ring-1 ring-stone-200 shadow-sm p-6 sm:p-8">
          <div className="text-center mb-7">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Six dimensions</h3>
            <p className="max-w-2xl mx-auto text-slate-600">
              Choose a dimension to see the lens and the phases we apply.
            </p>
          </div>

          {/* Mobile dropdown */}
          <div className="sm:hidden mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Dimension</label>
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as DimKey)}
              className="w-full rounded-2xl bg-white px-4 py-3 text-slate-900 ring-1 ring-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              {dimensions.map((dim) => (
                <option key={dim} value={dim}>
                  {dim}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop pills */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {dimensions.map((dim) => (
              <button
                key={dim}
                onClick={() => setActiveTab(dim)}
                aria-pressed={activeTab === dim}
                className={[
                  'flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-colors',
                  activeTab === dim
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-700 ring-1 ring-stone-200 hover:bg-stone-50',
                ].join(' ')}
              >
                {showcaseData[dim].icon}
                <span className="text-sm sm:text-base">{dim}</span>
              </button>
            ))}
          </div>

          {/* Content grid */}
          <div className="rounded-2xl bg-stone-50 ring-1 ring-stone-200 p-6">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left: lens + phases */}
              <div className="lg:col-span-3 space-y-6">
                <div className="bg-white rounded-2xl ring-1 ring-stone-200 p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
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

                <div className="bg-white rounded-2xl ring-1 ring-stone-200 p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Roadmap phases
                  </div>

                  <div className="space-y-5">
                    {activeContent.phases.map((phase, i) => (
                      <div key={i}>
                        <div className="font-semibold text-slate-900">
                          {phase.phase}
                          <span className="ml-2 text-sm font-normal text-slate-500">({phase.timeframe})</span>
                        </div>
                        <ul className="mt-2 space-y-2">
                          {phase.actions.map((action, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                              <span className="mt-1 text-amber-600">•</span>
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
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-white rounded-2xl ring-1 ring-stone-200 p-6">
                  <MiniPulseSnapshot />
                </div>

                <div className="bg-white rounded-2xl ring-1 ring-stone-200 p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Output</div>
                  <p className="mt-3 text-sm text-slate-600">
                    A prioritized roadmap mapped to owners plus a simple measurement plan (Value Ledger) and a monthly shipping cadence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Pulse removes ambiguity then execution focuses only where value is measurable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseTool;
