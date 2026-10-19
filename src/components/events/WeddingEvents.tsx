import React from 'react';
import { weddingEvents } from '../../data/weddingEvents';
import { WeddingEventCard } from './WeddingEventCard';
import { OrnamentalDivider } from '../shared/OrnamentalDivider';
import { FloralReveal } from '../shared/FloralReveal';

export const WeddingEvents: React.FC = () => {
  return (
    <section
      id="events"
      className="relative py-20 sm:py-28 bg-[#FFF9EF] border-t border-[#B88A43]/15 overflow-hidden"
      aria-label="Wedding Events and Schedule"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FloralReveal direction="up" delay={0.1}>
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#B88A43]">
              THE CELEBRATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A3024] font-normal mt-1 mb-2">
              Wedding Events
            </h2>
          </FloralReveal>

          <FloralReveal direction="up" delay={0.2}>
            <OrnamentalDivider size="sm" variant="lotus" />
          </FloralReveal>

          <FloralReveal direction="up" delay={0.3}>
            <p className="font-sans text-sm sm:text-base text-[#756957] font-light leading-relaxed">
              Four sacred occasions of music, blessings, sacred rituals, and joyous feastings, bringing our families together.
            </p>
          </FloralReveal>
        </div>

        {/* 4 Arched Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {weddingEvents.map((evt, idx) => (
            <FloralReveal
              key={evt.id}
              direction="up"
              delay={0.15 * (idx + 1)}
              className="h-full flex flex-col"
            >
              <WeddingEventCard event={evt} />
            </FloralReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
