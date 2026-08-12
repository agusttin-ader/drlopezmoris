export const site = {
  name: "Dr. Carlos López Moris",
  shortName: "Dr. López Moris",
  title: "Médico otorrinolaringólogo · Especialista en rinología",
  description:
    "Otorrinolaringólogo en Buenos Aires: rinología, rinoplastia funcional y estética, y cirugía nasal. Consulta en Hospital Universitario CEMIC y consultorio en Palermo.",
  url: "https://drlopezmoris.com",
  phoneDisplay: "+54 9 11 7200-3461",
  phoneHref: "tel:+5491172003461",
  whatsappUrl: "https://wa.me/5491172003461",
  email: "contacto@drlopezmoris.com",
  instagram: "https://www.instagram.com/dr.lopezmoris.rinologia",
  linkedin: "https://www.linkedin.com/in/carlos-b-l%C3%B3pez-moris-225a0655/",
  matricula: "MN 133953",
  logo: "/images/iso-moris.png",
  ogImage: "/images/banner1.jpg",
  footerBlurb:
    "Rinología y cirugía nasal en Buenos Aires. CEMIC · consultorio en Palermo · MN 133953.",
} as const;

export const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#galeria", label: "Galería" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
  brandLines: ["Dr. Carlos", "López Moris"] as const,
  eyebrow: "Rinología · Cirugía nasal · Buenos Aires",
  headline: "Cirugía de nariz y rinología, con un plan claro desde la primera consulta.",
  support:
    "Atiendo en el Hospital Universitario CEMIC y en consultorio en Palermo. Rinoplastia funcional y estética, y patología nasal compleja.",
  primaryCta: "Pedir turno",
  secondaryCta: "Ver casos",
  image: {
    src: "/images/banner1.jpg",
    alt: "Dr. Carlos López Moris",
  },
} as const;

export const trustIntro = {
  eyebrow: "Instituciones",
} as const;

export const trustItems = [
  "Hospital Universitario CEMIC",
  "Sociedad Argentina de Rinoplastia",
  "Instituto Universitario CEMIC",
  "Universidad de Buenos Aires",
  "UNAM · Rinología y Cirugía Facial",
] as const;

export const about = {
  eyebrow: "Sobre mí",
  title: "Otorrinolaringólogo. Especialista en rinología.",
  quote:
    "Me importa que entiendas qué se puede hacer —y qué no— antes de operar. Si necesitás una segunda mirada, escribime.",
  concise:
    "Formación en UNT, UBA y UNAM. Trabajo en el equipo de Rinología del Hospital Universitario CEMIC y soy Profesor Asistente. En el consultorio me dedico a cirugía nasal y rinología funcional y estética.",
  paragraphs: [
    "Me recibí de médico en la Universidad Nacional de Tucumán y me especialicé en Otorrinolaringología en la UBA. Después hice un posgrado en Rinología y Cirugía Facial en la UNAM, un diplomado en Medicina del Sueño (Universidad Austral) y otro en Inteligencia Artificial aplicada a la Medicina (Universidad Favaloro).",
    "Hoy formo parte del equipo de Rinología del CEMIC. En consultorio veo casos de respiración nasal, desvíos, sinusitis, rinoplastia y cirugía facial —desde lo cotidiano hasta reoperaciones y secuelas.",
  ],
  images: [
    {
      src: "/images/perfil2.jpg",
      alt: "Retrato profesional del Dr. Carlos López Moris",
    },
    {
      src: "/images/perfil1.jpg",
      alt: "Dr. López Moris en consulta",
    },
    {
      src: "/images/perfil3.jpg",
      alt: "Dr. López Moris en entorno clínico",
    },
  ],
  highlights: [
    { label: "Trayectoria", value: "+15 años" },
    { label: "Formación", value: "UNT · UBA · UNAM" },
    { label: "Matrícula", value: "MN 133953" },
  ],
  servicesLink: "Ver servicios →",
} as const;

