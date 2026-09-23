import React from 'react';

interface NexoraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  light?: boolean;
}

export const NexoraLogo: React.FC<NexoraLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  light = true,
}) => {
  const iconSizes = {
    sm: 'w-6 h-5',
    md: 'w-8 h-7',
    lg: 'w-12 h-10',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Crown Emblem */}
      <svg
        className={`${iconSizes[size]} text-current shrink-0 transition-transform duration-300 group-hover:scale-105`}
        viewBox="0 0 40 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 2L26 12L37 7L32 26H8L3 7L14 12L20 2Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 26L20 18L32 26"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="18" r="1.5" fill="#FF1E27" />
      </svg>

      <div className="flex flex-col">
        <span
          className={`font-display font-bold uppercase tracking-wider leading-none ${textSizes[size]} ${
            light ? 'text-white' : 'text-neutral-900'
          }`}
        >
          NEXORA
        </span>
        {showSubtitle && (
          <span
            className={`font-display font-semibold uppercase mt-1 text-[#FF1E27] ${subSizes[size]}`}
          >
            PREMIUM KICKS
          </span>
        )}
      </div>
    </div>
  );
};
