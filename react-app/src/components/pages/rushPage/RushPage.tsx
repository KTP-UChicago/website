import React from 'react';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import Section from '../../ui/Section';
import SectionHeader from '../../ui/SectionHeader';
import SectionDivider from '../../ui/SectionDivider';
import Button from '../../ui/Button';
import {
  RUSH_CONFIG,
  RUSH_EVENTS,
  RUSH_FAQS,
  RUSH_REQUIREMENTS_FRAMED,
  RUSH_THEME,
} from '../../../content/rushContent';
import useNavigateToId from '../../../hooks/useNavigateToId/useNavigateToId';

const HERO_WAVES = (
  <svg
    className="ktp-rush-hero__waves"
    viewBox="0 0 1440 48"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M0 24 C240 48 480 0 720 24 C960 48 1200 0 1440 24 L1440 48 L0 48 Z"
      fill="currentColor"
    />
  </svg>
);

const RushPage = () => {
  useNavigateToId();
  const { status, season, applyUrl, applicationCtaLabel, heroImage, heroImageAlt, contacts } =
    RUSH_CONFIG;
  const { hero, sections, cta } = RUSH_THEME;
  const applicationsOpen = status === 'open' && applyUrl;

  return (
    <PageTemplate page="rush">
      <div className="ktp-rush-page">
        <section className="ktp-rush-hero">
          <div className="ktp-container ktp-rush-hero__grid">
            <div className="ktp-rush-hero__content">
              <p className="ktp-eyebrow">{hero.eyebrow(season)}</p>
              <h1>{hero.headline}</h1>
              <p>{hero.subheadline}</p>
              <div className="ktp-btn-group ktp-rush-hero__actions">
                {applicationsOpen ? (
                  <Button variant="primary" href={applyUrl} external>
                    Apply Now
                  </Button>
                ) : (
                  <span className="ktp-btn ktp-btn--primary ktp-btn--disabled">
                    {applicationCtaLabel}
                  </span>
                )}
              </div>
            </div>
            <figure className="ktp-rush-hero__photo">
              <img src={heroImage} alt={heroImageAlt} loading="eager" />
            </figure>
          </div>
          {HERO_WAVES}
        </section>

        <SectionDivider variant="wave" />

        <Section variant="tinted" className="ktp-section--rush-foam" id="events">
          <SectionHeader
            index={sections.events.index}
            eyebrow={sections.events.eyebrow}
            title={sections.events.title}
            description={RUSH_REQUIREMENTS_FRAMED}
          />
          <p className="ktp-rush-contacts">
            Questions? Reach out to{' '}
            {contacts.map((c, i) => (
              <span key={c.email}>
                {c.name} (<a href={`mailto:${c.email}`}>{c.email}</a>)
                {i < contacts.length - 1 ? ' or ' : '.'}
              </span>
            ))}
          </p>
          <div className="ktp-timeline ktp-timeline--alternating">
            {RUSH_EVENTS.map((event, index) => (
              <div
                key={event.id}
                className={`ktp-timeline__item ${
                  index % 2 === 0 ? 'ktp-timeline__item--left' : 'ktp-timeline__item--right'
                }`}
              >
                <div className="ktp-timeline__card">
                  <h3>{event.title}</h3>
                  {event.tagline && <p className="ktp-timeline__tagline">{event.tagline}</p>}
                  <p className="ktp-timeline__meta">
                    {event.date} · {event.time} · {event.location}
                  </p>
                  <p className="ktp-timeline__description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <SectionDivider variant="wave" />

        <Section variant="alt" id="faq">
          <SectionHeader
            index={sections.faq.index}
            eyebrow={sections.faq.eyebrow}
            title={sections.faq.title}
          />
          {RUSH_FAQS.map((faq, index) => (
            <details key={index} className="ktp-faq-item ktp-faq-item--voyage">
              <summary>{faq.question}</summary>
              <div className="ktp-faq-item__answer">{faq.answer}</div>
            </details>
          ))}
        </Section>

        <SectionDivider variant="wave" />
        <Section variant="dark" className="ktp-section--rush-embark">
          <div className="ktp-rush-embark">
            <div className="ktp-rush-embark__copy">
              <p className="ktp-rush-embark__eyebrow">{season}</p>
              <h2>{cta.headline}</h2>
              <p>{cta.subheadline(season)}</p>
            </div>
            <div className="ktp-rush-embark__actions">
              {applicationsOpen ? (
                <Button variant="primary" href={applyUrl} external>
                  Apply Now
                </Button>
              ) : (
                <span className="ktp-btn ktp-btn--primary ktp-btn--disabled">
                  {applicationCtaLabel}
                </span>
              )}
            </div>
          </div>
        </Section>
      </div>
    </PageTemplate>
  );
};

export default RushPage;
