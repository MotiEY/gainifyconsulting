import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Updated to the new homepage anchors we discussed
  const navLinks = [
    { href: '#layers', label: '3 Layers' },
    { href: '#reality-demo', label: 'Reality Demo' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#how-we-work', label: 'How we work' },
    { href: '#pulse', label: 'Gainify Pulse' },
    { href: '#results', label: 'Results' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'bg-white/90 backdrop-blur-md shadow-sm ring-1 ring-slate-200'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#top" className="flex-shrink-0" onClick={handleLinkClick}>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Gainify
                <span className="text-indigo-600">Consulting</span>
              </span>
            </a>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Primary CTA should be Reality Demo */}
            <a
              href="#reality-demo"
              onClick={handleLinkClick}
              className="hidden md:inline-flex items-center justify-center bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all duration-300"
            >
              Book Reality Demo
            </a>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-label="Main menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <XIcon className="block h-6 w-6" />
                ) : (
                  <MenuIcon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 pb-8 px-6 flex flex-col h-full">
          <nav className="flex flex-col items-center justify-center flex-grow gap-y-6">
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

          <a
            href="#reality-demo"
            onClick={handleLinkClick}
            className="w-full text-center bg-slate-
