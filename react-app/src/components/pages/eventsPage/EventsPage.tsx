import React from 'react';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import Section from '../../ui/Section';
import SectionHeader from '../../ui/SectionHeader';
import SectionDivider from '../../ui/SectionDivider';
import EventCard from '../../ui/EventCard';
import {
  CHAPTER_EVENTS,
  EVENTS_FEATURE_PHOTOS,
  EVENTS_SECTIONS,
} from '../../../content/eventsContent';

const EventsPage = () => {
  const upcoming = CHAPTER_EVENTS.filter((e) => !e.isPast);
  const past = CHAPTER_EVENTS.filter((e) => e.isPast);

  return (
    <PageTemplate page="events">
      <section className="ktp-page-hero ktp-page-hero--short ktp-page-hero--solid">
        <div className="ktp-container ktp-page-hero__content">
          <p className="ktp-eyebrow">Programming</p>
          <h1>What we've been doing.</h1>
          <p>Rush events, workshops, and professional programming from the chapter.</p>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow={EVENTS_SECTIONS.upcoming.eyebrow}
          title={EVENTS_SECTIONS.upcoming.title}
        />
        {upcoming.length === 0 ? (
          <div className="ktp-events-upcoming-placeholder">
            <p>{EVENTS_SECTIONS.upcoming.emptyMessage}</p>
            <p>
              Follow us on{' '}
              <a href="https://www.instagram.com/uchicagoktp" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>{' '}
              for updates.
            </p>
          </div>
        ) : (
          <div className="ktp-events-upcoming">
            {upcoming.map((event) => (
              <EventCard key={event.id} {...event} season={event.season} variant="featured" />
            ))}
            <p className="ktp-events-upcoming__note">
              {EVENTS_SECTIONS.upcoming.fallRushNote} Follow us on{' '}
              <a href="https://www.instagram.com/uchicagoktp" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>{' '}
              for updates.
            </p>
          </div>
        )}
      </Section>

      {past.length > 0 && (
        <>
          <SectionDivider variant="accent" />
          <Section variant="tinted" className="ktp-section--past-events">
            <SectionHeader
              eyebrow={EVENTS_SECTIONS.past.eyebrow}
              title={EVENTS_SECTIONS.past.title}
              description={EVENTS_SECTIONS.past.description}
            />

            <div className="ktp-past-events">
              <div className="ktp-past-events__photos" aria-hidden="false">
                {EVENTS_FEATURE_PHOTOS.map((photo) => (
                  <figure key={photo.src} className="ktp-past-events__photo">
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                  </figure>
                ))}
              </div>

              <div className="ktp-events-grid ktp-events-grid--past">
                {past.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    season={event.season}
                    variant="card"
                  />
                ))}
              </div>
            </div>
          </Section>
        </>
      )}
    </PageTemplate>
  );
};

export default EventsPage;
