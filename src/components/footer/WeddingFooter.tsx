import React from 'react';
import { weddingConfig } from '../../data/weddingConfig';
import { RSVPForm } from '../rsvp/RSVPForm';
import { LotusDecoration } from '../shared/LotusDecoration';
import { FloralReveal } from '../shared/FloralReveal';
import footerLamp from '../../assets/decorations/footer_lamp.png';

export const WeddingFooter: React.FC = () => {
  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Events', href: '#events' },
    { label: 'Venue', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="rsvp" className="relative bg-[#F7F2E8] pt-16 sm:pt-24 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dual Card Section: RSVP Card (Left) & Closing Experience Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left: RSVP Form Card */}
          <div className="lg:col-span-6 flex">
            <FloralReveal direction="up" delay={0.1} className="w-full flex">
              <RSVPForm />
            </FloralReveal>
          </div>

          {/* Right: Closing Experience Card (Deep Emerald with Brass Lamp) */}
          <div className="lg:col-span-6 flex">
            <FloralReveal direction="up" delay={0.2} className="w-full flex">
              <div className="w-full rounded-2xl bg-[#123F35] text-[#FFF9EF] p-6 sm:p-8 border border-[#B88A43]/30 shadow-md flex flex-col justify-between relative overflow-hidden group">
                {/* Background ambient gold glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#D9B875]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Top Section */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <LotusDecoration size={18} color="#D9B875" />
                    <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-[#D9B875]">
                      WITH LOVE
                    </span>
                  </div>

                  <h3 className="font-serif text-4xl sm:text-5xl font-normal text-[#FFF9EF] tracking-wider my-2">
                    {weddingConfig.couple.initials}
                  </h3>

                  <p className="font-serif text-xl sm:text-2xl text-[#D9B875] italic font-normal mt-2">
                    "{weddingConfig.footer.tagline}"
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#FFF9EF]/80 font-light mt-3 max-w-sm leading-relaxed">
                    {weddingConfig.footer.quote}
                  </p>

                  <div className="mt-4 inline-block px-3.5 py-1 rounded-full bg-[#204C3D]/80 border border-[#D9B875]/30 text-xs text-[#D9B875] font-serif">
                    15 December 2026 • Kochi, Kerala
                  </div>
                </div>

                {/* Bottom Section with Brass Lamp Visual */}
                <div className="relative z-10 pt-6 mt-6 border-t border-[#D9B875]/20 flex items-end justify-between">
                  <div>
                    <div className="font-serif text-sm text-[#FFF9EF]/90 font-medium">
                      {weddingConfig.footer.closingNote}
                    </div>
                    <div className="text-[11px] text-[#D9B875] font-script text-xl mt-0.5">
                      {weddingConfig.couple.namesJoined}
                    </div>
                  </div>

                  {/* Brass Kuthuvilakku Lamp with Jasmine */}
                  <div className="w-24 sm:w-28 shrink-0 transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={footerLamp}
                      alt="Traditional South Indian brass lamp with marigold and jasmine garlands"
                      className="w-full h-auto object-contain filter drop-shadow-[0_4px_10px_rgba(217,184,117,0.3)] animate-lamp-pulse"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </FloralReveal>
          </div>
        </div>

        {/* Global Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#B88A43]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#756957]">
          {/* Copyright & Cultural note */}
          <div className="flex items-center gap-2">
            <LotusDecoration size={14} color="#B88A43" />
            <span>
              A Living South Indian Wedding Experience • {weddingConfig.couple.namesJoined}
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex items-center space-x-5" aria-label="Footer Navigation">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:text-[#B88A43] transition-colors focus-visible:ring-1 focus-visible:ring-[#B88A43] outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
