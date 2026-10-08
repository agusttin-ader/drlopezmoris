export const site = {
  name: "Dr. Carlos López Moris",
  shortName: "Dr. López Moris",
  title: "Médico otorrinolaringologista · Especialista em rinologia",
  description:
    "Otorrinolaringologista em Buenos Aires: rinologia, rinoplastia funcional e estética, e cirurgia nasal. Atendimento no Hospital Universitário CEMIC e consultório em Palermo.",
  url: "https://drlopezmoris.com",
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
    "Rinologia e cirurgia nasal em Buenos Aires. CEMIC · consultório em Palermo · MN 133953.",
} as const;

export const nav = [
  { href: "#servicios", label: "Serviços" },
  { href: "#sobre-mi", label: "Sobre mim" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contacto", label: "Contato" },
] as const;

export const hero = {
  brandLines: ["Dr. Carlos", "López Moris"] as const,
  eyebrow: "Rinologia · Cirurgia nasal · Buenos Aires",
  headline: "Cirurgia do nariz e rinologia, com um plano claro desde a primeira consulta.",
  support:
    "Atendo no Hospital Universitário CEMIC e em consultório em Palermo. Rinoplastia funcional e estética, e patologia nasal complexa.",
  primaryCta: "Agendar consulta",
  primaryCtaShort: "Agendar",
  headerCta: "Contato",
  secondaryCta: "Ver casos",
  image: {
    src: "/images/banner1.jpg",
    alt: "Dr. Carlos López Moris, otorrinolaringologista e especialista em rinologia",
  },
} as const;

export const trustIntro = {
  eyebrow: "Instituições",
} as const;

export const trustItems = [
  "Hospital e Instituto Universitário CEMIC",
  "Sociedade Argentina de Rinoplastia",
  "Universidade de Buenos Aires",
  "UNAM · Rinologia e Cirurgia Facial",
] as const;

export const about = {
  eyebrow: "Sobre mim",
  title: "Otorrinolaringologista. Especialista em rinologia.",
  quote:
    "Para mim é importante que você entenda o que pode —e o que não pode— ser feito antes de operar. Se precisar de uma segunda opinião, escreva para mim.",
  concise:
    "Formação na UNT, UBA e UNAM. Trabalho na equipe de Rinologia do Hospital Universitário CEMIC e sou Professor Assistente. No consultório me dedico à cirurgia nasal e à rinologia funcional e estética.",
  paragraphs: [
    "Formei-me em medicina na Universidade Nacional de Tucumán e me especializei em Otorrinolaringologia na UBA. Depois fiz pós-graduação em Rinologia e Cirurgia Facial na UNAM, um diploma em Medicina do Sono (Universidade Austral) e outro em Inteligência Artificial aplicada à Medicina (Universidade Favaloro).",
    "Hoje faço parte da equipe de Rinologia do CEMIC. No consultório atendo casos de respiração nasal, desvio de septo, sinusite, rinoplastia e cirurgia facial —desde o cotidiano até reoperações e sequelas.",
  ],
  images: [
    {
      src: "/images/perfil2.jpg",
      alt: "Retrato profissional do Dr. Carlos López Moris",
    },
    {
      src: "/images/perfil1.jpg",
      alt: "Dr. López Moris em consulta",
    },
    {
      src: "/images/perfil3.jpg",
      alt: "Dr. López Moris em ambiente clínico",
    },
  ],
  highlights: [
    { label: "Trajetória", value: "+15 anos" },
    { label: "Formação", value: "UNT · UBA · UNAM" },
    { label: "Registro", value: "MN 133953" },
  ],
  servicesLink: "Ver serviços →",
} as const;

export const servicesIntro = {
  eyebrow: "Serviços",
  title: "O que atendo em consulta.",
  support:
    "Problemas de respiração nasal, rinoplastia e cirurgia facial. Explico opções, prazos e limites com clareza.",
  footer: "Se você respira mal ou está pensando em operar o nariz, comecemos por uma consulta.",
  casesLink: "Ver casos →",
} as const;

export const services = [
  {
    id: "cirugias-nasales",
    title: "Cirurgias nasais",
    description:
      "De desvios de septo e obstrução respiratória a polipose, sinusite crônica, perfurações septais, traumatismos e reoperações.",
  },
  {
    id: "rinologia",
    title: "Rinologia funcional e estética",
    description:
      "Respirar bem e ter um resultado natural não são objetivos separados. Avalio obstrução e forma juntos e monto um plano sob medida.",
  },
  {
    id: "facial",
    title: "Cirurgia estética facial",
    description:
      "Procedimentos faciais com planejamento cuidadoso: sem promessas de “rosto novo”, com respeito às suas características.",
  },
  {
    id: "reparadora",
    title: "Medicina estética e reparadora",
    description:
      "Tratamentos médicos complementares à cirurgia, quando acrescentam algo concreto ao plano —não como um cardápio genérico.",
  },
] as const;

export const timelineIntro = {
  eyebrow: "Trajetória",
  title: "De onde venho.",
  support:
    "Formação, docência e prática clínica em instituições públicas e privadas.",
  footer: "Os diplomas de cada etapa estão mais abaixo.",
  diplomasLink: "Ver diplomas →",
} as const;

export const timeline = [
  {
    year: "2010",
    title: "Médico",
    place: "Universidad Nacional de Tucumán",
  },
  {
    year: "2010–2014",
    title: "Residência em otorrinolaringologia",
    place: "Hospital General de Agudos José María Ramos Mejía",
  },
  {
    year: "2011–2015",
    title: "Professor do departamento de ORL",
    place: "Faculdade de Medicina, Universidad de Buenos Aires",
  },
  {
    year: "2012–2015",
    title: "Otorrinolaringologista universitário",
    place: "Universidad de Buenos Aires",
  },
  {
    year: "2013",
    title: "Observação em rinologia, laringologia e cirurgia de base craniana",
    place: "Hospital Clínic de Barcelona",
  },
  {
    year: "2014–2015",
    title: "Chefe de residentes",
    place: "Hospital Ramos Mejía",
  },
  {
    year: "2015",
    title: "Área de Rinologia",
    place: "CEMIC",
  },
  {
    year: "2015",
    title: "Professor adjunto de otorrinolaringologia",
    place: "CEMIC",
  },
  {
    year: "2015–2023",
    title: "Consultor externo ORL e base craniana",
    place: "Fleni",
  },
  {
    year: "2016",
    title: "Especialista em otorrinolaringologia",
    place: "Universidad de Buenos Aires",
  },
  {
    year: "2019",
    title: "Doutorado em medicina (em curso)",
    place: "Instituto Universitario CEMIC",
  },
  {
    year: "2020",
    title: "Membro da diretoria",
    place: "Federação Argentina de Sociedades de Otorrinolaringologia",
  },
  {
    year: "2020",
    title: "Membro da diretoria",
    place: "Club ORL",
  },
  {
    year: "2022",
    title: "Rhinoplasty Full Immersion Experience",
    place: "Rinoplastia de Buenos Aires",
  },
  {
    year: "2022–2023",
    title: "Rinologia e cirurgia facial",
    place: "Universidad Autónoma de México",
  },
  {
    year: "2023",
    title: "Harmonização orofacial",
    place: "Universidad Abierta Interamericana",
  },
  {
    year: "2024",
    title: "Membro fundador",
    place: "Sociedad Argentina de Rinoplastia",
  },
] as const;

/** Diplomas y certificaciones (datos fácticos). */
export const credentialsIntro = {
  eyebrow: "Documentos",
  title: "Diplomas e certificações.",
  support: "Os documentos que comprovam a formação listada acima.",
  aside: "Documentos originais · com consentimento de uso",
  footer: "Se preferir o resumo cronológico, volte à linha do tempo.",
  backLink: "Voltar à formação →",
  showMore: "Ver mais",
  showLess: "Ver menos",
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
  { id: "academic", label: "Títulos acadêmicos" },
  { id: "complementary", label: "Certificados e experiência" },
] as const;

export const credentialCategoryLabels = {
  academic: "Formação acadêmica",
  complementary: "Formação continuada",
} as const;

export const galleryIntro = {
  eyebrow: "Galeria",
  title: "Antes e depois.",
  support:
    "Fotos clínicas de pacientes que autorizaram seu uso. Cada caso teve seu próprio plano; não são “resultados garantidos”.",
  aside: "Com consentimento · uso médico-educativo",
  cta: "Quer saber se o seu caso se encaixa no que faço? Agende uma consulta.",
  showMore: "Ver mais casos",
  showLess: "Ver menos",
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
    title: "Rinoplastia",
    detail: "Frente, perfis, três quartos, basal e superior",
    views: [
      {
        label: "Frente",
        before: "/images/ba/caso08-frente-antes.jpg",
        after: "/images/ba/caso08-frente-despues.jpg",
      },
      {
        label: "Frente sorrindo",
        before: "/images/ba/caso08-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso08-frente-sonrisa-despues.jpg",
      },
      {
        label: "Perfil direito",
        before: "/images/ba/caso08-perfil-der-antes.jpg",
        after: "/images/ba/caso08-perfil-der-despues.jpg",
      },
      {
        label: "Perfil direito sorrindo",
        before: "/images/ba/caso08-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso08-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Perfil esquerdo sorrindo",
        before: "/images/ba/caso08-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso08-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Três quartos direito",
        before: "/images/ba/caso08-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso08-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Três quartos esquerdo",
        before: "/images/ba/caso08-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso08-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Basal",
        before: "/images/ba/caso08-basal-antes.jpg",
        after: "/images/ba/caso08-basal-despues.jpg",
      },
      {
        label: "Superior",
        before: "/images/ba/caso08-superior-antes.jpg",
        after: "/images/ba/caso08-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-08",
    label: "Caso 02",
    title: "Rinoplastia",
    detail: "Frente, perfis, três quartos, basal e superior",
    views: [
      {
        label: "Frente",
        before: "/images/ba/caso2-frente-antes.jpg",
        after: "/images/ba/caso2-frente-despues.jpg",
      },
      {
        label: "Frente sorrindo",
        before: "/images/ba/caso2-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso2-frente-sonrisa-despues.jpg",
      },
      {
        label: "Perfil direito",
        before: "/images/ba/caso2-perfil-der-antes.jpg",
        after: "/images/ba/caso2-perfil-der-despues.jpg",
      },
      {
        label: "Perfil direito sorrindo",
        before: "/images/ba/caso2-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso2-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Perfil esquerdo",
        before: "/images/ba/caso2-perfil-izq-antes.jpg",
        after: "/images/ba/caso2-perfil-izq-despues.jpg",
      },
      {
        label: "Perfil esquerdo sorrindo",
        before: "/images/ba/caso2-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso2-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Três quartos direito",
        before: "/images/ba/caso2-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso2-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Três quartos esquerdo",
        before: "/images/ba/caso2-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso2-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Basal",
        before: "/images/ba/caso2-basal-antes.jpg",
        after: "/images/ba/caso2-basal-despues.jpg",
      },
      {
        label: "Superior",
        before: "/images/ba/caso2-superior-antes.jpg",
        after: "/images/ba/caso2-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-caso-03",
    label: "Caso 03",
    title: "Rinoplastia",
    detail: "Frente, perfis, três quartos, basal e superior",
    views: [
      {
        label: "Frente",
        before: "/images/ba/caso3-frente-antes.jpg",
        after: "/images/ba/caso3-frente-despues.jpg",
      },
      {
        label: "Perfil direito",
        before: "/images/ba/caso3-perfil-der-antes.jpg",
        after: "/images/ba/caso3-perfil-der-despues.jpg",
      },
      {
        label: "Perfil direito sorrindo",
        before: "/images/ba/caso3-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso3-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Perfil esquerdo",
        before: "/images/ba/caso3-perfil-izq-antes.jpg",
        after: "/images/ba/caso3-perfil-izq-despues.jpg",
      },
      {
        label: "Perfil esquerdo sorrindo",
        before: "/images/ba/caso3-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso3-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Três quartos direito",
        before: "/images/ba/caso3-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso3-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Três quartos esquerdo",
        before: "/images/ba/caso3-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso3-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Basal",
        before: "/images/ba/caso3-basal-antes.jpg",
        after: "/images/ba/caso3-basal-despues.jpg",
      },
      {
        label: "Superior",
        before: "/images/ba/caso3-superior-antes.jpg",
        after: "/images/ba/caso3-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-caso-04",
    label: "Caso 04",
    title: "Rinoplastia",
    detail: "Frente, perfis, três quartos, basal e superior",
    views: [
      {
        label: "Frente",
        before: "/images/ba/caso4-frente-antes.jpg",
        after: "/images/ba/caso4-frente-despues.jpg",
      },
      {
        label: "Frente sorrindo",
        before: "/images/ba/caso4-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso4-frente-sonrisa-despues.jpg",
      },
      {
        label: "Perfil direito",
        before: "/images/ba/caso4-perfil-der-antes.jpg",
        after: "/images/ba/caso4-perfil-der-despues.jpg",
      },
      {
        label: "Perfil direito sorrindo",
        before: "/images/ba/caso4-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso4-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Perfil esquerdo",
        before: "/images/ba/caso4-perfil-izq-antes.jpg",
        after: "/images/ba/caso4-perfil-izq-despues.jpg",
      },
      {
        label: "Três quartos direito",
        before: "/images/ba/caso4-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso4-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Três quartos esquerdo",
        before: "/images/ba/caso4-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso4-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Basal",
        before: "/images/ba/caso4-basal-antes.jpg",
        after: "/images/ba/caso4-basal-despues.jpg",
      },
      {
        label: "Superior",
        before: "/images/ba/caso4-superior-antes.jpg",
        after: "/images/ba/caso4-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-01",
    label: "Caso 05",
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
    label: "Caso 06",
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
    label: "Caso 07",
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
    label: "Caso 08",
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
    label: "Caso 09",
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
    label: "Caso 10",
    title: "Rinoplastia",
    detail: "Perfil e três quartos",
    views: [
      {
        label: "Vista de perfil",
        before: "/images/ba/rinoplastia-06-antes.jpg",
        after: "/images/ba/rinoplastia-06-despues.jpg",
      },
      {
        label: "Vista de três quartos",
        before: "/images/ba/rinoplastia-07-antes.jpg",
        after: "/images/ba/rinoplastia-07-despues.jpg",
      },
    ],
  },
];

export const testimonialsIntro = {
  eyebrow: "Avaliações",
  title: "O que os pacientes escrevem.",
  moreOnGoogle: "Ver mais avaliações no Google →",
} as const;

/** Avaliações no Google — 3 visíveis por vez, com rotação no site. */
export const testimonials = [
  {
    quote:
      "Eu tinha o septo desviado e o doutor López Moris me operou. Tanto ele quanto toda a sua equipe são muito atenciosos em tudo. Mesmo durante a cirurgia, senti o ambiente muito confortável e acolhedor. Recomendo muito que se consultem com este médico.",
    name: "Maria Casanegra",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Profissional dedicado: desde a primeira consulta foi gentil e paciente, e dedicou todo o tempo necessário para me explicar em detalhe cada etapa do procedimento. Destaco também a gentileza e a boa disposição da Florencia, sua secretária.",
    name: "Soledad Iglesias",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Fiz uma cirurgia funcional do nariz. Assim que tiraram os tampões já senti que respirava melhor. Foi pouco invasiva e em poucos dias eu já levava uma vida normal. O Carlos me explicou tudo desde o início; sempre me senti bem cuidada.",
    name: "Sofia Ploschuk",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Grande profissional. Dá tempo para explicar os procedimentos com clareza e está sempre à disposição. Uma semana depois da minha cirurgia funcional e estética estou muito contente com o resultado. Super recomendável.",
    name: "",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Quero agradecer ao doutor Carlos pela calidez humana e profissionalismo. Desde o primeiro momento ouviu, respondeu todas as minhas dúvidas e explicou cada detalhe do procedimento. A cirurgia foi no Hospital CEMIC; me senti muito acompanhada. Recomendo sem dúvida.",
    name: "",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Excelente profissional, muito recomendável. Destaca-se pela qualidade humana: escuta, responde cada dúvida e explica com clareza o diagnóstico e as opções. O atendimento é caloroso e gera muita confiança; nota-se sua sólida formação em otorrinolaringologia.",
    name: "",
    detail: "Google · 5.0",
  },
] as const;

export const faqsIntro = {
  eyebrow: "Perguntas",
  title: "O que mais me perguntam.",
  support: "Recuperação, cuidados, anestesia e prazos. Se sua dúvida não estiver aqui, escreva para mim.",
  disclaimer: "São orientações gerais. Seu caso é definido em consulta.",
} as const;

export const faqs = [
  {
    question: "Quanto tempo dura a recuperação?",
    answer:
      "É gradual. Após 48 horas: movimentação em casa e tarefas leves (sem se abaixar nem fazer força). Entre 5 e 10 dias: muitas pessoas voltam ao trabalho de escritório ou a saídas curtas. Academia ou esporte intenso: em geral de 3 semanas a 1 mês, para reduzir o risco de sangramento ou inflamação. O ritmo exato depende da sua evolução.",
  },
  {
    question: "Que cuidados devo ter?",
    answer:
      "Nos primeiros 7 dias, repouso relativo ou atividades muito tranquilas —não é preciso ficar na cama. Atividade aeróbica: esperar cerca de 3 semanas. Esforço anaeróbico intenso: cerca de um mês.",
  },
  {
    question: "Quanto tempo dura uma cirurgia nasal?",
    answer:
      "Depende do caso. Na funcional costuma levar cerca de 2 horas; nos procedimentos estéticos, perto de 3. São médias: pode ser menos ou mais conforme o que precisar ser corrigido.",
  },
  {
    question: "Quanto tempo preciso ficar internado?",
    answer:
      "Na maioria dos casos é ambulatorial: aproximadamente uma hora antes e três horas depois da cirurgia.",
  },
  {
    question: "Dói?",
    answer:
      "O pós-operatório da rinoplastia costuma ser pouco doloroso. O mais comum é congestão ou pressão, parecido com um resfriado. Se necessário, é controlado com analgésicos comuns (por exemplo ibuprofeno ou diclofenaco), conforme indicarmos.",
  },
  {
    question: "Quais exames preciso antes de uma rinoplastia?",
    answer:
      "Avaliação otorrinolaringológica, exames de sangue (hemograma, glicemia, coagulação, função renal) e eletrocardiograma com avaliação cardiológica. Dependendo do caso, às vezes radiografia de tórax ou tomografia do nariz e dos seios paranasais.",
  },
  {
    question: "Com que anestesia a rinoplastia é feita?",
    answer:
      "Anestesia geral. Trabalhamos com anestesiologistas certificados pela Associação Argentina de Anestesiologia, da equipe habitual, com experiência em cirurgia facial.",
  },
  {
    question: "Quando se veem os resultados definitivos?",
    answer:
      "Ao retirar a tala (cerca de uma semana) já se nota uma mudança, ainda com inchaço. Por volta dos 2 meses já se vê boa parte do resultado. Os ajustes finos podem continuar até um ano; para o convívio social, costuma estar bastante estável depois do terceiro mês.",
  },
] as const;

export const contactIntro = {
  eyebrow: "Contato",
  title: "Consultas em Palermo e no CEMIC.",
  support:
    "Hospital Universitário CEMIC (Las Heras) e consultório na Pereyra Lucena. WhatsApp ou formulário: respondo pelo mesmo canal.",
} as const;

export const locations = [
  {
    name: "Hospital Universitario CEMIC",
    address: "Av. Las Heras 2900, Palermo, Buenos Aires",
    hours: "Ter · Qui · Sex: 14:00 – 17:00",
  },
  {
    name: "Consultorio Dr. López Moris",
    address: 'Pereyra Lucena 2535, Pb "A", Palermo, Buenos Aires',
    hours: "Qua: 8:00 – 19:30",
  },
] as const;

export const contactForm = {
  eyebrow: "Consulta",
  title: "Escreva para mim",
  lead: "Respondo em breve pelo WhatsApp.",
  name: "Nome",
  phone: "Telefone",
  email: "E-mail",
  message: "Mensagem",
  messagePlaceholder: "Como posso ajudar?",
  submit: "Enviar pelo WhatsApp",
  submitOpen: "Abrir WhatsApp",
  phoneOr: "Ou ligue para",
  whatsappIntro: "Olá Dr. López Moris, gostaria de entrar em contato.",
} as const;

export const bookingCopy = {
  eyebrow: "Agenda",
  lead: "Vamos abrir o WhatsApp para confirmar sua consulta.",
  name: "Nome completo",
  phone: "Telefone / WhatsApp",
  reason: "Motivo da consulta",
  reasonPlaceholder: "Respiração, rinoplastia…",
  message: "Mensagem (opcional)",
  messagePlaceholder: "Breve detalhe, se quiser",
  submit: "Continuar pelo WhatsApp",
  submitOpen: "Abrir WhatsApp",
  phoneOr: "Ou",
  phoneCall: "ligue para",
  close: "Fechar",
  closeForm: "Fechar formulário",
  whatsappIntro: "Olá Dr. López Moris, gostaria de agendar uma consulta.",
} as const;

export const footerCopy = {
  navEyebrow: "Navegação",
  contactEyebrow: "Contato",
  rights: "Todos os direitos reservados.",
  devCredit: "Desenvolvido por",
  devAria: "Desenvolvido por Agustin Ader — abre em uma nova aba",
} as const;

export const ui = {
  close: "Fechar",
  before: "Antes",
  after: "Depois",
  compare: "Comparar",
  toggle: "Alternar",
  previous: "Anterior",
  next: "Próximo",
  caseLabel: "Caso",
  caseOf: "de",
  seeCase: "Ver caso",
  viewsDocumented: "vistas documentadas",
  swipeCases: "Deslize apenas nesta área para ver outro caso",
  swipeAngles: "Deslize nesta área para ver outro ângulo",
  angles: "Ângulos",
  enlargeDocument: "Ampliar documento",
  document: "Documento",
  previousDocument: "Documento anterior",
  nextDocument: "Próximo documento",
  closeDocument: "Fechar documento",
  compareSlider: "Comparar antes e depois",
  filterCredentials: "Filtrar certificações",
  goToCase: "Ir para",
  langSwitch: "Idioma",
  menuOpen: "Abrir menu",
  menuClose: "Fechar menu",
  mobileNav: "Menu principal",
  mobileMenuLabel: "Menu",
} as const;
