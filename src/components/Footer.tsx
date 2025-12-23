import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { href: '#model', label: 'Model' },
    { href: '#how-we-work', label: 'How we deliver' },
    { href: '#pulse', label: 'Pulse' },
    { href: '#results', label: 'Outcomes' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#top" onClick={handleLinkClick} className="inline-flex items-center">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Gainify<span className="text-amber-600">.ai</span>
              </span>
            </a>
            <p className="mt-3 max-w-md text-sm text-slate-600">
              Operational AI. Real workflows. Measured outcomes.
            </p>
          </div>

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

        <div className="mt-10 pt-8 border-t border-stone-200 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Gainify.ai
        </div>
      </div>
    </footer>
  );
};

export default Footer;
