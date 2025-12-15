import React, { useState } from 'react';
import {
  UsersIcon,
  ShieldCheckIcon,
  ClipboardListIcon,
  ChipIcon,
  CogsIcon,
  DatabaseIcon
} from './icons/Icons';

const showcaseData = {
  'Culture & People': {
    icon: <UsersIcon className="w-6 h-6" />,
    strategicLens: [
      "Communication loops & leadership alignment",
      "Influencers, incentives, and adoption friction",
      "Readiness to change day-to-day work habits"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Identify & engage early adopters.", "Share initial AI wins with clear metrics."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Office hours + short enablement sessions.", "Lightweight playbooks per workflow."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Role-based enablement.", "Sustained adoption cadence with ownership."] },
    ],
  },
  'Strategy & Governance': {
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    strategicLens: [
      "Business alignment and ROI definition",
      "Decision-making & ownership model",
      "Risk, privacy, and governance guardrails"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Define KPI + success criteria per workflow.", "Assign an executive sponsor + operator owner."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Define approval flow & evaluation rubric.", "Create lightweight governance cadence."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Quarterly reviews of ROI, risk, and cost.", "Embed metrics into operating reviews."] },
    ],
  },
  'Usage & Adoption': {
    icon: <ClipboardListIcon className="w-6 h-6" />,
    strategicLens: [
      "Where AI fits in the flow of work",
      "Confidence and trust in outputs",
      "Adoption patterns and resistance points"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Baseline current usage + pain points.", "Start with one high-volume workflow."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Role-based training on the chosen workflow.", "Measure adoption + quality weekly."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Expand to adjacent workflows with the same pattern."] },
    ],
  },
  'Systems & Technology': {
    icon: <ChipIcon className="w-6 h-6" />,
    strategicLens: [
      "Interoperability and integration readiness",
      "Security posture and access boundaries",
      "Embedding AI into core platforms"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Map systems and access boundaries.", "Identify integration blockers for the first workflow."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Standardize connectors/APIs for target systems.", "Harden identity and permissions."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Embed the pattern into core platforms at scale."] },
    ],
  },
  'Processes & Workflows': {
    icon: <CogsIcon className="w-6 h-6" />,
    strategicLens: [
      "Where manual work creates bottlenecks",
      "Automation potential and handoffs",
      "Which steps need human-in-the-loop"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Select one workflow with clear baseline metrics.", "Define “shadow mode” run plan."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Move from shadow → assisted in-flow usage.", "Document the repeatable pattern."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Roll out the pattern across similar workflows."] },
    ],
  },
  'Data Readiness': {
    icon: <DatabaseIcon className="w-6 h-6" />,
    strategicLens: [
      "Trusted sources and data quality",
      "Access, privacy, and retention boundaries",
      "Ability to ground AI outputs (citations)"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Identify trusted sources for the first workflow.", "Fix the top data hygiene gaps."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Define governance rules for data usage.", "Create a minimal knowledge base / source registry."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Expand coverage + catalog, improve observability."] },
    ],
  }
};

type DimKey = keyof typeof showcaseData;

const MiniPulseSnapshot: React.FC = () => {
  // illustrative sample values – you can later wire this to real survey results
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
      <div className="text-sm font-semibold text-slate-700 mb-3">Example Pulse snapshot</div>
      <div className="space-y-3">
        {dims.map((d) => (
          <div key={d.label} className="flex items-center gap-3">
            <div className="w-20 text-sm font-semibold text-slate-600">{d.label}</div>
            <div className="flex-1">
              <div className="relative h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-slate-400"
                  style={{ width: `${(d.current / max) * 100}%` }}
                />
                <div
                  className="absolute left-0 top-0 h-full bg-indigo-500/30"
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
          <span className="inline-block w-3 h-3 rounded-full bg-indigo-500/30 ring-1 ring-indigo-200" />
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

  // renamed to sound professional (no “dismissive”)
  const maturityLevels = [
    { name: 'Foundation', color: 'bg-slate-100 text-slate-700' },
    { name: 'Emerging', color: 'bg-indigo-50 text-indigo-700' },
    { name: 'Building', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Scaling', color: 'bg-slate-900 text-white' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 overflow-hidden">
      <div id="pulse" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Gainify Pulse
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-slate-600">
            Pulse is the diagnostic engine behind <span className="font-semibold text-slate-800">Value → Factory → Trust</span>.
            It assesses AI readiness across six dimensions and turns it into a practical roadmap.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#reality-demo"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
            >
              Book Reality Demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 font-bold text-slate-900 bg-white ring-1 ring-slate-200 hover:bg-slate-50 transition-all duration-300"
            >
              Ask a question
            </a>
          </div>
        </div>

        <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-center text-slate-800 mb-5">
            Maturity levels (how we score)
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {maturityLevels.map((level) => (
              <span
                key={level.name}
                className={`px-4 py-2 rounded-full font-semibold text-sm ${level.color}`}
              >
                {level.name}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm ring-1 ring-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-
