import React, { useEffect, useRef, useState } from 'react';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import Section from '../../ui/Section';
import SectionHeader from '../../ui/SectionHeader';
import SectionDivider from '../../ui/SectionDivider';
import Button from '../../ui/Button';
import EventCard from '../../ui/EventCard';
import RushCta from '../../ui/RushCta';
import { HOME_HERO, HOME_PILLARS, HOME_SECTIONS } from '../../../content/homeContent';
import { COMMUNITY_PHOTOS } from '../../../content/siteConfig';
import { CHAPTER_EVENTS, EVENTS_UPCOMING_PHOTO } from '../../../content/eventsContent';
import { COMPANY_LOGOS } from '../../../content/companies';
import { buildSiteStats, SiteStat } from '../../../utils/statsUtils';

const HomePage = () => {
  const [stats, setStats] = useState<SiteStat[]>([]);
  const [activePillar, setActivePillar] = useState(0);
  const heroRevealRef = useRef<HTMLElement>(null);

  useEffect(() => {
    buildSiteStats().then(setStats);
  }, []);

  useEffect(() => {
    const reveal = heroRevealRef.current;
    if (!reveal) return undefined;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      reveal.style.setProperty('--hero-position', '55%');
      reveal.style.setProperty('--hero-stats-offset', '0%');
      reveal.style.setProperty('--hero-stats-opacity', '1');
      return undefined;
    }

    let frame = 0;
    const updateReveal = () => {
      const scrollDistance = Math.max(window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -reveal.getBoundingClientRect().top / scrollDistance));
      const statsProgress = Math.min(1, Math.max(0, (progress - 0.08) / 0.18));
      reveal.style.setProperty('--hero-position', `${progress * 100}%`);
      reveal.style.setProperty('--hero-stats-offset', `${(1 - statsProgress) * 100}%`);
      reveal.style.setProperty('--hero-stats-opacity', `${statsProgress}`);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateReveal);
    };

    updateReveal();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const upcomingEvents = CHAPTER_EVENTS.filter((e) => !e.isPast);

  return (
    <PageTemplate page="home">
      {/* Immersive hero */}
      <section ref={heroRevealRef} className="ktp-hero-reveal">
        <div className="ktp-hero-reveal__stage">
          <div className="ktp-hero-immersive">
            <img
              className="ktp-hero-immersive__image"
              src={COMMUNITY_PHOTOS.hero}
              alt="KTP chapter members gathered in front of the University of Chicago"
              draggable={false}
            />
            <div className="ktp-container ktp-hero-immersive__content">
              <div className="ktp-hero-immersive__copy">
                <p className="ktp-hero-immersive__eyebrow">UChicago · Professional Technology Fraternity</p>
                <h1>{HOME_HERO.headline}</h1>
                <p className="ktp-hero-immersive__sub">{HOME_HERO.subheadline}</p>
                <div className="ktp-btn-group ktp-hero-immersive__actions">
                  <a className="ktp-scroll-cue" href="#why-ktp">
                    <span>Scroll down</span>
                    <span className="ktp-scroll-cue__arrow" aria-hidden="true">↓</span>
                  </a>
                  <Button variant="secondary" href={HOME_HERO.secondaryCta.href}>
                    {HOME_HERO.secondaryCta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {stats.length > 0 && (
            <Section variant="stats" className="ktp-hero-reveal__stats">
              <div className="ktp-stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="ktp-stat">
                    <div className="ktp-stat__value">{stat.value}</div>
                    <div className="ktp-stat__label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
      </section>

      <SectionDivider variant="accent" />

      {/* Why KTP */}
      <Section id="why-ktp" variant="tinted" className="ktp-section--pillars">
        <SectionHeader
          index="01"
          eyebrow="Why KTP"
          title="Professional growth, technical depth, and real community."
        />
        <div className="ktp-pillars-browser">
          <div className="ktp-pillars-browser__sidebar" aria-label="The five pillars of KTP">
            {HOME_PILLARS.map((pillar, i) => (
              <button
                key={pillar.title}
                type="button"
                className={`ktp-pillars-browser__tab ${
                  activePillar === i ? 'ktp-pillars-browser__tab--active' : ''
                }`}
                aria-pressed={activePillar === i}
                aria-controls="active-pillar-details"
                onClick={() => setActivePillar(i)}
              >
                <span className="ktp-pillars-browser__number" aria-hidden="true">
                  0{i + 1}
                </span>
                <span>{pillar.title}</span>
                <span className="ktp-pillars-browser__arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <article
            id="active-pillar-details"
            className="ktp-pillars-browser__panel"
            aria-live="polite"
          >
            <p className="ktp-pillars-browser__eyebrow">
              Pillar {String(activePillar + 1).padStart(2, '0')}
            </p>
            <h3>{HOME_PILLARS[activePillar].title}</h3>
            <p className="ktp-pillars-browser__description">
              {HOME_PILLARS[activePillar].description}
            </p>
            <ul>
              {HOME_PILLARS[activePillar].items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="ktp-pillars-browser__mark" aria-hidden="true">KΘΠ</span>
          </article>
        </div>
      </Section>

      <SectionDivider variant="line" />

      {/* Events */}
      <Section variant="alt">
        <SectionHeader
          index="02"
          eyebrow={HOME_SECTIONS.events.eyebrow}
          title={HOME_SECTIONS.events.title}
          description={HOME_SECTIONS.events.description}
        />
        <div
          className={`ktp-home-events${
            upcomingEvents.length === 0 ? ' ktp-home-events--split' : ''
          }`}
        >
          <div className="ktp-home-events__copy">
            <p className="ktp-events-upcoming__note">{HOME_SECTIONS.events.fallRushNote}</p>
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} variant="featured" />
            ))}

            <div className="ktp-home-events__actions">
              <Button variant="secondary" href="/events">
                View all events
              </Button>
            </div>
          </div>
          {upcomingEvents.length === 0 && (
            <figure className="ktp-events-upcoming__photo">
              <img
                src={EVENTS_UPCOMING_PHOTO.src}
                alt={EVENTS_UPCOMING_PHOTO.alt}
                loading="lazy"
              />
            </figure>
          )}
        </div>
      </Section>

      <SectionDivider variant="accent" />

      {/* Outcomes */}
      <Section className="ktp-section--outcomes">
        <SectionHeader
          index="03"
          eyebrow={HOME_SECTIONS.outcomes.eyebrow}
          title={HOME_SECTIONS.outcomes.title}
          description={HOME_SECTIONS.outcomes.description}
        />
        <div className="ktp-logo-stream" aria-label="Companies where KTP members work">
          <div className="ktp-logo-stream__track">
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                className="ktp-logo-stream__group"
                aria-hidden={copyIndex === 1 ? 'true' : undefined}
              >
                {COMPANY_LOGOS.map((company) => (
                  <div key={`${copyIndex}-${company.name}`} className="ktp-logo-stream__item">
                    <img src={company.src} alt={copyIndex === 0 ? company.name : ''} loading="lazy" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider variant="line" />

      {/* Community */}
      <Section variant="tinted">
        <SectionHeader
          index="04"
          eyebrow={HOME_SECTIONS.community.eyebrow}
          title={HOME_SECTIONS.community.title}
          description={HOME_SECTIONS.community.description}
        />
        <div className="ktp-mosaic ktp-mosaic--enhanced">
          {COMMUNITY_PHOTOS.mosaic.map((photo, index) => (
            <div
              key={photo.src}
              className={`ktp-mosaic__item ${index === 0 ? 'ktp-mosaic__item--hero' : ''}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              {index === 0 && (
                <div className="ktp-mosaic__overlay">
                  <p>Tech brought us together. The community keeps us here.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Rush CTA */}
      <Section variant="dark">
        <RushCta />
      </Section>
    </PageTemplate>
  );
};

export default HomePage;
