import React from 'react';
import { Member } from '../pages/membersPage/MembersPage';

const PLEDGE_CLASS_LABELS: Record<string, string> = {
  Alpha: 'Α',
  Beta: 'Β',
  Gamma: 'Γ',
  Delta: 'Δ',
  Epsilon: 'Ε',
  Zeta: 'Ζ',
  Eta: 'Η',
  Theta: 'Θ',
  Iota: 'Ι',
  Kappa: 'Κ',
  Founders: 'Founders',
};

function MemberCard({ member }: { member: Member }) {
  const classLabel = PLEDGE_CLASS_LABELS[member.pledgeClass] || member.pledgeClass;

  return (
    <div className="ktp-member-card">
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="ktp-member-card__img-wrap"
        aria-label={`${member.name} — ${classLabel} class, class of ${member.gradYear}`}
      >
        <img
          src={member.image}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = 'assets/img/members/Filler.jpg';
          }}
          alt={member.name}
          loading="lazy"
        />
        <div className="ktp-member-card__overlay">
          <span>
            {classLabel} · {member.gradYear}
          </span>
        </div>
      </a>
      <p className="ktp-member-card__name">{member.name}</p>
    </div>
  );
}

export default MemberCard;
