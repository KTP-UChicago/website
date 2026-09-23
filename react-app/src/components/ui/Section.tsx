import React from 'react';

type SectionVariant = 'default' | 'alt' | 'dark' | 'tinted' | 'stats' | 'photo-band';

type SectionProps = {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

const Section: React.FC<SectionProps> = ({
  id,
  variant = 'default',
  className = '',
  children,
  fullWidth = false,
}) => {
  const variantClass = variant !== 'default' ? `ktp-section--${variant}` : '';

  return (
    <section id={id} className={`ktp-section ${variantClass} ${className}`.trim()}>
      {fullWidth ? children : <div className="ktp-container">{children}</div>}
    </section>
  );
};

export default Section;
