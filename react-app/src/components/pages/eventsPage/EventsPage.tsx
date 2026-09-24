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
  const past = CHAPTER_EVENTS.filter((e) => e.isPast);
  const pastHackathons = past.filter((e) => e.category === 'hackathon');
  const pastProgramming = past.filter((e) => e.category !== 'hackathon');

  return (
    <PageTemplate page="events">
      <section className="ktp-page-hero ktp-page-hero--short ktp-page-hero--solid">
        <div className="ktp-container ktp-page-hero__content">
          <p className="ktp-eyebrow">Programming</p>
          <h1>What we've been doing.</h1>
          <p>Rush events, workshops, and professional programming from the chapter.</p>
        </div>
      </section>

      {past.length > 0 && (
        <>
          <SectionDivider variant="accent" />
          <Section variant="tinted" className="ktp-section--past-events">
            {pastHackathons.length > 0 && (
              <div className="ktp-past-events__hackathons">
                <SectionHeader
                  eyebrow={EVENTS_SECTIONS.past.hackathons.eyebrow}
                  title={EVENTS_SECTIONS.past.hackathons.title}
                />
                {pastHackathons.map((event) => (
                  <EventCard key={event.id} {...event} season={event.season} variant="featured" />
                ))}
              </div>
            )}

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
                {pastProgramming.map((event) => (
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
