import React from 'react';
import { LotusDecoration } from './LotusDecoration';

interface OrnamentalDividerProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'lotus' | 'kolam' | 'minimal';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  color = '#B88A43',
  size = 'md',
  variant = 'lotus',
}) => {
  const lotusSize = size === 'sm' ? 20 : size === 'lg' ? 36 : 28;

  return (
    <div
      className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto py-3 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Left fine gold thread */}
      <div className="flex-1 flex items-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B88A43]/50 to-[#B88A43]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#B88A43] shrink-0 ml-1 opacity-70" />
      </div>

      {/* Center Motif */}
      {variant === 'lotus' && (
        <LotusDecoration size={lotusSize} color={color} />
      )}

      {variant === 'kolam' && (
        <svg width={lotusSize} height={lotusSize} viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="3" fill={color} />
          <path
            d="M16 4C16 10 28 16 28 16C28 16 16 22 16 28C16 22 4 16 4 16C4 16 16 10 16 4Z"
            stroke={color}
            strokeWidth="1.2"
            fill={color}
            fillOpacity="0.1"
          />
          <circle cx="16" cy="7" r="1.5" fill={color} />
          <circle cx="25" cy="16" r="1.5" fill={color} />
          <circle cx="16" cy="25" r="1.5" fill={color} />
          <circle cx="7" cy="16" r="1.5" fill={color} />
        </svg>
      )}

      {variant === 'minimal' && (
        <div className="w-2 h-2 rotate-45 border border-[#B88A43] bg-[#B88A43]/20" />
      )}

      {/* Right fine gold thread */}
      <div className="flex-1 flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#B88A43] shrink-0 mr-1 opacity-70" />
        <div className="w-full h-[1px] bg-gradient-to-r from-[#B88A43] via-[#B88A43]/50 to-transparent" />
      </div>
    </div>
  );
};
