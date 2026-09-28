import React from 'react';
import Button from './Button';

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  season?: string;
  image?: string;
  imageAlt?: string;
  registerUrl?: string;
  highlights?: readonly string[];
  visual?: 'hackathon';
  variant?: 'list' | 'card' | 'featured';
};

const EventGraphic: React.FC<{ visual: 'hackathon' }> = ({ visual }) => {
  if (visual !== 'hackathon') return null;

  return (
    <div className="ktp-event-card__graphic ktp-event-card__graphic--hackathon" aria-hidden="true">
      <div className="ktp-event-card__graphic-grid" />
      <span className="ktp-event-card__graphic-ring ktp-event-card__graphic-ring--1" />
      <span className="ktp-event-card__graphic-ring ktp-event-card__graphic-ring--2" />
      <div className="ktp-event-card__graphic-content">
        <span className="ktp-event-card__graphic-mark">KΘΠ</span>
        <p className="ktp-event-card__graphic-code">{'{ hack }'}</p>
        <p className="ktp-event-card__graphic-tagline">Build · Ship · Learn</p>
        <ul className="ktp-event-card__graphic-tags">
          <li>LLMs</li>
          <li>MLH</li>
          <li>Google</li>
        </ul>
      </div>
    </div>
  );
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  season,
  image,
  imageAlt,
  registerUrl,
  highlights,
  visual,
  variant = 'list',
}) => (
  <article
    className={`ktp-event-card ${
      variant === 'card'
        ? 'ktp-event-card--card'
        : variant === 'featured'
          ? 'ktp-event-card--featured'
          : ''
    }`}
  >
    {variant === 'featured' && visual && <EventGraphic visual={visual} />}
    {(variant === 'card' || (variant === 'featured' && !visual)) && image && (
      <img className="ktp-event-card__banner" src={image} alt={imageAlt || title} loading="lazy" />
    )}
    <div className="ktp-event-card__body">
      {season && <span className="ktp-event-card__season">{season}</span>}
      <p className="ktp-event-card__meta">
        {date} · {time} · {location}
      </p>
      <h3>{title}</h3>
      <p>{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="ktp-event-card__highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {registerUrl && (
        <div className="ktp-event-card__actions">
          <Button variant="primary" href={registerUrl} external>
            Register on Devpost
          </Button>
        </div>
      )}
    </div>
  </article>
);

export default EventCard;
