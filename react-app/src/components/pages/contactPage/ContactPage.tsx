import React from 'react';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import Section from '../../ui/Section';
import SectionDivider from '../../ui/SectionDivider';
import { SITE } from '../../../content/siteConfig';

function ContactPage() {
  return (
    <PageTemplate page="contact">
      <Section>
        <div className="ktp-split">
          <div>
            <p className="ktp-eyebrow">Get in touch</p>
            <h1>Contact KTP</h1>
            <p>
              Whether you're interested in rushing, partnering with us, or just saying hello — we'd
              love to hear from you.
            </p>
            <div className="ktp-contact-links" aria-label="Contact links">
              <a className="ktp-contact-link" href={`mailto:${SITE.email}`}>
                <span className="ktp-contact-link__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 6.5h18v11H3z" />
                    <path d="m3.5 7 8.5 6 8.5-6" />
                  </svg>
                </span>
                <span className="ktp-contact-link__content">
                  <span className="ktp-contact-link__label">Email</span>
                  <span className="ktp-contact-link__value">{SITE.email}</span>
                </span>
              </a>
              <a
                className="ktp-contact-link"
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ktp-contact-link__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span className="ktp-contact-link__content">
                  <span className="ktp-contact-link__label">Instagram</span>
                  <span className="ktp-contact-link__value">@uchicagoktp</span>
                </span>
              </a>
              <a
                className="ktp-contact-link"
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ktp-contact-link__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.7 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5H17V4a22 22 0 0 0-2.4-.1c-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.5v8h3.2Z" />
                  </svg>
                </span>
                <span className="ktp-contact-link__content">
                  <span className="ktp-contact-link__label">Facebook</span>
                  <span className="ktp-contact-link__value">KTP at UChicago</span>
                </span>
              </a>
            </div>
          </div>
          <div className="ktp-split__image">
            <img
              src="assets/img/contact/paddle-night.jpg"
              alt="KTP members painting paddles together"
            />
          </div>
        </div>
      </Section>

      <SectionDivider variant="accent" />

      <Section variant="tinted">
        <div className="ktp-contact-panels">
          <div className="ktp-contact-panel">
            <h3>Students</h3>
            <p>
              Questions about rush? Email us at{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Follow our{' '}
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>{' '}
              to stay up to date on rush events.
            </p>
          </div>
          <div className="ktp-contact-panel">
            <h3>Companies & partners</h3>
            <p>
              We partner with companies for tech talks, information sessions, and networking events
              on campus. Contact us at{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </PageTemplate>
  );
}

export default ContactPage;
