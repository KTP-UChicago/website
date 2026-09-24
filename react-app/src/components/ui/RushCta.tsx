import React from 'react';
import { RUSH_CONFIG } from '../../content/rushContent';
import { HOME_SECTIONS } from '../../content/homeContent';
import Button from './Button';

const RushCta: React.FC = () => {
  const { status, applyUrl, interestUrl } = RUSH_CONFIG;
  const { title, description, learnLabel, applyLabel } = HOME_SECTIONS.rushCta;

  return (
    <div className="ktp-rush-cta">
      <div className="ktp-rush-cta__copy">
        <p className="ktp-rush-cta__eyebrow">
          <span aria-hidden="true">✦</span>
          Your next chapter
        </p>
        <h2>{title}</h2>
        <p className="ktp-rush-cta__description">{description}</p>
        <div className="ktp-rush-cta__details" aria-label="What you'll find at KTP">
          <span>Community</span>
          <span>Curiosity</span>
          <span>Growth</span>
        </div>
        <div className="ktp-btn-group ktp-rush-cta__actions">
          <Button variant="ghost" href="/rush">
            {learnLabel} <span aria-hidden="true">→</span>
          </Button>
          {status === 'open' && applyUrl && (
            <Button variant="primary" href={applyUrl} external>
              {applyLabel} <span aria-hidden="true">↗</span>
            </Button>
          )}
          {status === 'interest' && interestUrl && (
            <Button variant="primary" href={interestUrl} external>
              Interest Form <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>
      </div>

      <div className="ktp-rush-cta__visual">
        <div className="ktp-rush-cta__photo">
          <img
            src="/assets/img/community/full-chapter.jpeg"
            alt="The Kappa Theta Pi chapter together outside Harper Memorial Library"
            loading="lazy"
          />
        </div>
        <div className="ktp-rush-cta__note">
          <span className="ktp-rush-cta__note-mark" aria-hidden="true">
            KΘΠ
          </span>
          <span>Come meet the people behind the letters.</span>
        </div>
      </div>
    </div>
  );
};

export default RushCta;
