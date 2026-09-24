export const HOME_HERO = {
  headline: 'Technology brings us together.',
  subheadline:
    'Kappa Theta Pi is UChicago\'s professional technology fraternity — a community of engineers, designers, founders, researchers, and technologists learning and building together.',
  primaryCta: { label: 'Explore KTP', href: '/about' },
  secondaryCta: { label: 'Rush KTP', href: '/rush' },
} as const;

export const HOME_PILLARS = [
  {
    title: 'Professional Development',
    description:
      'Recruiting prep, industry speakers, mentorship, and networking that help members navigate tech careers with confidence.',
    items: ['Interview prep', 'Industry speakers', 'Mentorship', 'Networking'],
  },
  {
    title: 'Alumni Mentorship',
    description:
      'A global alumni network gives members personal guidance, career perspective, and lasting connections across the technology industry.',
    items: ['One-on-one mentorship', 'Career insight', 'Industry connections', 'Global alumni network'],
  },
  {
    title: 'Social Growth',
    description:
      'Friendships, social events, retreats, and traditions that make KTP feel like home—not just another organization.',
    items: ['Social events', 'Retreats', 'Chapter traditions', 'Lifelong friendships'],
  },
  {
    title: 'Technical Advancement',
    description:
      'Hands-on projects and workshops help members strengthen their skills, explore new tools, and learn alongside other builders.',
    items: ['Project teams', 'Technical workshops', 'Skill building', 'Peer learning'],
  },
  {
    title: 'Academic Support',
    description:
      'Members support one another through challenging classes with shared knowledge, study groups, and a dependable peer network.',
    items: ['Study groups', 'Course support', 'Peer tutoring', 'Shared resources'],
  },
] as const;

export const HOME_SECTIONS = {
  events: {
    eyebrow: 'Programming',
    title: 'What\'s coming up',
    description: 'Hackathons, rush events, and professional programming from the chapter.',
    fallRushNote: 'Fall Rush is starting soon — events will be posted on the website.',
  },
  people: {
    eyebrow: 'The chapter',
    title: 'Meet the people behind KTP',
    description: 'Leadership and members who make the community what it is.',
  },
  outcomes: {
    eyebrow: 'Where members go',
    title: 'Where our members build, work, and explore',
    description: 'Alumni and members have worked across startups, research, and industry.',
  },
  community: {
    eyebrow: 'Life in KTP',
    title: 'Shared traditions. Lasting memories.',
    description: 'The chapter stays close inside and outside the classroom.',
  },
  rushCta: {
    title: 'Find your place in KTP.',
    description:
      'Rush is your chance to meet the chapter, learn what we do, and see if KTP is the right community for you.',
    learnLabel: 'Learn About Rush',
    applyLabel: 'Apply',
  },
} as const;
