import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#model', label: 'Model' },
    { href: '#methodology', label: 'How we deliver' },
    { href: '#pulse', label: 'Gainify Pulse' },
    { href: '#results', label: 'Outcomes' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (href && href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 w-full z-50 transition-all duration-300',
          isScrolled || isMenuOpen
            ? 'bg-white/85 backdrop-blur-md shadow-sm ring-1 ring-stone-200'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <a href="#home" onClick={handleLinkClick} className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Gainify<span className="text-amber-600">.</span>ai
              </span>
              <span className="hidden lg:inline text-sm font-semibold text-slate-500">
                Strategic AI Implementation
              </span>
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="ml-3 flex items-center gap-2">
                <a
                  href="#pulse"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-bold
                             text-slate-900 bg-white ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
                >
                  Take Pulse
                </a>
                <a
                  href="#reality-demo"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold
                             text-white bg-slate-900 hover:bg-slate-800 transition-all"
                >
                  Reality Demo
                </a>
              </div>
            </div>

            {/* Mobile button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-white/70
                           focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-300"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={[
          'fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-hidden={!isMenuOpen}
      >
        <div className="h-full bg-stone-50">
          <div className="pt-24 pb-10 px-6 flex flex-col h-full">
            <div className="text-center">
              <div className="text-xl font-extrabold tracking-tight text-slate-900">
                Gainify<span className="text-amber-600">.</span>ai
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-500">Strategic AI Implementation</div>
            </div>

            <nav className="mt-10 flex flex-col items-center justify-center flex-grow gap-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-800 hover:text-slate-900 text-2xl font-semibold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 grid gap-3">
              <a
                href="#reality-demo"
                onClick={handleLinkClick}
                className="w-full text-center bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold
                           hover:bg-slate-800 transition-all"
              >
                Reality Demo
              </a>
              <a
                href="#pulse"
                onClick={handleLinkClick}
                className="w-full text-center bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold
                           ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
              >
                Take Pulse
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
