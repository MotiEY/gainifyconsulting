import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const links = [
    { href: '#layers', label: '3 Layers' },
    { href: '#reality-demo', label: 'Reality Demo' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#how-we-work', label: 'How we work' },
    { href: '#pulse', label: 'Pulse' },
    { href: '#results', label: 'Results' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white text-slate-600 py-14 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#top" onClick={handleLinkClick} className="inline-flex items-center">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Gainify<span className="text-indigo-600">Consulting</span>
              </span>
            </a>
            <p className="mt-3 max-w-md text-sm text-slate-600">
              We turn AI into a repeatable business capability — measurable value, a delivery factory, and trust you can scale.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#reality-demo"
                onClick={handleLinkClick}
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Book Reality Demo
              </a>
              <a
                href="#pulse"
                onClick={handleLinkClick}
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition"
              >
                Take Pulse
              </a>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-sm justify-items-center md:justify-items-start">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleLinkClick}
                  className="hover:text-slate-900 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Gainify Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
