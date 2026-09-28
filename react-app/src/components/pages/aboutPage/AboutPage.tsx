import React from 'react';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import Section from '../../ui/Section';
import SectionHeader from '../../ui/SectionHeader';
import SectionDivider from '../../ui/SectionDivider';
import { ABOUT_HISTORY, ABOUT_PILLARS } from '../../../content/aboutContent';

function AboutPage() {
  return (
    <PageTemplate page="about">
      <Section>
        <div className="ktp-split">
          <div>
            <SectionHeader index="01" title={ABOUT_HISTORY.title} />
            {ABOUT_HISTORY.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="ktp-split__image">
            <img src={ABOUT_HISTORY.image} alt={ABOUT_HISTORY.imageAlt} loading="lazy" />
          </div>
        </div>
      </Section>

      <SectionDivider variant="accent" />

      <Section variant="alt" className="ktp-section--pillars">
        <SectionHeader index="02" eyebrow="Our pillars" title="What KTP offers" />
        <div className="ktp-pillars-orbit" role="list" aria-label="KTP pillars">
          {ABOUT_PILLARS.map((pillar, i) => (
            <article
              key={pillar.title}
              className={`ktp-pillars-orbit__item ktp-pillars-orbit__item--${i + 1}${
                i === 2 ? ' ktp-pillars-orbit__item--featured' : ''
              }`}
              role="listitem"
              tabIndex={0}
            >
              <span className="ktp-pillars-orbit__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <SectionDivider variant="accent" />

      <Section>
        <div className="ktp-split">
          <div className="ktp-split__image">
            <img src="assets/img/community/formal-group-night.jpg" alt="KTP members at a formal event" loading="lazy" />
          </div>
          <div>
            <SectionHeader
              index="03"
              eyebrow="Nationally"
              title="Part of a 29-chapter community"
            />
            <p>
              Founded at the University of Michigan in 2012, Kappa Theta Pi was created to bring
              together students passionate about technology in a professional, community-driven
              setting. Today, 29 chapters across the country carry that mission forward.
            </p>
            <p>
              The UChicago Theta Chapter continues this tradition — welcoming and genuinely
              invested in each member's growth.
            </p>
          </div>
        </div>
      </Section>
    </PageTemplate>
  );
}

export default AboutPage;
