
import React from 'react';
import { CogsIcon, RocketIcon, TargetIcon, BarChartIcon } from './icons/Icons';

interface ResultCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, description }) => (
  <div className="bg-white border border-slate-200 p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-indigo-300">
    <div className="flex justify-center items-center w-20 h-20 bg-slate-100 rounded-full mx-auto mb-6 text-indigo-600">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Results: React.FC = () => {
  const resultsData = [
    { icon: <CogsIcon className="w-10 h-10" />, title: 'Process Automation', description: 'Reduce manual work and human error through intelligent automation.' },
    { icon: <RocketIcon className="w-10 h-10" />, title: 'Productivity Boost', description: 'Achieve a significant increase in work efficiency and execution speed.' },
    { icon: <TargetIcon className="w-10 h-10" />, title: 'Competitive Edge', description: 'Gain a substantial advantage over competitors in the market.' },
    { icon: <BarChartIcon className="w-10 h-10" />, title: 'Advanced Insights', description: 'Derive deep insights from your data for more informed decision-making.' },
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">What Do You Gain?</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Measurable outcomes that drive real business value and competitive advantage.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resultsData.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
