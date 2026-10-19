import React from 'react';

interface LotusDecorationProps {
  className?: string;
  size?: number;
  color?: string;
}

export const LotusDecoration: React.FC<LotusDecorationProps> = ({
  className = '',
  size = 32,
  color = '#B88A43',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Outer lotus petals */}
      <path
        d="M24 6C24 6 22 16 16 22C10 28 4 30 4 30C4 30 11 34 16 32C13 38 15 42 24 44C33 42 35 38 32 32C37 34 44 30 44 30C44 30 38 28 32 22C26 16 24 6 24 6Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.1"
      />
      {/* Inner petals */}
      <path
        d="M24 14C24 14 20 22 18 28C21 30 27 30 30 28C28 22 24 14 24 14Z"
        stroke={color}
        strokeWidth="1.2"
        fill={color}
        fillOpacity="0.25"
      />
      {/* Center flame/pistil */}
      <circle cx="24" cy="27" r="2.5" fill={color} />
      {/* Fine radiating detail lines */}
      <path d="M24 29.5V36" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M20 31L16 35" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M28 31L32 35" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
};
