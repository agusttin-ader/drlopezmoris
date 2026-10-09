export const site = {
  name: "Dr. Carlos López Moris",
  shortName: "Dr. López Moris",
  title: "ENT physician · Rhinology specialist",
  description:
    "ENT specialist in Buenos Aires: rhinology, functional and aesthetic rhinoplasty, and nasal surgery. Appointments at CEMIC University Hospital and private practice in Palermo.",
  url: "https://www.drlopezmoris.com",
  phoneDisplay: "+54 9 11 7200-3461",
  phoneHref: "tel:+5491172003461",
  whatsappUrl: "https://wa.me/5491172003461",
  email: "contacto@drlopezmoris.com",
  instagram: "https://www.instagram.com/dr.lopezmoris.rinologia",
  linkedin: "https://www.linkedin.com/in/carlos-b-l%C3%B3pez-moris-225a0655/",
  googleReviews:
    "https://www.google.com/search?q=lopez+moris#lrd=0x95bccb74d8690f7f:0x9b1acf86bfc2d001,1,,,,",
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
  eyebrow: "Career",
  title: "Where I come from.",
  support: "Training, teaching, and clinical work in public and private institutions.",
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
    year: "2010–2014",
    title: "Otorhinolaryngology residency",
    place: "Hospital General de Agudos José María Ramos Mejía",
  },
  {
    year: "2011–2015",
    title: "ENT department professor",
    place: "Faculty of Medicine, Universidad de Buenos Aires",
  },
  {
    year: "2012–2015",
    title: "University otorhinolaryngologist",
    place: "Universidad de Buenos Aires",
  },
  {
    year: "2013",
    title: "Observership in rhinology, laryngology & skull base surgery",
    place: "Hospital Clínic de Barcelona",
  },
  {
    year: "2014–2015",
    title: "Chief resident",
    place: "Hospital Ramos Mejía",
  },
  {
    year: "2015",
    title: "Rhinology unit — staff",
    place: "CEMIC",
  },
  {
    year: "2015",
    title: "Assistant professor of otorhinolaryngology",
    place: "CEMIC",
  },
  {
    year: "2015–2023",
    title: "External ENT & skull base consultant",
    place: "Fleni",
  },
  {
    year: "2016",
    title: "Otorhinolaryngology specialist",
    place: "Universidad de Buenos Aires",
  },
  {
    year: "2019",
    title: "Doctorate in medicine (in progress)",
    place: "Instituto Universitario CEMIC",
  },
  {
    year: "2020",
    title: "Board member",
    place: "Argentine Federation of Otorhinolaryngology Societies",
  },
  {
    year: "2020",
    title: "Board member",
    place: "Club ORL",
  },
  {
    year: "2022",
    title: "Rhinoplasty Full Immersion Experience",
    place: "Rinoplastia de Buenos Aires",
  },
  {
    year: "2022–2023",
    title: "Rhinology & facial surgery",
    place: "Universidad Autónoma de México",
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
  showMore: "View more cases",
  showLess: "Show less",
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
    id: "rinoplastia-07",
    label: "Caso 01",
    title: "Rhinoplasty",
    detail: "Front, profiles, three-quarter, base & top",
    views: [
      {
        label: "Front",
        before: "/images/ba/caso08-frente-antes.jpg",
        after: "/images/ba/caso08-frente-despues.jpg",
      },
      {
        label: "Front, smiling",
        before: "/images/ba/caso08-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso08-frente-sonrisa-despues.jpg",
      },
      {
        label: "Right profile",
        before: "/images/ba/caso08-perfil-der-antes.jpg",
        after: "/images/ba/caso08-perfil-der-despues.jpg",
      },
      {
        label: "Right profile, smiling",
        before: "/images/ba/caso08-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso08-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Left profile, smiling",
        before: "/images/ba/caso08-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso08-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Right three-quarter",
        before: "/images/ba/caso08-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso08-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Left three-quarter",
        before: "/images/ba/caso08-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso08-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Base",
        before: "/images/ba/caso08-basal-antes.jpg",
        after: "/images/ba/caso08-basal-despues.jpg",
      },
      {
        label: "Top",
        before: "/images/ba/caso08-superior-antes.jpg",
        after: "/images/ba/caso08-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-08",
    label: "Caso 02",
    title: "Rhinoplasty",
    detail: "Front, profiles, three-quarter, base & top",
    views: [
      {
        label: "Front",
        before: "/images/ba/caso2-frente-antes.jpg",
        after: "/images/ba/caso2-frente-despues.jpg",
      },
      {
        label: "Front, smiling",
        before: "/images/ba/caso2-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso2-frente-sonrisa-despues.jpg",
      },
      {
        label: "Right profile",
        before: "/images/ba/caso2-perfil-der-antes.jpg",
        after: "/images/ba/caso2-perfil-der-despues.jpg",
      },
      {
        label: "Right profile, smiling",
        before: "/images/ba/caso2-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso2-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Left profile",
        before: "/images/ba/caso2-perfil-izq-antes.jpg",
        after: "/images/ba/caso2-perfil-izq-despues.jpg",
      },
      {
        label: "Left profile, smiling",
        before: "/images/ba/caso2-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso2-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Right three-quarter",
        before: "/images/ba/caso2-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso2-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Left three-quarter",
        before: "/images/ba/caso2-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso2-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Base",
        before: "/images/ba/caso2-basal-antes.jpg",
        after: "/images/ba/caso2-basal-despues.jpg",
      },
      {
        label: "Top",
        before: "/images/ba/caso2-superior-antes.jpg",
        after: "/images/ba/caso2-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-caso-03",
    label: "Caso 03",
    title: "Rhinoplasty",
    detail: "Front, profiles, three-quarter, base & top",
    views: [
      {
        label: "Front",
        before: "/images/ba/caso3-frente-antes.jpg",
        after: "/images/ba/caso3-frente-despues.jpg",
      },
      {
        label: "Right profile",
        before: "/images/ba/caso3-perfil-der-antes.jpg",
        after: "/images/ba/caso3-perfil-der-despues.jpg",
      },
      {
        label: "Right profile, smiling",
        before: "/images/ba/caso3-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso3-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Left profile",
        before: "/images/ba/caso3-perfil-izq-antes.jpg",
        after: "/images/ba/caso3-perfil-izq-despues.jpg",
      },
      {
        label: "Left profile, smiling",
        before: "/images/ba/caso3-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso3-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Right three-quarter",
        before: "/images/ba/caso3-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso3-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Left three-quarter",
        before: "/images/ba/caso3-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso3-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Base",
        before: "/images/ba/caso3-basal-antes.jpg",
        after: "/images/ba/caso3-basal-despues.jpg",
      },
      {
        label: "Top",
        before: "/images/ba/caso3-superior-antes.jpg",
        after: "/images/ba/caso3-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-caso-04",
    label: "Caso 04",
    title: "Rhinoplasty",
    detail: "Front, profiles, three-quarter, base & top",
    views: [
      {
        label: "Front",
        before: "/images/ba/caso4-frente-antes.jpg",
        after: "/images/ba/caso4-frente-despues.jpg",
      },
      {
        label: "Front, smiling",
        before: "/images/ba/caso4-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso4-frente-sonrisa-despues.jpg",
      },
      {
        label: "Right profile",
        before: "/images/ba/caso4-perfil-der-antes.jpg",
        after: "/images/ba/caso4-perfil-der-despues.jpg",
      },
      {
        label: "Right profile, smiling",
        before: "/images/ba/caso4-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso4-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Left profile",
        before: "/images/ba/caso4-perfil-izq-antes.jpg",
        after: "/images/ba/caso4-perfil-izq-despues.jpg",
      },
      {
        label: "Right three-quarter",
        before: "/images/ba/caso4-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso4-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Left three-quarter",
        before: "/images/ba/caso4-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso4-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Base",
        before: "/images/ba/caso4-basal-antes.jpg",
        after: "/images/ba/caso4-basal-despues.jpg",
      },
      {
        label: "Top",
        before: "/images/ba/caso4-superior-antes.jpg",
        after: "/images/ba/caso4-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-01",
    label: "Caso 05",
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
    label: "Caso 06",
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
    label: "Caso 07",
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
    label: "Caso 08",
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
    label: "Caso 09",
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
    label: "Caso 10",
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
];

export const testimonialsIntro = {
  eyebrow: "Reviews",
  title: "What patients write.",
  moreOnGoogle: "Read more reviews on Google →",
} as const;

/** Google reviews — three shown at a time, rotating on the site. */
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
  {
    quote:
      "An excellent professional. He takes time to explain procedures clearly and is always available. One week after my functional and aesthetic surgery I am very happy with the result. Highly recommended.",
    name: "",
    detail: "Google · 5.0",
  },
  {
    quote:
      "I want to thank Dr. Carlos for his warmth and professionalism. From the first visit he listened, answered every question, and explained each detail of the procedure. Surgery was at CEMIC Hospital; I felt supported throughout. I recommend him without hesitation.",
    name: "",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Outstanding professional and highly recommended. He listens, answers every question, and explains the diagnosis and options clearly. His manner is warm and builds real trust; his training in ENT really shows.",
    name: "",
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
    question: "How long is recovery?",
    answer:
      "It happens in stages. After 48 hours: moving around at home and light tasks (no bending over or straining). Between 5 and 10 days: many people return to office work or short outings. Gym or intense sports: usually 3 weeks to 1 month, to lower the risk of bleeding or swelling. The exact pace depends on how you heal.",
  },
  {
    question: "What care do I need to take?",
    answer:
      "For the first 7 days, relative rest or very calm activities —you don't need to stay in bed. Aerobic activity: wait about 3 weeks. Intense anaerobic effort: about a month.",
  },
  {
    question: "How long does nasal surgery take?",
    answer:
      "It depends on the case. Functional surgery usually takes around 2 hours; aesthetic procedures, about 3. These are averages: it may be shorter or longer depending on what needs correcting.",
  },
  {
    question: "How long will I stay in hospital?",
    answer:
      "In most cases it's outpatient: roughly one hour before and three hours after surgery.",
  },
  {
    question: "Is it painful?",
    answer:
      "Recovery after rhinoplasty is usually not very painful. The most common sensation is congestion or pressure, similar to a cold. If needed, it's managed with common pain relievers (for example ibuprofen or diclofenac), as we advise.",
  },
  {
    question: "What tests do I need before rhinoplasty?",
    answer:
      "An ENT assessment, blood tests (complete blood count, glucose, coagulation, kidney function), and an electrocardiogram with cardiology clearance. Depending on the case, sometimes a chest X-ray or a CT scan of the nose and sinuses.",
  },
  {
    question: "What anesthesia is used for rhinoplasty?",
    answer:
      "General anesthesia. We work with our regular team of anesthesiologists certified by the Argentine Association of Anesthesiology, experienced in facial surgery.",
  },
  {
    question: "When are the final results visible?",
    answer:
      "When the splint comes off (about a week) you can already see a change, still with swelling. Around 2 months, much of the result is visible. Fine changes can continue for up to a year; socially, things are usually quite settled after the third month.",
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
  swipeAngles: "Swipe in this area to see another angle",
  angles: "Angles",
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
