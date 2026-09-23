import React, { useState } from 'react';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import Section from '../../ui/Section';
import SectionHeader from '../../ui/SectionHeader';
import SectionDivider from '../../ui/SectionDivider';
import EventCard from '../../ui/EventCard';
import { CHAPTER_EVENTS } from '../../../content/eventsContent';

const EventsPage = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const upcoming = CHAPTER_EVENTS.filter((e) => !e.isPast);
  const past = CHAPTER_EVENTS.filter((e) => e.isPast);

  const showUpcoming = filter === 'all' || filter === 'upcoming';
  const showPast = filter === 'all' || filter === 'past';

  return (
    <PageTemplate page="events">
      <section
        className="ktp-page-hero ktp-page-hero--short"
        style={{ backgroundImage: 'url(assets/img/rush/guysattable.jpg)' }}
      >
        <div className="ktp-page-hero__overlay" />
        <div className="ktp-container ktp-page-hero__content">
          <p className="ktp-eyebrow">Programming</p>
          <h1>What we've been doing.</h1>
          <p>Rush events, workshops, and professional programming from the chapter.</p>
        </div>
      </section>

      <Section>
        <div className="ktp-filter-tabs" role="tablist" aria-label="Event filter">
          {(['all', 'upcoming', 'past'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={filter === tab}
              className={`ktp-filter-tab ${filter === tab ? 'ktp-filter-tab--active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab === 'all' ? 'All' : tab === 'upcoming' ? 'Upcoming' : 'Past'}
            </button>
          ))}
        </div>

        {showUpcoming && (
          <>
            {filter !== 'all' && (
              <SectionHeader eyebrow="Upcoming" title="Coming up" />
            )}
            {upcoming.length === 0 ? (
              <p className="ktp-empty-state">
                No upcoming events scheduled. Follow us on{' '}
                <a href="https://www.instagram.com/uchicagoktp" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>{' '}
                for updates.
              </p>
            ) : (
              <div className="ktp-events-grid">
                {upcoming.map((event) => (
                  <EventCard key={event.id} {...event} season={event.season} />
                ))}
              </div>
            )}
          </>
        )}
      </Section>

      {showPast && past.length > 0 && (
        <>
          <SectionDivider variant="accent" />
          <Section variant="tinted">
            <SectionHeader eyebrow="Archive" title="Past programming" />
            <div className="ktp-events-grid">
              {past.map((event) => (
                <EventCard key={event.id} {...event} season={event.season} />
              ))}
            </div>
          </Section>
        </>
      )}
    </PageTemplate>
  );
};

export default EventsPage;
