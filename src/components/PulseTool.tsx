import React, { useState } from 'react';
import { UsersIcon, ShieldCheckIcon, ClipboardListIcon, ChipIcon, CogsIcon, DatabaseIcon } from './icons/Icons';

const showcaseData = {
  'Culture & People': {
    icon: <UsersIcon className="w-8 h-8" />,
    strategicLens: [
      "Analyzing existing communication channels & feedback loops.",
      "Identifying key influencers and early adopters.",
      "Assessing the organization's readiness for change."
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Identify & engage early adopters through a small, high-visibility pilot.", "Share initial AI success stories internally."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Launch 'AI Office Hours' for Q&A & demos.", "Add AI awareness to onboarding & learning programs."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Link AI contributions to recognition & reviews.", "Build AI champions network across teams."] },
    ],
  },
  'Strategy & Governance': {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    strategicLens: [
      "Clarity of AI vision & business alignment",
      "Decision-making processes & ownership",
      "Risk, ethics, and compliance guardrails"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Define AI ambition statement linked to business goals.", "Assign an executive AI sponsor."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Establish AI governance committee.", "Draft initial risk & compliance guidelines."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Integrate AI metrics into corporate scorecards.", "Conduct quarterly governance reviews."] },
    ],
  },
  'Usage & Adoption': {
    icon: <ClipboardListIcon className="w-8 h-8" />,
    strategicLens: [
      "Breadth of AI tool use across departments",
      "Integration into day-to-day work",
      "User confidence and trust in AI outcomes"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Audit existing AI/automation usage.", "Highlight quick efficiency gains."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Provide targeted training for top-use cases.", "Create internal AI playbook with examples."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Deploy org-wide AI usage guidelines."] },
    ],
  },
  'Systems & Technology': {
    icon: <ChipIcon className="w-8 h-8" />,
    strategicLens: [
      "Core infrastructure readiness for AI",
      "Interoperability between systems",
      "Security and compliance standards"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Map critical systems and data flows.", "Identify immediate integration blockers."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Modernize priority systems for AI readiness.", "Introduce AI-friendly APIs/integrations."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Embed AI into core platforms."] },
    ],
  },
  'Processes & Workflows': {
    icon: <CogsIcon className="w-8 h-8" />,
    strategicLens: [
      "Where manual work slows the business",
      "Opportunities for automation",
      "AI enablement in high-impact processes"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Identify top 3 processes to automate.", "Run small automation pilots."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Integrate AI into workflows via RPA or native platform features.", "Document best practices."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Roll out automation at scale."] },
    ],
  },
  'Data Readiness': {
    icon: <DatabaseIcon className="w-8 h-8" />,
    strategicLens: [
      "Data quality, completeness, and accessibility",
      "Centralization and governance of data",
      "Ability to feed AI models effectively"
    ],
    phases: [
      { phase: 'Quick Wins', timeframe: '0–30 days', actions: ["Audit key datasets for quality issues.", "Address quick data hygiene fixes."] },
      { phase: 'Build Capability', timeframe: '1–3 months', actions: ["Establish data governance policies.", "Centralize priority datasets in accessible platforms."] },
      { phase: 'Scale & Embed', timeframe: '3–6 months', actions: ["Create enterprise data catalog."] },
    ],
  }
};

