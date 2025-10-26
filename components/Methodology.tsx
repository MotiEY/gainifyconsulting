import React, { ReactNode, useRef, useEffect } from 'react';
import { SearchIcon, CodeIcon, LightningBoltIcon } from './icons/Icons';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
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
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

  return (
    <div ref={cardRef} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0" style={{ animationDelay: delay }}>
      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Methodology: React.FC = () => {
    const featuresData = [
    {
      icon: <SearchIcon className="w-7 h-7" />,
      title: 'Strategic Discovery',
      description: 'Pinpoint the specific AI opportunities relevant to your business through comprehensive analysis and assessment.',
      delay: '0ms'
    },
    {
      icon: <CodeIcon className="w-7 h-7" />,
      title: 'Purpose-Built Solutions',
      description: 'Build AI solutions tailored precisely to your unique needs and processes, ensuring maximum impact and adoption.',
      delay: '200ms'
    },
    {
      icon: <LightningBoltIcon className="w-7 h-7" />,
      title: 'Amplify Results',
      description: 'Support you through implementation and continuously enhance your AI capabilities for sustained growth.',
      delay: '400ms'
    },
  ];

    return (
        <section id="methodology" className="py-20 bg-white">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Proven Method</h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        A systematic approach to AI transformation that connects business leadership, technology, and culture.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {featuresData.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                  ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
