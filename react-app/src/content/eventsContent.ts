export type ChapterEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  imageAlt: string;
  category: 'rush' | 'workshop' | 'professional';
  season: string;
  isPast: boolean;
};

export const CHAPTER_EVENTS: ChapterEvent[] = [
  {
    id: 'rush-info-1',
    title: 'Rush Info Session 1',
    description:
      'Learn about KTP, meet members, and explore whether our community is the right fit.',
    date: 'Monday, March 23',
    time: '8:00–10:00 PM',
    location: 'McCormick Lounge',
    image: 'assets/img/rush/guysattable.jpg',
    imageAlt: 'KTP members at an info session',
    category: 'rush',
    season: 'Spring 2026',
    isPast: false,
  },
  {
    id: 'rush-info-2',
    title: 'Rush Info Session 2',
    description: 'A second opportunity to learn about KTP and meet the chapter.',
    date: 'Tuesday, March 24',
    time: '8:00–10:00 PM',
    location: 'McCormick Lounge',
    image: 'assets/img/rush/BidNight.jpg',
    imageAlt: 'KTP rush event',
    category: 'rush',
    season: 'Spring 2026',
    isPast: false,
  },
  {
    id: 'rush-charity',
    title: 'Charity Event for Color a Smile',
    description: 'Color drawings and write messages for senior citizens, troops, and others.',
    date: 'Wednesday, March 25',
    time: '8:00–10:00 PM',
    location: 'McCormick Lounge',
    image: 'assets/img/rush/point.jpg',
    imageAlt: 'KTP charity rush event',
    category: 'rush',
    season: 'Spring 2026',
    isPast: false,
  },
  {
    id: 'rush-drop-a-pin',
    title: 'Drop A Pin',
    description: 'Speed dating-style event connecting brothers and rushees.',
    date: 'Thursday, March 26',
    time: '8:00–10:00 PM',
    location: 'McCormick Lounge',
    image: 'assets/img/rush/pyramid.jpg',
    imageAlt: 'KTP members at Drop A Pin',
    category: 'rush',
    season: 'Spring 2026',
    isPast: false,
  },
  {
    id: 'uytp-recruiting-2026',
    title: 'Tech Recruiting Tips + Tricks',
    description:
      'Unlock Your Tech Potential, Week 6. Practical recruiting advice for internships and full-time roles in tech. Insomnia Cookies plus Celsius and Red Bull provided.',
    date: 'Thursday, February 12',
    time: '8:00–10:00 PM',
    location: 'McCormick Lounge',
    image: 'assets/img/community/lounge-social.jpg',
    imageAlt: 'KTP members gathered in the lounge',
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
    image: 'assets/img/workshops/sf.jpg',
    imageAlt: 'KTP industry panel discussion',
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
