/** TODO: replace with verified count when major data is available */
export const MAJORS_COUNT_PLACEHOLDER = 30;

export const SITE = {
  name: 'Kappa Theta Pi',
  shortName: 'KTP',
  chapter: 'Theta Chapter',
  university: 'University of Chicago',
  domain: 'https://uchicagoktp.com',
  email: 'uchicagoktp@gmail.com',
  instagram: 'https://www.instagram.com/uchicagoktp',
  facebook: 'https://www.facebook.com/uchicagoktp',
  copyrightYear: new Date().getFullYear(),
  logoPath: 'assets/img/ktp-logo.png',
  logoAlt: 'Kappa Theta Pi — ΚΘΠ',
} as const;

export type NavItem = {
  label: string;
  path: string;
  pageKey: string;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: 'About', path: '/about', pageKey: 'about' },
  { label: 'People', path: '/people', pageKey: 'people' },
  { label: 'Events', path: '/events', pageKey: 'events' },
  { label: 'Contact Us', path: '/contact', pageKey: 'contact' },
  { label: 'Rush', path: '/rush', pageKey: 'rush' },
];

export const FOOTER_NAV: NavItem[] = [
  { label: 'Contact Us', path: '/contact', pageKey: 'contact' },
  { label: 'Member Portal', path: '/member-directory', pageKey: 'member-directory' },
];

export type PageMeta = {
  title: string;
  description: string;
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'KTP | UChicago Professional Technology Fraternity',
    description:
      'Kappa Theta Pi is UChicago\'s professional technology fraternity — a community of engineers, designers, founders, researchers, and technologists learning and building together.',
  },
  about: {
    title: 'About | KTP',
    description:
      'Learn about Kappa Theta Pi nationally and the UChicago Theta Chapter — our mission, values, and community.',
  },
  people: {
    title: 'People | KTP',
    description: 'Meet the leadership, active members, and alumni of KTP at UChicago.',
  },
  events: {
    title: 'Events | KTP',
    description: 'Explore KTP programming — rush events, workshops, and professional development.',
  },
  rush: {
    title: 'Rush | KTP',
    description:
      'Everything you need to know about rushing KTP this spring — your voyage starts here.',
  },
  contact: {
    title: 'Contact | KTP',
    description: 'Get in touch with KTP for rush questions, partnerships, and general inquiries.',
  },
  workshops: {
    title: 'Workshops | KTP',
    description: 'KTP workshop series and professional development events.',
  },
  members: {
    title: 'People | KTP',
    description: 'Meet the leadership, active members, and alumni of KTP at UChicago.',
  },
  'alumni-database': {
    title: 'Alumni Database | KTP',
    description: 'KTP member portal — alumni database.',
  },
  'member-directory': {
    title: 'Member Directory | KTP',
    description: 'KTP member portal — member directory.',
  },
  'course-reviews': {
    title: 'Course Reviews | KTP',
    description: 'KTP member portal — UChicago course reviews.',
  },
};

export const COMMUNITY_PHOTOS = {
  hero: 'assets/img/community/full-chapter-hero.jpg',
  heroAlt: 'assets/img/community/pledge-formal.jpg',
  mosaic: [
    { src: 'assets/img/community/ice-skating.jpg', alt: 'KTP members ice skating together' },
    { src: 'assets/img/community/dj-social.jpg', alt: 'KTP social gathering with DJ setup' },
    { src: 'assets/img/community/lounge-social.jpg', alt: 'KTP members relaxing together' },
    { src: 'assets/img/community/ice-skating-fun.jpg', alt: 'KTP members at the ice rink' },
    { src: 'assets/img/community/formal-group.jpg', alt: 'KTP members at a formal event' },
  ],
} as const;
