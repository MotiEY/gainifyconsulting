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
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-md">
            <a href="#home" onClick={handleLinkClick} className="inline-flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Gainify<span className="text-amber-600">.</span>ai
              </span>
              <span className="hidden sm:inline text-sm font-semibold text-slate-500">
                Strategic AI Implementation
              </span>
            </a>

            <p className="mt-3 text-sm text-slate-600">
              Measurable outcomes. Repeatable delivery. Scalable trust.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Prefer starting with signal?{' '}
              <a
                href="#reality-demo"
                onClick={handleLinkClick}
                className="font-semibold text-slate-900 hover:underline"
              >
                Reality Demo
              </a>
              .
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3 text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleLinkClick}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Gainify.ai. All rights reserved.
          </div>
          <div className="text-xs text-slate-400">
            Built for quiet execution.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