export const servicesIntro = {
  eyebrow: "Servicios",
  title: "Qué veo en consulta.",
  support:
    "Problemas de respiración nasal, rinoplastia y cirugía facial. Te explico opciones, tiempos y límites con claridad.",
  footer: "Si respirás mal o estás pensando en operarte la nariz, empecemos por una consulta.",
  casesLink: "Ver casos →",
} as const;

export const services = [
  {
    id: "cirugias-nasales",
    title: "Cirugías nasales",
    description:
      "Desde desvíos e insuficiencia ventilatoria hasta poliposis, sinusitis crónica, perforaciones septales, traumatismos y reoperaciones.",
  },
  {
    id: "rinologia",
    title: "Rinología funcional y estética",
    description:
      "Respirar bien y verse natural no son objetivos separados. Evalúo obstrucción y forma juntos, y armo un plan a tu medida.",
  },
  {
    id: "facial",
    title: "Cirugía estética facial",
    description:
      "Procedimientos faciales con planificación cuidadosa: sin promesas de “cambio de cara”, con respeto por tu fisonomía.",
  },
  {
    id: "reparadora",
    title: "Medicina estética y reparadora",
    description:
      "Tratamientos médicos complementarios a la cirugía, cuando aportan algo concreto al plan —no como menú genérico.",
  },
] as const;

export const timelineIntro = {
  eyebrow: "Formación",
  title: "De dónde vengo.",
  support: "Hitos académicos y clínicos que respaldan el trabajo de hoy.",
  footer: "Los diplomas de cada etapa están más abajo.",
  diplomasLink: "Ver diplomas →",
} as const;

export const timeline = [
  {
    year: "2010",
    title: "Médico",
    place: "Universidad Nacional de Tucumán",
  },
  {
    year: "2012",
    title: "Rinología y cirugía facial",
    place: "Universidad Autónoma de México",
  },
  {
    year: "2016",
    title: "Especialista en otorrinolaringología",
    place: "Universidad de Buenos Aires",
  },
  {
    year: "2022",
    title: "Rhinoplasty Full Immersion Experience",
    place: "Rinoplastia de Buenos Aires",
  },
  {
    year: "2023",
    title: "Armonización orofacial",
    place: "Universidad Abierta Interamericana",
  },
  {
    year: "2024",
    title: "Miembro fundador",
    place: "Sociedad Argentina de Rinoplastia",
  },
] as const;

/** Diplomas y certificaciones (datos fácticos). */
export const credentialsIntro = {
  eyebrow: "Documentos",
  title: "Diplomas y certificaciones.",
  support: "Los papeles que respaldan la formación que listé arriba.",
  aside: "Documentos originales · con consentimiento de uso",
  footer: "Si preferís el resumen cronológico, volvé a la línea de tiempo.",
  backLink: "Volver a la formación →",
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
  { id: "all", label: "Todos" },
  { id: "academic", label: "Reconocimientos académicos" },
  { id: "complementary", label: "Certificados y experiencia" },
] as const;

export const credentialCategoryLabels = {
  academic: "Formación académica",
  complementary: "Formación continua",
} as const;

