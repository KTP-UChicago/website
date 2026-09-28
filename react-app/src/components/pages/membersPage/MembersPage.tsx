import React, { useEffect, useState } from 'react';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import Section from '../../ui/Section';
import SectionHeader from '../../ui/SectionHeader';
import SectionDivider from '../../ui/SectionDivider';
import MemberCard from '../../memberCard/MemberCard';
import { CLASSES } from '../../../constants';
import { EXECUTIVE_BOARD } from '../../../content/leadership';
import { COMPANY_LOGOS } from '../../../content/companies';
import ClassDisplay from './ClassDisplay';
import useNavigateToId from '../../../hooks/useNavigateToId/useNavigateToId';

export interface Member {
  name: string;
  image: string;
  pledgeClass: string;
  gradYear: string;
  linkedin: string;
}

const MembersPage = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [search, setSearch] = useState('');
  useNavigateToId();

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const response = await fetch('assets/memberList.csv');
        if (!response.ok) return;
        const csv = await response.text();
        const rows = csv.split('\n').slice(1).filter((row) => row.trim().length > 0);
        const sorted = rows.sort((a, b) => {
          const lastA = a.split(',')[1]?.toLowerCase() || '';
          const lastB = b.split(',')[1]?.toLowerCase() || '';
          return lastA.localeCompare(lastB);
        });

        setMembers(
          sorted.map((row) => {
            const [firstName, lastName, image, pledgeClass, gradYear, linkedin] = row.split(',');
            return {
              name: `${firstName} ${lastName}`,
              image: `assets/img/members/${image}`,
              pledgeClass,
              gradYear,
              linkedin,
            };
          })
        );
      } catch (error) {
        console.error('Error loading members:', error);
      }
    };

    loadMembers();
  }, []);

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageTemplate page="people">
      <section className="ktp-page-hero ktp-page-hero--short ktp-page-hero--solid">
        <div className="ktp-container ktp-page-hero__content">
          <p className="ktp-eyebrow">The chapter</p>
          <h1>Meet the people behind KTP.</h1>
        </div>
      </section>

      <Section id="eboard">
        <SectionHeader
          index="01"
          eyebrow="Leadership"
          title="Executive Board"
          description="The team that keeps KTP running."
        />
        <div className="ktp-people-grid ktp-people-grid--eboard">
          {EXECUTIVE_BOARD.map((leader) => (
            <div key={leader.name} className="ktp-person-card ktp-person-card--eboard">
              <img
                className="ktp-person-card__image"
                src={`assets/img/members/${leader.image}`}
                alt={leader.name}
                loading="lazy"
              />
              <p className="ktp-person-card__name">{leader.name}</p>
              <p className="ktp-person-card__role">{leader.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <SectionDivider variant="accent" />

      <Section variant="tinted" id="actives">
        <SectionHeader index="02" eyebrow="Actives" title="Active Members" />
        <div className="ktp-section-toolbar">
          <p className="ktp-section-toolbar__text">
            {members.length} active members across{' '}
            {new Set(members.map((m) => m.pledgeClass)).size} pledge classes.
          </p>
          <input
            type="search"
            className="ktp-search ktp-search--inline"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search members by name"
          />
        </div>
        <div className="ktp-people-grid ktp-people-grid--dense">
          {filteredMembers.map((member, index) => (
            <MemberCard key={`${member.name}-${index}`} member={member} />
          ))}
        </div>
        {filteredMembers.length === 0 && search && (
          <p style={{ color: 'var(--ktp-text-muted)' }}>No members found matching "{search}".</p>
        )}
      </Section>

      <SectionDivider variant="line" />

      <Section variant="alt" id="alumni">
        <SectionHeader
          index="03"
          eyebrow="Network"
          title="Alumni"
          description="KTP has an extensive alumni network working at companies across the country."
        />
        <div className="ktp-logos" style={{ marginBottom: 'var(--space-2xl)' }}>
          {COMPANY_LOGOS.map((company) => (
            <img key={company.name} src={company.src} alt={company.name} loading="lazy" />
          ))}
        </div>
        <div className="ktp-alumni-list">
          {CLASSES.map((pledgeClass, index) => (
            <ClassDisplay pledgeClass={pledgeClass} key={index} />
          ))}
        </div>
      </Section>
    </PageTemplate>
  );
};

export default MembersPage;
