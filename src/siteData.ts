export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

export interface ServiceItem {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  alt: string;
  linkText?: string;
  href?: string;
}

export interface SpecialtyCard {
  title: string;
  description: string;
  approach?: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const mayaData = {
  themeName: 'maya',
  brandName: 'Dr. Maya Reynolds, PsyD',
  subtitle: 'Licensed Clinical Psychologist \u00b7 Santa Monica, CA',
  seoTitle: 'Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA',
  locationLabel: 'Santa Monica, California \u00b7 In-Person & Telehealth',
  address: {
    street: '',
    city: 'Santa Monica',
    state: 'CA',
    zip: '',
    note: '',
  },
  servingAreas: 'Serving Santa Monica, Venice, Brentwood, Pacific Palisades & all California',
  navItems: [
    { label: 'About', href: '#about' },
    {
      label: 'Modalities',
      href: '#services',
      dropdown: [
        { label: 'Trauma & EMDR', href: '#services' },
        { label: 'Anxiety & Panic', href: '#services' },
        { label: 'Burnout & Pressure', href: '#services' },
      ],
    },
    {
      label: 'Specialties',
      href: '#specialties',
      dropdown: [
        { label: 'Trauma & PTSD', href: '#specialties' },
        { label: 'Anxiety & Panic Disorders', href: '#specialties' },
        { label: 'EMDR Therapy', href: '#specialties' },
        { label: 'Burnout & High Pressure', href: '#specialties' },
      ],
    },
    { label: 'Office', href: '#office' },
    { label: 'FAQs', href: '/faqs' },
  ] as NavItem[],
  hero: {
    eyebrow: 'A Thoughtful Path Forward',
    titleLead: 'A quieter space to understand what you\u2019re carrying and finally begin to',
    titleAccent: 'thrive',
    titleSuffix: '.',
    description: 'Grounded, collaborative therapy for adults navigating anxiety, trauma, burnout, and the pressure to keep going.',
    ctaText: 'Schedule a Consultation',
    ctaHref: '#contact',
    mainImage: '/images/download-top-crop.jpg',
    mainImageAlt: 'Warm therapy conversation with a client and clinician',
    peekImage: '/images/bookshelf.jpg',
    peekImageAlt: 'A hand selecting a book from a softly lit bookshelf',
    caption: 'Licensed Clinical Psychologist \u00b7 California License PSY30219',
  },
  intro: {
    title: 'You\u2019re holding onto hope that life can feel calmer, lighter, and more grounded than it is right now.',
    leadBold: 'In my practice, I help you transform that hope into lasting relief and sustainable well-being.',
    col1: 'Whether you\u2019re an adult seeking personal growth, looking to process trauma safely, or trying to manage intense professional burnout, therapy provides a compassionate and confidential space to unpack what feels overwhelming.',
    col2: 'What you are experiencing is real, valid, and worthy of care. I help high-achieving individuals reconnect with themselves, release chronic tension, and build a resilient foundation for the future \u2014 in person and via telehealth across California.',
    col3: 'My work integrates evidence-based approaches \u2014 including EMDR, CBT, and somatic practices \u2014 adapted to your unique nervous system and life circumstances. Therapy with me is collaborative, honest, and unhurried.',
    image: '/images/maya/intro-forest-path.jpg',
    imageAlt: 'Sunlit forest path symbolizing a journey toward clarity and healing',
  },
  servicesSection: {
    headingLead: 'Clinical',
    headingAccent: 'Modalities',
    subtitle: 'Many of my clients appear capable and functional on the outside while quietly carrying anxiety, tension, or chronic emotional fatigue. Here are three primary areas of clinical focus:',
    services: [
      {
        title: 'Trauma & EMDR',
        subtitle: 'Paced, Body-Grounded Processing',
        description: 'Carefully paced work for single-incident trauma, childhood emotional wounds, or relationship distress. Using EMDR and body-oriented therapies, I help you feel more secure in the present.',
        image: '/images/maya/therapy-session-chairs.jpg',
        alt: 'Therapist and client in an engaged therapy conversation in a calm office',
        linkText: 'Explore EMDR & Trauma Therapy',
        href: '#contact',
      },
      {
        title: 'Anxiety & Panic',
        subtitle: 'Break Free from Overthinking',
        description: 'Support for constant worry, internal tension, sleeplessness, and the exhausting sensation of always bracing for something to go wrong. I combine CBT and nervous system regulation to help you regain clarity and ease.',
        image: '/images/maya/b2d5db3b677faa320bacfee66be22920.jpg',
        alt: 'Woman at a desk looking overwhelmed while working through anxiety and emotional pressure',
        linkText: 'Learn More About Anxiety Care',
        href: '#contact',
      },
      {
        title: 'Burnout & Pressure',
        subtitle: 'For High-Achievers & Creatives',
        description: 'Support for when perfectionism, intense expectations, and years of overextending have left you feeling empty. We work on building sustainable limits and finding meaning that exists beyond your output.',
        image: '/images/maya/a778f50bc2fe59d3c06da672d064a41b.jpg',
        alt: 'Adult in a calm telehealth session',
        linkText: 'Support for burnout & perfectionism',
        href: '#contact',
      },
    ] as ServiceItem[],
  },
  banner: {
    quote: 'You can be capable, accomplished, and still need support.',
    emphasis: 'There is no need to have everything figured out before you begin.',
    backgroundImage: '/images/maya/banner-therapy-hands.jpg',
  },
  expertise: {
    headingLead: 'Areas of',
    headingAccent: 'expertise',
    groups: [
      {
        title: 'Concerns',
        items: ['Anxiety & Panic Disorders', 'Trauma & PTSD Recovery', 'Professional Burnout', 'Perfectionism & High Pressure'],
      },
      {
        title: 'Approaches',
        items: ['EMDR Therapy', 'Cognitive Behavioral Therapy (CBT)', 'Mindfulness-Based Practices', 'Somatic & Body-Oriented Work'],
      },
      {
        title: 'Clients',
        items: ['Thoughtful Adults', 'High-Achieving Adults', 'Entrepreneurs & Creatives'],
      },
    ],
  },
  quoteFeature: {
    image: '/images/maya/quote-beach.jpg',
    imageAlt: 'A soft, warm coastal landscape with quiet hills and a peaceful dusk atmosphere',
    quoteLead: 'Honoring where you\u2019ve been',
    quoteAccent: '',
    quoteSuffix: ' & helping shape where you\u2019re headed.',
  },
  specialties: {
    headingLead: 'Clinical',
    headingAccent: 'specialties',
    headingSuffix: 'include\u2026',
    cards: [
      { title: 'Trauma \u0026 PTSD', description: 'In therapy, I gently help you process traumatic memories, restore a sense of physical safety, and reclaim your autonomy, peace, and confidence.', approach: 'EMDR \u00b7 Somatic Therapy \u00b7 Trauma-Focused CBT', href: '#contact' },
      { title: 'Anxiety \u0026 Panic', description: 'I work at the roots of persistent worry to help your nervous system shift from chronic high alert toward lasting calm, clarity, and ease.', approach: 'CBT \u00b7 Mindfulness \u00b7 Nervous System Regulation', href: '#contact' },
      { title: 'EMDR Therapy', description: 'EMDR is an evidence-based method that reworks how distressing memories are stored in the body \u2014 reducing their emotional charge and supporting lasting relief.', approach: 'Bilateral Stimulation \u00b7 Adaptive Processing \u00b7 EMDR Protocol', href: '#contact' },
      { title: 'Burnout \u0026 High Pressure', description: 'Tailored support for those whose identity has become inseparable from their productivity \u2014 helping you separate self-worth from output and restore genuine vitality.', approach: 'ACT \u00b7 Values Clarification \u00b7 Boundary Work', href: '#contact' },
    ] as SpecialtyCard[],
  },
  officeSection: {
    eyebrow: 'MY SANTA MONICA SPACE',
    headingLead: 'A quiet, grounding space for',
    headingAccent: 'healing',
    headingSuffix: '.',
    description: 'A private sanctuary intentionally designed to feel welcoming, calm, and restorative from the moment you arrive. With abundant natural light, comfortable furnishings, and an uncluttered environment, the space itself invites you to exhale, settle, and feel at ease.',
    address: 'Santa Monica, California',
    sessionTypes: 'In-person sessions in Santa Monica and secure telehealth for clients located anywhere in California.',
    features: ['Quiet & Private Atmosphere', 'Abundant Natural Sunlight', 'Comfortable, Uncluttered Design', 'Convenient Santa Monica Location', 'Confidential, Grounding Setting'],
    images: [
      { src: '/images/office-1.jpg', alt: 'Santa Monica therapy room with comfortable sofa and warm wooden floors', caption: 'Comfortable seating & thoughtful ambiance for reflection' },
      { src: '/images/office-2.jpg', alt: 'Santa Monica counseling office with natural light and private surroundings', caption: 'Natural light & serene, private surroundings' },
    ],
  },
  schedule: {
    eyebrow: 'LET\u2019S CONNECT',
    headingLead: 'Take the first step toward finding the right therapist for you.',
    headingAccent: '',
    headingSuffix: '',
    body: 'Finding a therapist whose presence, pacing, and approach resonate with you is essential. I offer a complimentary 15-minute introductory phone call to discuss what you are looking for and see if working together feels right.',
    instruction: '',
    buttonText: 'Book a Consultation',
    buttonHref: '#contact',
  },
  aboutBio: {
    eyebrow: 'MEET YOUR THERAPIST',
    title: 'Dr. Maya Reynolds, PsyD',
    credentials: 'Licensed Clinical Psychologist \u00b7 California License PSY30219',
    paragraphs: [
      'I\u2019m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.',
      'My work focuses on anxiety, panic, trauma, and burnout. Clients often come to me feeling functional on the outside while quietly carrying persistent worry, tension, difficulty sleeping, or a low-level dread they cannot quite name.',
      'I take a warm, collaborative, and grounded approach. I take time to understand your unique life story rather than offering generic advice, and together we identify the patterns that keep you feeling stuck.',
      'Sessions integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques \u2014 designed to give you practical insights and regulation tools you can use in daily life.',
    ],
    quote: 'It\'s time to feel lighter — not by pushing through harder, but by finally being seen, heard, and understood.',
  },
  faqs: [
    { question: 'Where is your office located, and do you offer in-person sessions?', answer: 'I offer in-person therapy in Santa Monica and secure telehealth sessions for clients anywhere in California.' },
    { question: 'Who do you typically work with?', answer: 'I primarily support thoughtful, high-achieving adults, entrepreneurs, creatives, and professionals who appear successful on the outside but are internally exhausted by chronic worry, panic, trauma triggers, or perfectionism.' },
    { question: 'What is your approach to trauma and EMDR therapy?', answer: 'Trauma work in my practice is paced carefully with an emphasis on safety, stabilization, and nervous system regulation. I use EMDR alongside CBT and somatic methods to help you process distressing memories at a manageable pace.' },
    { question: 'What happens during the initial consultation?', answer: 'I begin with a complimentary 15-minute phone consultation to discuss what brings you to therapy, answer your questions, and see whether my approach is a good fit for your needs.' },
    { question: 'Do you accept insurance?', answer: 'I am an out-of-network provider. I provide detailed monthly superbills that you can submit to your insurance company for potential PPO reimbursement. Please check with your insurer regarding your benefits.' },
  ] as FaqItem[],
  footer: {
    intro: 'Specialized clinical psychology and psychotherapy for adults, high-achievers, and entrepreneurs in Santa Monica and across California via telehealth.',
    navLinks: [
      { label: 'About Dr. Maya', href: '#about' },
      { label: 'Modalities', href: '#services' },
      { label: 'Specialties', href: '#expertise' },
      { label: 'Office', href: '#office' },
      { label: 'FAQs', href: '/faqs' },
    ],
    contactInfo: ['Santa Monica, California', 'In-person & telehealth across California'],
    practiceDetails: ['Dr. Maya Reynolds, PsyD', 'Licensed Clinical Psychologist', 'California License PSY30219', 'By appointment'],
    legal: '\u00a9 2026 Dr. Maya Reynolds, PsyD. All rights reserved.',
  },
};
