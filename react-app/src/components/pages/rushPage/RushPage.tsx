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

const COMPASS_ROSE = (
  <svg
    className="ktp-rush-hero__compass"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    <circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    <path d="M60 8 L64 52 L60 60 L56 52 Z" fill="currentColor" opacity="0.5" />
    <path d="M60 112 L56 68 L60 60 L64 68 Z" fill="currentColor" opacity="0.3" />
    <path d="M8 60 L52 56 L60 60 L52 64 Z" fill="currentColor" opacity="0.3" />
    <path d="M112 60 L68 64 L60 60 L68 56 Z" fill="currentColor" opacity="0.3" />
    <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.6" />
  </svg>
);

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
  const { status, season, applyUrl, bannerImage, communityImage, communityImageAlt, contacts } =
    RUSH_CONFIG;
  const { hero, sections, cta, highlights } = RUSH_THEME;

  return (
    <PageTemplate page="rush">
      <div className="ktp-rush-page">
        <section
          className="ktp-page-hero ktp-page-hero--voyage"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="ktp-page-hero__overlay ktp-page-hero__overlay--voyage" />
          {COMPASS_ROSE}
          <div className="ktp-container ktp-page-hero__content">
            <p className="ktp-eyebrow">{hero.eyebrow(season)}</p>
            <h1>{hero.headline}</h1>
            <p>{hero.subheadline}</p>
            {status === 'open' && applyUrl && (
              <div className="ktp-btn-group" style={{ marginTop: 'var(--space-lg)' }}>
                <Button variant="primary" href={applyUrl} external>
                  Apply Now
                </Button>
              </div>
            )}
          </div>
          {HERO_WAVES}
        </section>

        <Section id="apply">
          <div className="ktp-split">
            <div>
              <SectionHeader
                index={sections.about.index}
                eyebrow={sections.about.eyebrow}
                title={sections.about.title}
              />
              <ul className="ktp-rush-highlights ktp-rush-highlights--voyage">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{sections.about.body}</p>
            </div>
            <div className="ktp-split__image">
              <img src={communityImage} alt={communityImageAlt} loading="lazy" />
            </div>
          </div>
        </Section>

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
          <div className="ktp-timeline ktp-timeline--voyage">
            {RUSH_EVENTS.map((event) => (
              <div key={event.id} className="ktp-timeline__item ktp-timeline__item--with-image">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  className="ktp-timeline__thumb"
                  loading="lazy"
                />
                <div>
                  <h3>{event.title}</h3>
                  {event.tagline && <p className="ktp-timeline__tagline">{event.tagline}</p>}
                  <p className="ktp-timeline__meta">
                    {event.date} · {event.time} · {event.location}
                  </p>
                  <p>{event.description}</p>
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

        {status === 'open' && applyUrl && (
          <>
            <SectionDivider variant="wave" />
            <Section variant="dark" className="ktp-section--rush-embark">
              <div className="ktp-rush-cta ktp-rush-cta--embark">
                <h2>{cta.headline}</h2>
                <p>{cta.subheadline(season)}</p>
                <Button variant="primary" href={applyUrl} external>
                  Apply Now
                </Button>
              </div>
            </Section>
          </>
        )}
      </div>
    </PageTemplate>
  );
};

export default RushPage;
