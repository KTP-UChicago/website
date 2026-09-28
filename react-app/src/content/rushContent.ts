export type RushStatus = 'open' | 'interest' | 'closed';

export const RUSH_CONFIG = {
  status: 'closed' as RushStatus,
  season: 'Fall 2026',
  applicationCtaLabel: 'Application coming soon',
  applyUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfyivhHCBm7Ppl6CdYoArWzMlOzOGtbwJRfyHVYugVPuQ1svQ/viewform',
  interestUrl: undefined as string | undefined,
  heroImage: 'assets/img/rush/group-social.png',
  heroImageAlt: 'KTP members celebrating together at a social event',
  contacts: [
    { name: 'Elizabeth Zhao', role: 'Co-Director of Membership', email: 'ezhao28@uchicago.edu' },
    { name: 'Adrian Dai', role: 'Co-Director of Membership', email: 'daia@uchicago.edu' },
  ],
} as const;

export const RUSH_THEME = {
  hero: {
    eyebrow: (season: string) => `${season} · Set sail`,
    headline: 'Begin your voyage.',
    subheadline:
      "Meet the chapter, learn what we do, and see if KTP is the community you've been charting a course toward.",
  },
  sections: {
    events: {
      index: '01',
      eyebrow: 'The route',
      title: 'Your stops this season',
    },
    faq: {
      index: '02',
      eyebrow: 'Questions',
      title: 'FAQ',
    },
  },
  cta: {
    headline: 'Ready to embark?',
    subheadline: (season: string) =>
      `Applications for ${season} will be posted soon. Check back for updates.`,
  },
} as const;

export type RushEvent = {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  imageAlt: string;
  required?: 'info' | 'additional';
};

export const RUSH_EVENTS: RushEvent[] = [
  {
    id: 'info-1',
    title: 'Info Session 1',
    tagline: 'Drop anchor and learn the basics',
    description:
      "Learn the basics about KTP, meet members, and decide if our community is one you'd like to join. All rushees must attend one info session.",
    date: 'TBD',
    time: 'TBD',
    location: 'TBD',
    image: 'assets/img/community/lounge-social.jpg',
    imageAlt: 'KTP members at an info session',
    required: 'info',
  },
  {
    id: 'info-2',
    title: 'Info Session 2',
    tagline: 'Drop anchor and learn the basics',
    description:
      'A second opportunity to learn about KTP and meet the chapter. All rushees must attend one info session.',
    date: 'TBD',
    time: 'TBD',
    location: 'TBD',
    image: 'assets/img/community/formal-group.jpg',
    imageAlt: 'KTP rush event',
    required: 'info',
  },
  {
    id: 'charity',
    title: 'Charity Event for Color a Smile',
    tagline: 'Give back before you go further',
    description:
      'Contribute to the Color A Smile charity with fellow rushees. We will color drawings and write messages to be distributed to senior citizens, troops, and others.',
    date: 'TBD',
    time: 'TBD',
    location: 'TBD',
    image: 'assets/img/community/pledge-formal.jpg',
    imageAlt: 'KTP charity rush event',
    required: 'additional',
  },
  {
    id: 'drop-an-anchor',
    title: 'Drop An Anchor',
    tagline: 'Stay awhile and connect with the chapter',
    description:
      'A speed dating-style event where brothers and rushees connect through questions about favorite places, memories, and more.',
    date: 'TBD',
    time: 'TBD',
    location: 'TBD',
    image: 'assets/img/community/dj-social.jpg',
    imageAlt: 'KTP members at Drop An Anchor',
    required: 'additional',
  },
  {
    id: 'applications-due',
    title: 'Applications Due',
    tagline: 'Submit before you set sail',
    description:
      'Submit your rush application by the deadline to be considered for membership.',
    date: 'TBD',
    time: 'TBD',
    location: 'TBD',
    image: 'assets/img/community/lounge-social.jpg',
    imageAlt: 'KTP rush applications',
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const RUSH_FAQS: FAQ[] = [
  {
    question: 'Who can rush KTP?',
    answer:
      'Anyone is allowed to rush KTP—we gladly accept rushees from all disciplines, years, and majors. Our only requirement is that you have at least 3 quarters remaining as a full-time student in The College.',
  },
  {
    question: 'What is KTP looking for?',
    answer:
      'There is no cookie-cutter ideal rushee. KTP is a multi-talented, interdisciplinary organization united by a genuine passion for technology. People who are truly enthusiastic about tech tend to fit in best.',
  },
  {
    question: "What if I can't meet the rush requirements?",
    answer:
      'We are happy to work with anyone interested in rushing. Reach out to our Co-Directors of Membership, Elizabeth Zhao (ezhao28@uchicago.edu) or Adrian Dai (daia@uchicago.edu), to discuss alternatives.',
  },
  {
    question: 'How would I benefit from KTP?',
    answer:
      'KTP offers a supportive community passionate about technology. We provide mentoring in career advising, interview prep, resume development, and coursework. Our alumni network spans startups to major tech companies.',
  },
  {
    question: 'Which majors are represented in KTP?',
    answer:
      'KTP includes members from majors across campus—computer science, economics, data science, and more. We love rushees from all disciplines.',
  },
  {
    question: 'How much of a time commitment is pledging?',
    answer:
      'What you get out of KTP depends on what you put in. Our pledging process is designed to be manageable alongside a typical course load. Ask brothers at rush events about their experiences.',
  },
  {
    question: "What if I'm rushing another pre-professional fraternity?",
    answer:
      'We encourage joining one pre-professional fraternity for manageable time commitments, but welcome everyone to rush. Our application includes space to note if you are rushing another organization.',
  },
];

export const RUSH_REQUIREMENTS =
  'We require all rushees to attend at least one info session and one other rush event.';

export const RUSH_REQUIREMENTS_FRAMED = `To complete your voyage, attend at least one info session and one other rush event.`;
