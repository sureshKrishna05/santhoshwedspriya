import React from 'react';
import { weddingConfig } from '../../data/weddingConfig';
import { MapPin, Navigation, Compass, Waves } from 'lucide-react';
import { AddToCalendarButton } from './AddToCalendarButton';
import { FloralReveal } from '../shared/FloralReveal';
import venuePhoto from '../../assets/decorations/venue_photo.png';

export const VenueSection: React.FC = () => {
  return (
    <section
      id="venue"
      className="relative py-20 sm:py-28 bg-[#123F35] text-[#FFF9EF] overflow-hidden"
      aria-label="Wedding Venue"
    >
      {/* Background ambient lighting and delicate water wave patterns */}
      <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-[#204C3D]/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Venue Narrative & Details */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <FloralReveal direction="right" delay={0.1}>
              <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#D9B875]">
                THE VENUE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FFF9EF] mt-1 mb-3">
                A Place Close to Our Hearts
              </h2>
            </FloralReveal>

            <FloralReveal direction="right" delay={0.2}>
              <p className="font-sans text-sm sm:text-base text-[#FFF9EF]/80 font-light leading-relaxed">
                {weddingConfig.venue.description}
              </p>
            </FloralReveal>

            {/* Venue Address Box */}
            <FloralReveal direction="right" delay={0.3}>
              <div className="p-5 rounded-2xl bg-[#204C3D]/50 border border-[#D9B875]/25 backdrop-blur-sm space-y-2.5 max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-[#D9B875]/15 text-[#D9B875] shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div className="text-left">
                    <div className="font-serif text-lg text-[#FFF9EF] font-medium">
                      {weddingConfig.venue.name}
                    </div>
                    <div className="text-xs text-[#D9B875] font-serif italic mb-1">
                      {weddingConfig.venue.subtitle}
                    </div>
                    <div className="text-xs text-[#FFF9EF]/75 font-sans leading-relaxed">
                      {weddingConfig.venue.address}, {weddingConfig.venue.city}, {weddingConfig.venue.state}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#D9B875]/15 flex items-center justify-between text-xs text-[#FFF9EF]/70">
                  <span className="flex items-center gap-1.5">
                    <Compass size={13} className="text-[#D9B875]" />
                    <span>Ferry Check-in: {weddingConfig.venue.checkInTime}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Waves size={13} className="text-[#D9B875]" />
                    <span>Vembanad Lake</span>
                  </span>
                </div>
              </div>
            </FloralReveal>

            {/* Action Buttons: Get Directions & Add to Calendar */}
            <FloralReveal direction="right" delay={0.4}>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={weddingConfig.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B88A43] text-[#FFF9EF] hover:bg-[#D9B875] hover:text-[#123F35] transition-all duration-300 text-xs uppercase tracking-widest font-medium shadow-sm focus-visible:ring-2 focus-visible:ring-[#D9B875] outline-none"
                >
                  <Navigation size={13} />
                  <span>Get Directions</span>
                </a>

                <AddToCalendarButton
                  className="text-[#FFF9EF]"
                  title="Srinath & Ananya Wedding Celebration"
                  location={`${weddingConfig.venue.name}, ${weddingConfig.venue.city}, ${weddingConfig.venue.state}`}
                  description="Wedding celebrations of Srinath & Ananya at Coconut Lagoon Resort, Kumarakom, Kerala."
                  startDate="2026-12-15T07:00:00"
                  endDate="2026-12-15T22:00:00"
                  label="Add to Calendar"
                />
              </div>
            </FloralReveal>
          </div>

          {/* Right Column: Deckle-Edged Architectural Photo Frame */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <FloralReveal direction="left" delay={0.3} className="w-full max-w-lg">
              <div className="relative p-3 sm:p-4 rounded-3xl bg-[#204C3D]/60 border border-[#D9B875]/35 shadow-xl group">
                {/* Torn paper / Deckle edge styled frame as in mockup */}
                <div className="rounded-2xl overflow-hidden border border-[#D9B875]/25 relative bg-[#FFF9EF]">
                  <img
                    src={venuePhoto}
                    alt="Coconut Lagoon Resort Kumarakom waterfront architecture"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle golden sunset gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123F35]/70 via-transparent to-transparent opacity-50" />
                </div>

                {/* Location overlay pin and badge */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#FFF9EF]">
                    <div className="w-2 h-2 rounded-full bg-[#D9B875] animate-pulse" />
                    <span className="font-serif text-sm tracking-wide font-medium">
                      {weddingConfig.venue.name}
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-[#D9B875]">
                    Kumarakom, Kerala
                  </span>
                </div>
              </div>
            </FloralReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
