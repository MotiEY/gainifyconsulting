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
            ? 'bg-white/80 backdrop-blur-md ring-1 ring-stone-200'
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
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-3 py-2 text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-2">
                <a
                  href="#pulse"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[13px] font-bold
                             text-slate-900 bg-white/70 ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
                >
                  Pulse
                </a>
                <a
                  href="#reality-demo"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2 text-[13px] font-bold
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
                className="inline-flex items-center justify-center p-2 rounded-full text-slate-700 hover:text-slate-900
                           hover:bg-white/70 ring-1 ring-transparent hover:ring-stone-200 transition-all
                           focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-300"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <XIcon className="block h-5 w-5" /> : <MenuIcon className="block h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile overlay (scrim + side panel) */}
      <div
        className={[
          'fixed inset-0 z-40 md:hidden transition-opacity duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!isMenuOpen}
      >
        {/* scrim */}
        <div
          className="absolute inset-0 bg-slate-900/20"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* panel */}
        <div
          className={[
            'absolute right-0 top-0 h-full w-[86%] max-w-sm bg-stone-50',
            'ring-1 ring-stone-200 shadow-xl',
            'transform transition-transform duration-300 ease-out',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <div className="pt-24 pb-10 px-6 flex flex-col h-full">
            <div className="text-left">
              <div className="text-xl font-extrabold tracking-tight text-slate-900">
                Gainify<span className="text-amber-600">.</span>ai
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-500">
                Strategic AI Implementation
              </div>
            </div>

            <nav className="mt-10 flex flex-col gap-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-2 text-lg font-semibold text-slate-800 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-10 grid gap-3">
              <a
                href="#reality-demo"
                onClick={handleLinkClick}
                className="w-full text-center bg-slate-900 text-white px-7 py-3 rounded-full text-base font-bold
                           hover:bg-slate-800 transition-all"
              >
                Reality Demo
              </a>
              <a
                href="#pulse"
                onClick={handleLinkClick}
                className="w-full text-center bg-white text-slate-900 px-7 py-3 rounded-full text-base font-bold
                           ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
              >
                Pulse
              </a>
            </div>

            <div className="mt-auto pt-8 text-xs text-slate-400">
              {/* intentionally empty footer for a quieter “premium” feel */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
