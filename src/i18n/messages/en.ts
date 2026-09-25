export const site = {
  name: "Dr. Carlos López Moris",
  shortName: "Dr. López Moris",
  title: "ENT physician · Rhinology specialist",
  description:
    "ENT specialist in Buenos Aires: rhinology, functional and aesthetic rhinoplasty, and nasal surgery. Appointments at CEMIC University Hospital and private practice in Palermo.",
  url: "https://drlopezmoris.com",
  phoneDisplay: "+54 9 11 7200-3461",
  phoneHref: "tel:+5491172003461",
  whatsappUrl: "https://wa.me/5491172003461",
  email: "contacto@drlopezmoris.com",
  instagram: "https://www.instagram.com/dr.lopezmoris.rinologia",
  linkedin: "https://www.linkedin.com/in/carlos-b-l%C3%B3pez-moris-225a0655/",
  matricula: "MN 133953",
  location: "Buenos Aires, Argentina",
  logo: "/images/iso-moris.png",
  ogImage: "/images/banner1.jpg",
  footerBlurb:
    "Rhinology and nasal surgery in Buenos Aires. CEMIC · Palermo office · License MN 133953.",
} as const;

export const nav = [
  { href: "#servicios", label: "Services" },
  { href: "#sobre-mi", label: "About" },
  { href: "#galeria", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contact" },
] as const;

export const hero = {
  brandLines: ["Dr. Carlos", "López Moris"] as const,
  eyebrow: "Rhinology · Nasal surgery · Buenos Aires",
  headline: "Nasal surgery and rhinology with a clear plan from the first visit.",
  support:
    "I practice at CEMIC University Hospital and in Palermo. Functional and aesthetic rhinoplasty, and complex nasal conditions.",
  primaryCta: "Book appointment",
  primaryCtaShort: "Book",
  headerCta: "Contact",
  secondaryCta: "View cases",
  image: {
    src: "/images/banner1.jpg",
    alt: "Dr. Carlos López Moris, ENT and rhinology specialist",
  },
} as const;

export const trustIntro = {
  eyebrow: "Institutions",
} as const;

export const trustItems = [
  "CEMIC University Hospital & Institute",
  "Argentine Society of Rhinoplasty",
  "University of Buenos Aires",
  "UNAM · Rhinology & facial surgery",
] as const;

export const about = {
  eyebrow: "About",
  title: "ENT physician. Rhinology specialist.",
  quote:
    "I want you to understand what can —and cannot— be done before surgery. If you need a second opinion, reach out.",
  concise:
    "Training at UNT, UBA, and UNAM. I work with the Rhinology team at CEMIC University Hospital and serve as Assistant Professor. In private practice I focus on functional and aesthetic nasal surgery and rhinology.",
  paragraphs: [
    "I earned my medical degree at the National University of Tucumán and specialized in Otorhinolaryngology at UBA. I then completed postgraduate training in Rhinology and Facial Surgery at UNAM, a sleep medicine diploma (Universidad Austral), and a diploma in AI applied to medicine (Universidad Favaloro).",
    "Today I am part of the Rhinology team at CEMIC. In clinic I see nasal breathing issues, septal deviation, sinusitis, rhinoplasty, and facial surgery —from everyday cases to revisions and complex sequelae.",
  ],
  images: [
    {
      src: "/images/perfil2.jpg",
      alt: "Professional portrait of Dr. Carlos López Moris",
    },
    {
      src: "/images/perfil1.jpg",
      alt: "Dr. López Moris in consultation",
    },
    {
      src: "/images/perfil3.jpg",
      alt: "Dr. López Moris in a clinical setting",
    },
  ],
  highlights: [
    { label: "Experience", value: "15+ years" },
    { label: "Training", value: "UNT · UBA · UNAM" },
    { label: "License", value: "MN 133953" },
  ],
  servicesLink: "View services →",
} as const;

export const servicesIntro = {
  eyebrow: "Services",
  title: "What I see in consultation.",
  support:
    "Nasal breathing problems, rhinoplasty, and facial surgery. I explain options, timelines, and limits clearly.",
  footer: "If you struggle to breathe or are considering nasal surgery, start with a consultation.",
  casesLink: "View cases →",
} as const;

export const services = [
  {
    id: "cirugias-nasales",
    title: "Nasal surgery",
    description:
      "From septal deviation and airway obstruction to polyps, chronic sinusitis, septal perforations, trauma, and revision cases.",
  },
  {
    id: "rinologia",
    title: "Functional & aesthetic rhinology",
    description:
      "Breathing well and looking natural are not separate goals. I assess obstruction and shape together and build a plan for you.",
  },
  {
    id: "facial",
    title: "Aesthetic facial surgery",
    description:
      "Facial procedures with careful planning: no promises of a “new face”, with respect for your features.",
  },
  {
    id: "reparadora",
    title: "Aesthetic & reconstructive medicine",
    description:
      "Medical treatments that complement surgery when they add something concrete to the plan —not a generic menu.",
  },
] as const;

export const timelineIntro = {
  eyebrow: "Training",
  title: "Where I come from.",
  support: "Academic and clinical milestones behind today's practice.",
  footer: "Diplomas for each stage are below.",
  diplomasLink: "View diplomas →",
} as const;

export const timeline = [
  {
    year: "2010",
    title: "Medical degree",
    place: "Universidad Nacional de Tucumán",
  },
  {
    year: "2012",
    title: "Rhinology & facial surgery",
    place: "Universidad Autónoma de México",
  },
  {
    year: "2016",
    title: "Otorhinolaryngology specialist",
    place: "Universidad de Buenos Aires",
  },
  {
    year: "2022",
    title: "Rhinoplasty Full Immersion Experience",
    place: "Rinoplastia de Buenos Aires",
  },
  {
    year: "2023",
    title: "Orofacial harmonization",
    place: "Universidad Abierta Interamericana",
  },
  {
    year: "2024",
    title: "Founding member",
    place: "Sociedad Argentina de Rinoplastia",
  },
] as const;

/** Diplomas y certificaciones (datos fácticos). */
export const credentialsIntro = {
  eyebrow: "Documents",
  title: "Diplomas & certifications.",
  support: "Records that support the training outlined above.",
  aside: "Original documents · shared with consent",
  footer: "Prefer the timeline? Jump back to training.",
  backLink: "Back to training →",
  showMore: "Show more",
  showLess: "Show less",
} as const;

export const credentials = [
  {
    id: "medico-unt",
    category: "academic" as const,
    title: "Médico",
    institution: "Universidad Nacional de Tucumán",
    year: "2010",
    image: "/images/unt.jpeg",
  },
  {
    id: "rino-unam",
    category: "academic" as const,
    title: "Rinología y Cirugía Facial",
    institution: "Universidad Autónoma de México",
    year: "2012",
    image: "/images/unam.jpg",
  },
  {
    id: "orl-uba",
    category: "academic" as const,
    title: "Especialista en Otorrinolaringología",
    institution: "Universidad de Buenos Aires",
    year: "2016",
    image: "/images/uba.jpeg",
  },
  {
    id: "saref-activo",
    category: "complementary" as const,
    title: "Miembro Activo",
    institution: "Sociedad Argentina de Rinoplastia Estética y Funcional",
    year: "2017",
    image: "/images/saref.jpg",
  },
  {
    id: "fleni-2019",
    category: "complementary" as const,
    title: "Cerebral, Ventricular and Skull Base Neuroendoscopy",
    institution: "Fleni",
    year: "2019",
    image: "/images/fleni.jpeg",
  },
  {
    id: "rhino-immersion",
    category: "complementary" as const,
    title: "Rhinoplasty Full Immersion Experience",
    institution: "Rinoplastia de Buenos Aires",
    year: "2022",
    image: "/images/rhinoplasty1.jpg",
  },
  {
    id: "uai-2023",
    category: "academic" as const,
    title: "Armonización Orofacial",
    institution: "Universidad Abierta Interamericana",
    year: "2023",
    image: "/images/uai.jpg",
  },
  {
    id: "rhinotips",
    category: "complementary" as const,
    title: "RhinoTips",
    institution: "Rhinoplasty",
    year: "2023",
    image: "/images/tips.jpg",
  },
  {
    id: "sar-fundador",
    category: "complementary" as const,
    title: "Miembro Fundador",
    institution: "Sociedad Argentina de Rinoplastia",
    year: "2024",
    image: "/images/sar.jpg",
  },
  {
    id: "medtronic",
    category: "complementary" as const,
    title: "Advance Navigate Procedure Workshop",
    institution: "Medtronic",
    year: "2024",
    image: "/images/medtronic.jpeg",
  },
  {
    id: "nexus",
    category: "complementary" as const,
    title: "Encuentro Educativo Nexus Argentina",
    institution: "Nexus",
    year: "2024",
    image: "/images/nexus.jpeg",
  },
] as const;

export const credentialCategories = [
  { id: "all", label: "All" },
  { id: "academic", label: "Academic credentials" },
  { id: "complementary", label: "Certificates & experience" },
] as const;

export const credentialCategoryLabels = {
  academic: "Academic training",
  complementary: "Continuing education",
} as const;

export const galleryIntro = {
  eyebrow: "Gallery",
  title: "Before & after.",
  support:
    "Clinical photos from patients who authorized their use. Each case had its own plan; these are not guaranteed outcomes.",
  aside: "With consent · medical education use",
  cta: "Wondering if your case fits what I do? Book a consultation.",
} as const;

/** Un ángulo fotográfico dentro de un caso clínico. */
type GalleryView = {
  label: string;
  before: string;
  after: string;
};

/** Casos clínicos antes/después (pares en /images/ba). */
export const gallery: {
  id: string;
  label: string;
  title: string;
  detail: string;
  views: GalleryView[];
}[] = [
  {
    id: "rinoplastia-01",
    label: "Caso 01",
    title: "Rhinoplasty",
    detail: "Profile view",
    views: [
      {
        label: "Profile view",
        before: "/images/ba/rinoplastia-01-antes.jpg",
        after: "/images/ba/rinoplastia-01-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-02",
    label: "Caso 02",
    title: "Rhinoplasty",
    detail: "Profile view",
    views: [
      {
        label: "Profile view",
        before: "/images/ba/rinoplastia-02-antes.jpg",
        after: "/images/ba/rinoplastia-02-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-03",
    label: "Caso 03",
    title: "Rhinoplasty",
    detail: "Profile view",
    views: [
      {
        label: "Profile view",
        before: "/images/ba/rinoplastia-03-antes.jpg",
        after: "/images/ba/rinoplastia-03-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-04",
    label: "Caso 04",
    title: "Rhinoplasty",
    detail: "Profile view",
    views: [
      {
        label: "Profile view",
        before: "/images/ba/rinoplastia-04-antes.jpg",
        after: "/images/ba/rinoplastia-04-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-05",
    label: "Caso 05",
    title: "Rhinoplasty",
    detail: "Profile view",
    views: [
      {
        label: "Profile view",
        before: "/images/ba/rinoplastia-05-antes.jpg",
        after: "/images/ba/rinoplastia-05-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-06",
    label: "Caso 06",
    title: "Rhinoplasty",
    detail: "Profile & three-quarter",
    views: [
      {
        label: "Profile view",
        before: "/images/ba/rinoplastia-06-antes.jpg",
        after: "/images/ba/rinoplastia-06-despues.jpg",
      },
      {
        label: "Three-quarter view",
        before: "/images/ba/rinoplastia-07-antes.jpg",
        after: "/images/ba/rinoplastia-07-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-07",
    label: "Caso 07",
    title: "Rhinoplasty",
    detail: "Surgical record",
    views: [
      {
        label: "Surgical record",
        before: "/images/ba/rinoplastia-08-antes.jpg",
        after: "/images/ba/rinoplastia-08-despues.jpg",
      },
    ],
  },
];

export const testimonialsIntro = {
  eyebrow: "Reviews",
  title: "What patients write.",
  support: "Reviews published on Google.",
} as const;

/** Google reviews (verify the place link before production). */
export const testimonials = [
  {
    quote:
      "I had a deviated septum and Dr. López Moris operated on me. He and his entire team were attentive throughout. Even during surgery the atmosphere felt comfortable and welcoming. I highly recommend seeing this doctor.",
    name: "Maria Casanegra",
    detail: "Google · 5.0",
  },
  {
    quote:
      "A dedicated professional—from the first visit he was kind and patient, and took all the time I needed to explain every step of the procedure in detail. I also want to highlight Florencia, his secretary, for her warmth and helpfulness.",
    name: "Soledad Iglesias",
    detail: "Google · 5.0",
  },
  {
    quote:
      "I had functional nose surgery. As soon as the packing came out I could breathe better. It was minimally invasive and within a few days I was back to normal life. Carlos explained everything upfront; I always felt well cared for.",
    name: "Sofia Ploschuk",
    detail: "Google · 5.0",
  },
] as const;

export const faqsIntro = {
  eyebrow: "Questions",
  title: "What I'm asked most.",
  support: "Recovery, care, anesthesia, and timelines. If your question isn't here, message me.",
  disclaimer: "General guidance only. Your case is defined in consultation.",
} as const;

export const faqs = [
  {
    question: "¿Cuánto dura la recuperación?",
    answer:
      "Es escalonada. A las 48 hs: movimiento en casa y tareas livianas (sin agacharte ni forzar). Entre 5 y 10 días: muchas personas vuelven a trabajo de oficina o salidas cortas. Gimnasio o deporte intenso: en general de 3 semanas a 1 mes, para bajar riesgo de sangrado o inflamación. El ritmo exacto depende de cómo evoluciones.",
  },
  {
    question: "¿Qué cuidados debo tener?",
    answer:
      "Los primeros 7 días, reposo relativo o actividades muy tranquilas —no hace falta quedarse en la cama. Actividad aeróbica: esperar alrededor de 3 semanas. Esfuerzo anaeróbico intenso: cerca de un mes.",
  },
  {
    question: "¿Cuánto dura una cirugía nasal?",
    answer:
      "Depende del caso. En funcional suele rondar las 2 horas; en procedimientos estéticos, cerca de 3. Son promedios: puede ser menos o más según lo que haya que corregir.",
  },
  {
    question: "¿Cuánto tiempo tengo que estar internado?",
    answer:
      "En la mayoría de los casos es ambulatorio: aproximadamente una hora antes y tres horas después de la cirugía.",
  },
  {
    question: "¿Es doloroso?",
    answer:
      "El postoperatorio de rinoplastia suele ser poco doloroso. Lo más habitual es congestión o presión, parecido a un resfrío. Si hace falta, se maneja con analgésicos comunes (por ejemplo ibuprofeno o diclofenac), según indiquemos.",
  },
  {
    question: "¿Qué estudios necesito antes de una rinoplastia?",
    answer:
      "Evaluación otorrinolaringológica, análisis de sangre (hemograma, glucemia, coagulación, función renal) y electrocardiograma con valoración cardiológica. Según el caso, a veces radiografía de tórax o tomografía de nariz y senos.",
  },
  {
    question: "¿Con qué anestesia se hace la rinoplastia?",
    answer:
      "Anestesia general. Trabajamos con anestesiólogos titulados por la Asociación Argentina de Anestesiología, del equipo habitual, con experiencia en cirugía facial.",
  },
  {
    question: "¿Cuándo se ven los resultados definitivos?",
    answer:
      "Al sacar la férula (cerca de una semana) ya se ve un cambio, todavía con inflamación. Alrededor de los 2 meses se aprecia gran parte del resultado. Los cambios finos pueden seguir hasta el año; para el entorno social, suele estabilizarse bastante después del tercer mes.",
  },
] as const;

export const contactIntro = {
  eyebrow: "Contact",
  title: "Appointments in Palermo and at CEMIC.",
  support:
    "CEMIC University Hospital (Las Heras) and office on Pereyra Lucena. WhatsApp or form — I reply on the same channel.",
} as const;

export const locations = [
  {
    name: "Hospital Universitario CEMIC",
    address: "Av. Las Heras 2900, Palermo, Buenos Aires",
    hours: "Tue · Thu · Fri: 2:00 – 5:00 PM",
  },
  {
    name: "Consultorio Dr. López Moris",
    address: 'Pereyra Lucena 2535, Pb "A", Palermo, Buenos Aires',
    hours: "Wed: 8:00 AM – 7:30 PM",
  },
] as const;

export const contactForm = {
  eyebrow: "Inquiry",
  title: "Write to me",
  lead: "I'll reply shortly on WhatsApp.",
  name: "Name",
  phone: "Phone",
  email: "Email",
  message: "Message",
  messagePlaceholder: "How can I help?",
  submit: "Send via WhatsApp",
  submitOpen: "Open WhatsApp",
  phoneOr: "Or call",
  whatsappIntro: "Hello Dr. López Moris, I'd like to get in touch.",
} as const;

export const bookingCopy = {
  eyebrow: "Scheduling",
  lead: "We'll open WhatsApp to confirm your appointment.",
  name: "Full name",
  phone: "Phone / WhatsApp",
  reason: "Reason for visit",
  reasonPlaceholder: "Breathing, rhinoplasty…",
  message: "Message (optional)",
  messagePlaceholder: "Brief details, if you like",
  submit: "Continue on WhatsApp",
  submitOpen: "Open WhatsApp",
  phoneOr: "Or",
  phoneCall: "call",
  close: "Close",
  closeForm: "Close form",
  whatsappIntro: "Hello Dr. López Moris, I'd like to book an appointment.",
} as const;

export const footerCopy = {
  navEyebrow: "Navigation",
  contactEyebrow: "Contact",
  rights: "All rights reserved.",
  devCredit: "Built by",
  devAria: "Built by Agustin Ader — opens in a new tab",
} as const;

export const ui = {
  close: "Close",
  before: "Before",
  after: "After",
  compare: "Compare",
  toggle: "Toggle",
  previous: "Previous",
  next: "Next",
  caseLabel: "Case",
  caseOf: "of",
  seeCase: "View case",
  viewsDocumented: "documented views",
  swipeCases: "Swipe only in this area to see another case",
  enlargeDocument: "Enlarge document",
  document: "Document",
  previousDocument: "Previous document",
  nextDocument: "Next document",
  closeDocument: "Close document",
  compareSlider: "Compare before and after",
  filterCredentials: "Filter credentials",
  goToCase: "Go to",
  langSwitch: "Language",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  mobileNav: "Main menu",
  mobileMenuLabel: "Menu",
} as const;
