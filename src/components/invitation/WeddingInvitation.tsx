import React from 'react';
import { weddingConfig } from '../../data/weddingConfig';
import { OrnamentalDivider } from '../shared/OrnamentalDivider';
import { FloralReveal } from '../shared/FloralReveal';
import invitationArch from '../../assets/decorations/invitation_arch.png';

export const WeddingInvitation: React.FC = () => {

  const handleScrollToRsvp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const rsvpElement = document.querySelector('#rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="invitation"
      className="relative py-20 sm:py-28 bg-[#FFF9EF] border-t border-[#B88A43]/15 overflow-hidden z-10"
      aria-label="Formal Wedding Invitation"
    >
      {/* Background delicate kolam watermark pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#B88A43_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heartfelt Invitation Text */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-5">
            <FloralReveal direction="up" delay={0.1}>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-1">
                <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#B88A43]">
                  {weddingConfig.invitation.eyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A3024] font-normal leading-tight">
                {weddingConfig.invitation.title}
              </h2>
            </FloralReveal>

            <FloralReveal direction="up" delay={0.2}>
              <OrnamentalDivider className="lg:mx-0 my-2" size="sm" variant="lotus" />
            </FloralReveal>

            <FloralReveal direction="up" delay={0.3}>
              <p className="font-sans text-sm sm:text-base text-[#756957] leading-relaxed font-light">
                {weddingConfig.invitation.message}
              </p>
            </FloralReveal>

            {/* Date and Location Badge */}
            <FloralReveal direction="up" delay={0.4}>
              <div className="p-4 rounded-xl bg-[#F7F2E8] border border-[#B88A43]/20 shadow-xs max-w-md mx-auto lg:mx-0">
                <div className="font-serif text-lg sm:text-xl text-[#123F35] font-medium">
                  {weddingConfig.event.displayDate}
                </div>
                <div className="text-xs uppercase tracking-widest text-[#756957] mt-0.5">
                  {weddingConfig.venue.name} • {weddingConfig.event.fullLocation}
                </div>
              </div>
            </FloralReveal>

            {/* Join Our Celebration CTA Button */}
            <FloralReveal direction="up" delay={0.5}>
              <div className="pt-2">
                <a
                  href="#rsvp"
                  onClick={handleScrollToRsvp}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-[#B88A43] text-[#4A3024] hover:bg-[#B88A43] hover:text-[#FFF9EF] transition-all duration-300 text-xs uppercase tracking-widest font-medium shadow-xs hover:shadow focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none group"
                >
                  <span>{weddingConfig.invitation.ctaText}</span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </a>
              </div>
            </FloralReveal>
          </div>

          {/* Right Column: Editorial Arch with Traditional Visual */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <FloralReveal direction="left" delay={0.3} className="w-full max-w-lg">
              <div className="relative p-2 sm:p-3 rounded-t-[180px] rounded-b-2xl border border-[#B88A43]/30 bg-[#F7F2E8] shadow-md group">
                {/* Outer ornamental gold arch border */}
                <div className="rounded-t-[172px] rounded-b-xl overflow-hidden border border-[#B88A43]/20 relative">
                  <img
                    src={invitationArch}
                    alt="South Indian wedding couple exchanging traditional jasmine garlands with ceremonial brass lamp"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  {/* Subtle inner gold vignette */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#B88A43]/20 rounded-t-[172px] rounded-b-xl pointer-events-none" />
                </div>

                {/* Decorative floating badge */}
                <div className="absolute -bottom-4 right-6 sm:right-10 bg-[#FFF9EF] border border-[#B88A43]/30 px-4 py-1.5 rounded-full shadow-sm text-[10px] uppercase tracking-widest text-[#B88A43] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A43]" />
                  <span>Sacred Vows</span>
                </div>
              </div>
            </FloralReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
