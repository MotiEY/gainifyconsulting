// /components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const links = [
    { href: '#model', label: 'Model' },
    { href: '#methodology', label: 'How we deliver' },
    { href: '#pulse', label: 'Gainify Pulse' },
    { href: '#results', label: 'Outcomes' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" onClick={handleLinkClick} className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="w-9 h-9 rounded-xl ring-1 ring-amber-200 bg-gradient-to-br from-amber-500/90 via-amber-300/70 to-stone-100 flex items-center justify-center"
              >
                <span className="text-slate-900 font-extrabold text-sm">G</span>
              </span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Gainify<span className="text-amber-600">.</span>ai
              </span>
            </a>

            <p className="mt-3 max-w-md text-sm text-slate-600">
              Strategic AI implementation for teams that care about measurable outcomes, repeatable delivery, and scalable trust.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3 text-sm justify-items-center md:justify-items-start">
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

        <div className="mt-10 pt-8 border-t border-stone-200 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Gainify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
