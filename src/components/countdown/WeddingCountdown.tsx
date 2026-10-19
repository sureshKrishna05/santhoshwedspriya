import React from 'react';
import { weddingConfig } from '../../data/weddingConfig';
import { useCountdown } from '../../hooks/useCountdown';
import { FloralReveal } from '../shared/FloralReveal';

export const WeddingCountdown: React.FC = () => {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown(
    weddingConfig.countdown.targetDate
  );

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative py-16 sm:py-24 bg-[#123F35] text-[#FFF9EF] overflow-hidden"
      aria-label="Wedding Countdown"
    >
      {/* Background subtle kolam watermarks on left and right */}
      <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className="text-[#D9B875]">
          <path
            d="M50 10C50 30 90 50 90 50C90 50 50 70 50 90C50 70 10 50 10 50C10 50 50 30 50 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <circle cx="50" cy="20" r="3" fill="currentColor" />
          <circle cx="80" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="80" r="3" fill="currentColor" />
          <circle cx="20" cy="50" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className="text-[#D9B875]">
          <path
            d="M50 10C50 30 90 50 90 50C90 50 50 70 50 90C50 70 10 50 10 50C10 50 50 30 50 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <circle cx="50" cy="20" r="3" fill="currentColor" />
          <circle cx="80" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="80" r="3" fill="currentColor" />
          <circle cx="20" cy="50" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <FloralReveal direction="up" delay={0.1}>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#D9B875]">
            {weddingConfig.countdown.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FFF9EF] mt-1 mb-10">
            {weddingConfig.countdown.title}
          </h2>
        </FloralReveal>

        {isCompleted ? (
          <FloralReveal direction="up" delay={0.2}>
            <div className="p-8 rounded-2xl bg-[#204C3D]/60 border border-[#D9B875]/40 backdrop-blur-sm max-w-lg mx-auto">
              <span className="font-serif text-2xl sm:text-3xl text-[#D9B875]">
                Today We Celebrate!
              </span>
              <p className="font-sans text-sm text-[#FFF9EF]/80 mt-2 font-light">
                The sacred ceremonies have begun. Thank you for being part of our auspicious beginning.
              </p>
            </div>
          </FloralReveal>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {units.map((unit, idx) => (
              <FloralReveal key={unit.label} direction="up" delay={0.15 * (idx + 1)}>
                <div className="flex flex-col items-center">
                  {/* Circular Dial badge as in design mockup */}
                  <div className="w-20 h-20 sm:w-26 sm:h-26 rounded-full border border-[#D9B875]/40 bg-[#204C3D]/60 backdrop-blur-xs flex flex-col items-center justify-center shadow-[0_0_15px_rgba(217,184,117,0.1)] group hover:border-[#D9B875] transition-colors">
                    <span className="font-serif text-2xl sm:text-4xl font-normal text-[#FFF9EF] tracking-tight">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#D9B875] font-medium mt-3">
                    {unit.label}
                  </span>
                </div>
              </FloralReveal>
            ))}
          </div>
        )}

        {/* Auspicious Muhurtham Note */}
        <div className="mt-10 sm:mt-12 text-[11px] sm:text-xs uppercase tracking-widest text-[#D9B875]/80 font-light flex items-center justify-center gap-2">
          <span className="w-6 h-[1px] bg-[#D9B875]/40" />
          <span>Muhurtham: 15 December 2026 • 07:00 AM IST</span>
          <span className="w-6 h-[1px] bg-[#D9B875]/40" />
        </div>
      </div>
    </section>
  );
};