export const galleryIntro = {
  eyebrow: "Galería",
  title: "Antes y después.",
  support:
    "Fotos clínicas de pacientes que autorizaron su uso. Cada caso tuvo su propio plan; no son “resultados garantizados”.",
  aside: "Con consentimiento · uso médico-educativo",
  cta: "Si querés ver si tu caso entra en lo que hago, pedí una consulta.",
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
    title: "Rinoplastia",
    detail: "Vista de perfil",
    views: [
      {
        label: "Vista de perfil",
        before: "/images/ba/rinoplastia-01-antes.jpg",
        after: "/images/ba/rinoplastia-01-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-02",
    label: "Caso 02",
    title: "Rinoplastia",
    detail: "Vista de perfil",
    views: [
      {
        label: "Vista de perfil",
        before: "/images/ba/rinoplastia-02-antes.jpg",
        after: "/images/ba/rinoplastia-02-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-03",
    label: "Caso 03",
    title: "Rinoplastia",
    detail: "Vista de perfil",
    views: [
      {
        label: "Vista de perfil",
        before: "/images/ba/rinoplastia-03-antes.jpg",
        after: "/images/ba/rinoplastia-03-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-04",
    label: "Caso 04",
    title: "Rinoplastia",
    detail: "Vista de perfil",
    views: [
      {
        label: "Vista de perfil",
        before: "/images/ba/rinoplastia-04-antes.jpg",
        after: "/images/ba/rinoplastia-04-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-05",
    label: "Caso 05",
    title: "Rinoplastia",
    detail: "Vista de perfil",
    views: [
      {
        label: "Vista de perfil",
        before: "/images/ba/rinoplastia-05-antes.jpg",
        after: "/images/ba/rinoplastia-05-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-06",
    label: "Caso 06",
    title: "Rinoplastia",
    detail: "Perfil y tres cuartos",
    views: [
      {
        label: "Vista de perfil",
        before: "/images/ba/rinoplastia-06-antes.jpg",
        after: "/images/ba/rinoplastia-06-despues.jpg",
      },
      {
        label: "Vista de tres cuartos",
        before: "/images/ba/rinoplastia-07-antes.jpg",
        after: "/images/ba/rinoplastia-07-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-07",
    label: "Caso 07",
    title: "Rinoplastia",
    detail: "Registro quirúrgico",
    views: [
      {
        label: "Registro quirúrgico",
        before: "/images/ba/rinoplastia-08-antes.jpg",
        after: "/images/ba/rinoplastia-08-despues.jpg",
      },
    ],
  },
];

export const testimonialsIntro = {
  eyebrow: "Opiniones",
  title: "Lo que escriben pacientes.",
  support: "Reseñas publicadas en Google.",
} as const;

/** Reseñas publicadas en Google (verificar el enlace del lugar antes de producción). */
export const testimonials = [
  {
    quote:
      "Yo tenía el tabique desviado y el doctor López Moris me operó. Tanto él como todo su equipo profesional son muy atentos en todo. El ambiente en plena cirugía lo sentí muy cómodo y acogedor. Recomiendo mucho que se atiendan con este doctor.",
    name: "Maria Casanegra",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Profesional dedicado, desde la primera consulta fue amable, paciente, y se tomó todo el tiempo necesario para explicarme detalladamente cada paso del procedimiento. Destaco también la amabilidad y buena disposición de Florencia, su secretaria.",
    name: "Soledad Iglesias",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Me hice una cirugía funcional de nariz. Apenas me sacaron los tapones ya sentí que respiraba mejor. Fue muy poco invasiva y a los pocos días ya tenía vida normal. Carlos me explicó todo de entrada; me sentí siempre cuidada.",
    name: "Sofia Ploschuk",
    detail: "Google · 5.0",
  },
] as const;

export const faqsIntro = {
  eyebrow: "Preguntas",
  title: "Lo que más me preguntan.",
  support: "Recuperación, cuidados, anestesia y tiempos. Si tu duda no está, escribime.",
  disclaimer:
    "Son orientaciones generales. Tu caso se define en consulta.",
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
  eyebrow: "Contacto",
  title: "Turnos en Palermo y en CEMIC.",
  support:
    "Hospital Universitario CEMIC (Las Heras) y consultorio en Pereyra Lucena. WhatsApp o formulario: te respondo por el mismo canal.",
} as const;

export const locations = [
  {
    name: "Hospital Universitario CEMIC",
    address: "Av. Las Heras 2900, Palermo, Buenos Aires",
    hours: "Mar · Jue · Vie: 14:00 – 17:00",
  },
  {
    name: "Consultorio Dr. López Moris",
    address: 'Pereyra Lucena 2535, Pb "A", Palermo, Buenos Aires',
    hours: "Mié: 8:00 – 19:30",
  },
] as const;
