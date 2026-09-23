import React from 'react';

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  imageAlt: string;
  season?: string;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  image,
  imageAlt,
  season,
}) => (
  <article className="ktp-event-card">
    <img className="ktp-event-card__image" src={image} alt={imageAlt} loading="lazy" />
    <div>
      <p className="ktp-event-card__meta">
        {season && `${season} · `}
        {date} · {time} · {location}
      </p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </article>
);

export default EventCard;
