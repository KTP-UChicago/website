export const EVENTS_SECTIONS = {
  upcoming: {
    eyebrow: 'Upcoming',
    title: 'What\'s coming up',
    emptyMessage: '2026 Fall Rush events to be posted soon.',
    fallRushNote: 'Fall Rush is starting soon — events will be posted here as they\'re announced.',
  },
  past: {
    eyebrow: 'Archive',
    title: 'Past Programming — Unlock Your Tech Potential',
    description:
      'Workshops, panels, and recruiting events from the chapter’s professional development series.',
    hackathons: {
      eyebrow: 'Hackathons',
      title: 'Campus hackathons',
    },
  },
} as const;

export const EVENTS_UPCOMING_PHOTO = {
  src: 'assets/img/community/lounge-social.jpg',
  alt: 'KTP members connecting at a chapter social',
} as const;

export const EVENTS_FEATURE_PHOTOS = [
  {
    src: 'assets/img/events/uytp-panel.jpg',
    alt: 'KTP members at a chapter programming event in Stuart Hall',
  },
  {
    src: 'assets/img/events/uytp-social.jpg',
    alt: 'KTP members connecting at a chapter social',
  },
] as const;

export type ChapterEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  imageAlt: string;
  category: 'rush' | 'workshop' | 'professional' | 'hackathon';
  season: string;
  isPast: boolean;
  registerUrl?: string;
  highlights?: readonly string[];
  visual?: 'hackathon';
};

export const CHAPTER_EVENTS: ChapterEvent[] = [
  {
    id: 'hackdays-2026',
    title: 'UChicago KTP Hackdays 2026',
    description:
      'Build anything you want in a campus mini hackathon powered by MLH and Google. Prototype with large language models and modern tech tools—whether you\'re a seasoned hacker or completely new to hackathons.',
    highlights: [
      'Free lunch and refreshments throughout the day',
      'MLH swag and prizes',
      'Build with LLMs and modern tech tools',
      'Connect with fellow tech enthusiasts from across campus',
    ],
    date: 'Saturday, February 28',
    time: '10:30 AM–6:30 PM',
    location: 'CSIL 4, John Crerar Library',
    image: '',
    imageAlt: '',
    category: 'hackathon',
    season: 'Winter 2026',
    isPast: true,
    visual: 'hackathon',
  },
  {
    id: 'uytp-recruiting-2026',
    title: 'Tech Recruiting Tips + Tricks',
    description:
      'Unlock Your Tech Potential, Week 6. Practical recruiting advice for internships and full-time roles in tech. Insomnia Cookies plus Celsius and Red Bull provided.',
    date: 'Thursday, February 12',
    time: '8:00–10:00 PM',
    location: 'McCormick Lounge',
    image: 'assets/img/events/uytp-social.jpg',
    imageAlt: 'KTP members at a UYTP programming event',
    category: 'workshop',
    season: 'Winter 2026',
    isPast: true,
  },
  {
    id: 'uytp-chicago-panel-2026',
    title: 'Chicago-Based Industry Panel Discussion',
    description:
      'Unlock Your Tech Potential, Week 7. Hear from Chicago industry professionals about careers in tech. Boba provided.',
    date: 'Tuesday, February 17',
    time: '8:00–10:00 PM',
    location: 'Stuart 105',
    image: 'assets/img/events/uytp-panel.jpg',
    imageAlt: 'KTP industry panel discussion in Stuart Hall',
    category: 'workshop',
    season: 'Winter 2026',
    isPast: true,
  },
  {
    id: 'uytp-nvidia-keynote-2026',
    title: 'NVIDIA Keynote with Sameer Halepete',
    description:
      'Unlock Your Tech Potential, Week 8. Keynote from Sameer Halepete, VP of VLSI at NVIDIA. Chipotle provided.',
    date: 'Thursday, February 26',
    time: '8:00–10:00 PM',
    location: 'Stuart 104',
    image: 'assets/img/workshops/medici_table.jpg',
    imageAlt: 'KTP professional development event',
    category: 'professional',
    season: 'Winter 2026',
    isPast: true,
  },
  {
    id: 'workshop-networking',
    title: 'Networking + Intro to Tech Recruiting',
    description:
      'Learn the basics of tech recruiting and networking. Covers the internship timeline and resume/LinkedIn feedback opportunities.',
    date: 'Monday, February 3',
    time: '6:00–7:00 PM',
    location: 'Stuart 105',
    image: 'assets/img/workshops/big_little.jpg',
    imageAlt: 'KTP workshop on tech recruiting',
    category: 'workshop',
    season: 'Winter 2025',
    isPast: true,
  },
  {
    id: 'workshop-algos',
    title: 'Algos + Data Structures',
    description:
      'Fundamentals of algorithms and data structures to help you ace the technical interview.',
    date: 'Monday, February 10',
    time: '6:00–7:00 PM',
    location: 'Stuart 105',
    image: 'assets/img/workshops/ellens_fam.jpg',
    imageAlt: 'KTP algorithms workshop',
    category: 'workshop',
    season: 'Winter 2025',
    isPast: true,
  },
  {
    id: 'workshop-peak6',
    title: 'PEAK6 Company Recruiting Event',
    description:
      'Learn about careers and internship opportunities at Chicago fintech company PEAK6, with Q&A from a recruiter.',
    date: 'Tuesday, February 18',
    time: '5:00–6:00 PM',
    location: 'McCormick Lounge',
    image: 'assets/img/workshops/medici_table.jpg',
    imageAlt: 'KTP PEAK6 recruiting event',
    category: 'professional',
    season: 'Winter 2025',
    isPast: true,
  },
  {
    id: 'workshop-panel',
    title: 'KTP Brother Panel',
    description:
      'Hear from brothers about internship experiences in data science, software engineering, product management, and more.',
    date: 'Monday, February 24',
    time: '6:00–7:00 PM',
    location: 'Stuart 105',
    image: 'assets/img/workshops/sf.jpg',
    imageAlt: 'KTP brother panel event',
    category: 'workshop',
    season: 'Winter 2025',
    isPast: true,
  },
];

export const WORKSHOP_SERIES = {
  title: 'Unlock Your Tech Potential',
  season: 'Winter 2026',
  rsvpUrl: 'https://forms.gle/Qy3nddXrFThk4LvPA',
  contacts: [
    { name: 'Aeliya Grover', email: 'aeliyag@uchicago.edu' },
    { name: 'Eugenia Osei Bonsu', email: 'eobonsu@uchicago.edu' },
  ],
} as const;
