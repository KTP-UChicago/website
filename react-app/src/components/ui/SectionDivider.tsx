import React from 'react';

type SectionDividerProps = {
  variant?: 'line' | 'accent' | 'wave';
};

const WAVE_PATH = 'M0 0 H100 V40 L0 100 Z';

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'line' }) => {
  if (variant === 'wave') {
    return (
      <svg
        className="ktp-divider ktp-divider--wave"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d={WAVE_PATH} fill="currentColor" />
      </svg>
    );
  }

  return <div className={`ktp-divider ktp-divider--${variant}`} aria-hidden="true" />;
};

export default SectionDivider;
