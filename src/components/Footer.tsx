import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <footer className="bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" onClick={handleLinkClick} className="inline-flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Gainify<span className="text-amber-600">.</span>ai
              </span>
            </a>
            <p className="mt-3 max-w-md text-sm text-slate-600">
              Strategic AI implementation for measurable outcomes — built to repeat, built to scale safely.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Gainify.ai
        </div>
      </div>
    </footer>
  );
};

export default Footer;
