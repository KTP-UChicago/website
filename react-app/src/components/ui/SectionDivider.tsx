import React from 'react';

type SectionDividerProps = {
  variant?: 'line' | 'accent' | 'wave';
};

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'line' }) => (
  <div className={`ktp-divider ktp-divider--${variant}`} aria-hidden="true" />
);

export default SectionDivider;
