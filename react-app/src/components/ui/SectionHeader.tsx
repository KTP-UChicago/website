import React from 'react';

type SectionHeaderProps = {
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  index,
  title,
  description,
  centered = false,
}) => (
  <div className={`ktp-section-header ${centered ? 'ktp-section-header--center' : ''}`}>
    {(index || eyebrow) && (
      <p className="ktp-eyebrow">
        {index && <span className="ktp-eyebrow__index">{index}</span>}
        {eyebrow}
      </p>
    )}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

export default SectionHeader;
