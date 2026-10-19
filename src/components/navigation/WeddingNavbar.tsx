import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { weddingConfig } from '../../data/weddingConfig';
import { LotusDecoration } from '../shared/LotusDecoration';

export const WeddingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Events', href: '#events' },
    { label: 'Venue', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9EF]/95 backdrop-blur-md shadow-sm border-b border-[#B88A43]/15 py-3'
          : 'bg-[#FFF9EF]/60 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-[#B88A43] focus-visible:rounded p-1 outline-none"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-full border border-[#B88A43]/40 flex items-center justify-center bg-[#FFF9EF] group-hover:border-[#B88A43] transition-colors">
            <LotusDecoration size={18} color="#B88A43" />
          </div>
          <span className="font-serif tracking-widest text-lg font-medium text-[#4A3024] group-hover:text-[#B88A43] transition-colors">
            {weddingConfig.couple.initials}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#756957] hover:text-[#B88A43] transition-colors duration-200 relative py-1 focus-visible:ring-2 focus-visible:ring-[#B88A43] focus-visible:rounded outline-none group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B88A43] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#invitation"
            onClick={(e) => handleLinkClick(e, '#invitation')}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#B88A43] text-[#FFF9EF] hover:bg-[#9E7333] transition-all duration-300 text-xs uppercase tracking-widest font-medium shadow-sm hover:shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B88A43] outline-none"
          >
            <span>You're Invited</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#4A3024] hover:text-[#B88A43] focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9EF] border-b border-[#B88A43]/20 shadow-lg px-6 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm uppercase tracking-widest font-medium text-[#4A3024] hover:text-[#B88A43] py-2 border-b border-[#B88A43]/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#invitation"
              onClick={(e) => handleLinkClick(e, '#invitation')}
              className="mt-3 text-center py-2.5 rounded-full bg-[#B88A43] text-[#FFF9EF] text-xs uppercase tracking-widest font-medium"
            >
              You're Invited →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