const RadarChart = () => (
    <div className="relative w-full max-w-sm mx-auto aspect-square">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Pentagon Grid */}
            {[...Array(5)].map((_, i) => (
                <polygon key={i} points="50,10 95,40 80,90 20,90 5,40" fill="none" stroke="#E5E7EB" strokeWidth="0.5" transform={`scale(${(5 - i) / 5}) translate(${i * 10}, ${i * 6})`} transform-origin="50 50" />
            ))}
            {/* Spokes */}
            <line x1="50" y1="50" x2="50" y2="10" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="95" y2="40" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="80" y2="90" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="20" y2="90" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="5" y2="40" stroke="#E5E7EB" strokeWidth="0.5" />

            {/* Data Polygons */}
            <polygon points="50,25 80,45 70,70 35,75 20,40" fill="rgba(239, 121, 66, 0.4)" stroke="#EF7942" strokeWidth="1" />
            <polygon points="50,15 90,40 78,85 25,80 10,45" fill="rgba(99, 102, 241, 0.4)" stroke="#6366F1" strokeWidth="1" />
            
            {/* Labels */}
            <text x="50" y="7" textAnchor="middle" fontSize="5" fill="#6B7280">Strategy</text>
            <text x="98" y="42" textAnchor="end" fontSize="5" fill="#6B7280">Tools</text>
            <text x="83" y="98" textAnchor="middle" fontSize="5" fill="#6B7280">Skills</text>
            <text x="17" y="98" textAnchor="middle" fontSize="5" fill="#6B7280">Impact</text>
            <text x="2" y="42" textAnchor="start" fontSize="5" fill="#6B7280">Data</text>
        </svg>
    </div>
);


const PulseTool: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Culture & People');
  const activeContent = showcaseData[activeTab as keyof typeof showcaseData];

  const dimensions = Object.keys(showcaseData);

  const maturityLevels = [
    { name: 'Scaler', color: 'bg-green-100 text-green-800' },
    { name: 'Builder', color: 'bg-blue-100 text-blue-800' },
    { name: 'Explorer', color: 'bg-purple-100 text-purple-800' },
    { name: 'AI-Curious', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'AI-Dismissive', color: 'bg-slate-100 text-slate-800' },
  ];

  return (
    <section id="pulse" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Gainify Pulse</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Gainify Pulse is our proprietary diagnostic tool. It assesses an organization's AI maturity across six critical dimensions, providing a clear roadmap for targeted, high-impact interventions.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
            <h3 className="text-xl font-bold text-center text-slate-800 mb-6">Maturity Levels</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {maturityLevels.map(level => (
                    <span key={level.name} className={`px-4 py-2 rounded-full font-semibold text-sm ${level.color}`}>
                        {level.name}
                    </span>
                ))}
            </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Methodology Showcase</h3>
              <p className="max-w-2xl mx-auto text-slate-600">See how our strategic methodology shapes AI implementation.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {dimensions.map(dim => (
              <button
                key={dim}
                onClick={() => setActiveTab(dim)}
                className={`flex-grow sm:flex-grow-0 flex items-center gap-2 px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === dim ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {showcaseData[dim as keyof typeof showcaseData].icon}
                <span>{dim}</span>
              </button>
            ))}
          </div>
          
          <div className="bg-slate-50 p-6 rounded-xl">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <h4 className="font-bold text-lg text-indigo-700 mb-4">Gainify's Strategic Lens</h4>
                      <ul className="space-y-3">
                          {activeContent.strategicLens.map((item, i) => (
                              <li key={i} className="flex items-start">
                                  <span className="text-indigo-500 mr-3 mt-1">◆</span>
                                  <span className="text-slate-600">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg text-indigo-700 mb-4">Key Actions</h4>
                    <div className="space-y-4">
                      {activeContent.phases.map((phase, i) => (
                        <div key={i}>
                          <h5 className="font-semibold text-slate-800">{phase.phase} <span className="text-sm text-slate-500 font-normal ml-2">({phase.timeframe})</span></h5>
                          <ul className="mt-2 pl-5 space-y-1">
                            {phase.actions.map((action, j) => (
                              <li key={j} className="flex items-start text-sm text-slate-600">
                                <span className="text-indigo-500 mr-2 mt-1">▶</span>
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
                  <RadarChart />
                  <div className="flex items-center justify-center gap-6 mt-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-orange-400 border-2 border-orange-600 mr-2"></div>
                      <span className="text-sm font-medium text-slate-600">Current</span>
                    </div>
                     <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-indigo-400 border-2 border-indigo-600 mr-2"></div>
                      <span className="text-sm font-medium text-slate-600">Target</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseTool;
