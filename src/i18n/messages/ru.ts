export const site = {
  name: "Dr. Carlos López Moris",
  shortName: "Dr. López Moris",
  title: "Врач-оториноларинголог · Специалист по ринологии",
  description:
    "Оториноларинголог в Буэнос-Айресе: ринология, функциональная и эстетическая ринопластика, хирургия носа. Приём в Университетской больнице CEMIC и в частном кабинете в Палермо.",
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
  location: "Буэнос-Айрес, Аргентина",
  logo: "/images/iso-moris.png",
  ogImage: "/images/banner1.jpg",
  footerBlurb:
    "Ринология и хирургия носа в Буэнос-Айресе. CEMIC · кабинет в Палермо · лицензия MN 133953.",
} as const;

export const nav = [
  { href: "#servicios", label: "Услуги" },
  { href: "#sobre-mi", label: "Обо мне" },
  { href: "#galeria", label: "Галерея" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contacto", label: "Контакты" },
] as const;

export const hero = {
  brandLines: ["Dr. Carlos", "López Moris"] as const,
  eyebrow: "Ринология · Хирургия носа · Буэнос-Айрес",
  headline: "Хирургия носа и ринология с понятным планом с первой консультации.",
  support:
    "Принимаю в Университетской больнице CEMIC и в кабинете в Палермо. Функциональная и эстетическая ринопластика, сложная патология носа.",
  primaryCta: "Записаться на приём",
  primaryCtaShort: "Записаться",
  headerCta: "Контакты",
  secondaryCta: "Смотреть случаи",
  image: {
    src: "/images/banner1.jpg",
    alt: "Д-р Карлос Лопес Морис, оториноларинголог и специалист по ринологии",
  },
} as const;

export const trustIntro = {
  eyebrow: "Учреждения",
} as const;

export const trustItems = [
  "Университетская больница и институт CEMIC",
  "Аргентинское общество ринопластики",
  "Университет Буэнос-Айреса",
  "UNAM · Ринология и лицевая хирургия",
] as const;

export const about = {
  eyebrow: "Обо мне",
  title: "Оториноларинголог. Специалист по ринологии.",
  quote:
    "Мне важно, чтобы вы понимали, что можно —и чего нельзя— сделать ещё до операции. Если вам нужно второе мнение, напишите мне.",
  concise:
    "Образование в UNT, UBA и UNAM. Работаю в команде ринологии Университетской больницы CEMIC и являюсь ассистентом кафедры. В частной практике занимаюсь хирургией носа, функциональной и эстетической ринологией.",
  paragraphs: [
    "Я получил диплом врача в Национальном университете Тукумана и специализировался в оториноларингологии в Университете Буэнос-Айреса (UBA). Затем прошёл последипломное обучение по ринологии и лицевой хирургии в UNAM, программу по медицине сна (Университет Аустраль) и программу по искусственному интеллекту в медицине (Университет Фавалоро).",
    "Сегодня я работаю в команде ринологии CEMIC. На приёме веду пациентов с нарушением носового дыхания, искривлением перегородки, синуситом, а также случаи ринопластики и лицевой хирургии —от повседневных до повторных операций и последствий.",
  ],
  images: [
    {
      src: "/images/perfil2.jpg",
      alt: "Профессиональный портрет д-ра Карлоса Лопеса Мориса",
    },
    {
      src: "/images/perfil1.jpg",
      alt: "Д-р Лопес Морис на приёме",
    },
    {
      src: "/images/perfil3.jpg",
      alt: "Д-р Лопес Морис в клинике",
    },
  ],
  highlights: [
    { label: "Опыт", value: "15+ лет" },
    { label: "Образование", value: "UNT · UBA · UNAM" },
    { label: "Лицензия", value: "MN 133953" },
  ],
  servicesLink: "Смотреть услуги →",
} as const;

export const servicesIntro = {
  eyebrow: "Услуги",
  title: "С чем ко мне обращаются.",
  support:
    "Проблемы носового дыхания, ринопластика и лицевая хирургия. Я понятно объясняю варианты, сроки и ограничения.",
  footer: "Если вам трудно дышать носом или вы думаете об операции, начнём с консультации.",
  casesLink: "Смотреть случаи →",
} as const;

export const services = [
  {
    id: "cirugias-nasales",
    title: "Хирургия носа",
    description:
      "От искривления перегородки и нарушения дыхания до полипоза, хронического синусита, перфораций перегородки, травм и повторных операций.",
  },
  {
    id: "rinologia",
    title: "Функциональная и эстетическая ринология",
    description:
      "Хорошо дышать и выглядеть естественно — не отдельные цели. Я оцениваю обструкцию и форму вместе и составляю индивидуальный план.",
  },
  {
    id: "facial",
    title: "Эстетическая хирургия лица",
    description:
      "Процедуры на лице с тщательным планированием: без обещаний «нового лица», с уважением к вашим чертам.",
  },
  {
    id: "reparadora",
    title: "Эстетическая и восстановительная медицина",
    description:
      "Медицинские процедуры в дополнение к хирургии — когда они действительно добавляют что-то к плану, а не как стандартное меню.",
  },
] as const;

export const timelineIntro = {
  eyebrow: "Карьера",
  title: "Мой путь.",
  support:
    "Обучение, преподавание и клиническая практика в государственных и частных учреждениях.",
  footer: "Дипломы каждого этапа — ниже.",
  diplomasLink: "Смотреть дипломы →",
} as const;

export const timeline = [
  {
    year: "2010",
    title: "Диплом врача",
    place: "Universidad Nacional de Tucumán",
  },
  {
    year: "2010–2014",
    title: "Ординатура по оториноларингологии",
    place: "Hospital General de Agudos José María Ramos Mejía",
  },
  {
    year: "2011–2015",
    title: "Преподаватель кафедры ЛОР",
    place: "Facultad de Medicina, Universidad de Buenos Aires",
  },
  {
    year: "2012–2015",
    title: "Университетский оториноларинголог",
    place: "Universidad de Buenos Aires",
  },
  {
    year: "2013",
    title: "Наблюдательская практика: ринология, ларингология и хирургия основания черепа",
    place: "Hospital Clínic de Barcelona",
  },
  {
    year: "2014–2015",
    title: "Старший ординатор",
    place: "Hospital Ramos Mejía",
  },
  {
    year: "2015",
    title: "Отделение ринологии",
    place: "CEMIC",
  },
  {
    year: "2015",
    title: "Ассистент кафедры оториноларингологии",
    place: "CEMIC",
  },
  {
    year: "2015–2023",
    title: "Внешний консультант ЛОР и основания черепа",
    place: "Fleni",
  },
  {
    year: "2016",
    title: "Специалист-оториноларинголог",
    place: "Universidad de Buenos Aires",
  },
  {
    year: "2019",
    title: "Докторантура по медицине (в процессе)",
    place: "Instituto Universitario CEMIC",
  },
  {
    year: "2020",
    title: "Член правления",
    place: "Federación Argentina de Sociedades de Otorrinolaringología",
  },
  {
    year: "2020",
    title: "Член правления",
    place: "Club ORL",
  },
  {
    year: "2022",
    title: "Rhinoplasty Full Immersion Experience",
    place: "Rinoplastia de Buenos Aires",
  },
  {
    year: "2022–2023",
    title: "Ринология и лицевая хирургия",
    place: "Universidad Autónoma de México",
  },
  {
    year: "2023",
    title: "Орофациальная гармонизация",
    place: "Universidad Abierta Interamericana",
  },
  {
    year: "2024",
    title: "Член-основатель",
    place: "Sociedad Argentina de Rinoplastia",
  },
] as const;

/** Diplomas y certificaciones (datos fácticos). */
export const credentialsIntro = {
  eyebrow: "Документы",
  title: "Дипломы и сертификаты.",
  support: "Документы, подтверждающие образование, указанное выше.",
  aside: "Оригиналы документов · публикуются с согласия",
  footer: "Предпочитаете хронологию? Вернитесь к разделу об образовании.",
  backLink: "Назад к образованию →",
  showMore: "Показать ещё",
  showLess: "Свернуть",
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
  { id: "all", label: "Все" },
  { id: "academic", label: "Академические дипломы" },
  { id: "complementary", label: "Сертификаты и опыт" },
] as const;

export const credentialCategoryLabels = {
  academic: "Академическое образование",
  complementary: "Повышение квалификации",
} as const;

export const galleryIntro = {
  eyebrow: "Галерея",
  title: "До и после.",
  support:
    "Клинические фото пациентов, давших согласие на их публикацию. У каждого случая был свой план; это не «гарантированные результаты».",
  aside: "С согласия · в медицинско-образовательных целях",
  cta: "Хотите узнать, подходит ли ваш случай? Запишитесь на консультацию.",
  showMore: "Больше случаев",
  showLess: "Свернуть",
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
    label: "Случай 01",
    title: "Ринопластика",
    detail: "Анфас, профили, три четверти, снизу и сверху",
    views: [
      {
        label: "Анфас",
        before: "/images/ba/caso08-frente-antes.jpg",
        after: "/images/ba/caso08-frente-despues.jpg",
      },
      {
        label: "Анфас с улыбкой",
        before: "/images/ba/caso08-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso08-frente-sonrisa-despues.jpg",
      },
      {
        label: "Правый профиль",
        before: "/images/ba/caso08-perfil-der-antes.jpg",
        after: "/images/ba/caso08-perfil-der-despues.jpg",
      },
      {
        label: "Правый профиль с улыбкой",
        before: "/images/ba/caso08-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso08-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Левый профиль с улыбкой",
        before: "/images/ba/caso08-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso08-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Три четверти справа",
        before: "/images/ba/caso08-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso08-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Три четверти слева",
        before: "/images/ba/caso08-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso08-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Снизу",
        before: "/images/ba/caso08-basal-antes.jpg",
        after: "/images/ba/caso08-basal-despues.jpg",
      },
      {
        label: "Сверху",
        before: "/images/ba/caso08-superior-antes.jpg",
        after: "/images/ba/caso08-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-08",
    label: "Случай 02",
    title: "Ринопластика",
    detail: "Анфас, профили, три четверти, снизу и сверху",
    views: [
      {
        label: "Анфас",
        before: "/images/ba/caso2-frente-antes.jpg",
        after: "/images/ba/caso2-frente-despues.jpg",
      },
      {
        label: "Анфас с улыбкой",
        before: "/images/ba/caso2-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso2-frente-sonrisa-despues.jpg",
      },
      {
        label: "Правый профиль",
        before: "/images/ba/caso2-perfil-der-antes.jpg",
        after: "/images/ba/caso2-perfil-der-despues.jpg",
      },
      {
        label: "Правый профиль с улыбкой",
        before: "/images/ba/caso2-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso2-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Левый профиль",
        before: "/images/ba/caso2-perfil-izq-antes.jpg",
        after: "/images/ba/caso2-perfil-izq-despues.jpg",
      },
      {
        label: "Левый профиль с улыбкой",
        before: "/images/ba/caso2-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso2-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Три четверти справа",
        before: "/images/ba/caso2-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso2-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Три четверти слева",
        before: "/images/ba/caso2-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso2-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Снизу",
        before: "/images/ba/caso2-basal-antes.jpg",
        after: "/images/ba/caso2-basal-despues.jpg",
      },
      {
        label: "Сверху",
        before: "/images/ba/caso2-superior-antes.jpg",
        after: "/images/ba/caso2-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-caso-03",
    label: "Случай 03",
    title: "Ринопластика",
    detail: "Анфас, профили, три четверти, снизу и сверху",
    views: [
      {
        label: "Анфас",
        before: "/images/ba/caso3-frente-antes.jpg",
        after: "/images/ba/caso3-frente-despues.jpg",
      },
      {
        label: "Правый профиль",
        before: "/images/ba/caso3-perfil-der-antes.jpg",
        after: "/images/ba/caso3-perfil-der-despues.jpg",
      },
      {
        label: "Правый профиль с улыбкой",
        before: "/images/ba/caso3-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso3-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Левый профиль",
        before: "/images/ba/caso3-perfil-izq-antes.jpg",
        after: "/images/ba/caso3-perfil-izq-despues.jpg",
      },
      {
        label: "Левый профиль с улыбкой",
        before: "/images/ba/caso3-perfil-izq-sonrisa-antes.jpg",
        after: "/images/ba/caso3-perfil-izq-sonrisa-despues.jpg",
      },
      {
        label: "Три четверти справа",
        before: "/images/ba/caso3-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso3-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Три четверти слева",
        before: "/images/ba/caso3-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso3-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Снизу",
        before: "/images/ba/caso3-basal-antes.jpg",
        after: "/images/ba/caso3-basal-despues.jpg",
      },
      {
        label: "Сверху",
        before: "/images/ba/caso3-superior-antes.jpg",
        after: "/images/ba/caso3-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-caso-04",
    label: "Случай 04",
    title: "Ринопластика",
    detail: "Анфас, профили, три четверти, снизу и сверху",
    views: [
      {
        label: "Анфас",
        before: "/images/ba/caso4-frente-antes.jpg",
        after: "/images/ba/caso4-frente-despues.jpg",
      },
      {
        label: "Анфас с улыбкой",
        before: "/images/ba/caso4-frente-sonrisa-antes.jpg",
        after: "/images/ba/caso4-frente-sonrisa-despues.jpg",
      },
      {
        label: "Правый профиль",
        before: "/images/ba/caso4-perfil-der-antes.jpg",
        after: "/images/ba/caso4-perfil-der-despues.jpg",
      },
      {
        label: "Правый профиль с улыбкой",
        before: "/images/ba/caso4-perfil-der-sonrisa-antes.jpg",
        after: "/images/ba/caso4-perfil-der-sonrisa-despues.jpg",
      },
      {
        label: "Левый профиль",
        before: "/images/ba/caso4-perfil-izq-antes.jpg",
        after: "/images/ba/caso4-perfil-izq-despues.jpg",
      },
      {
        label: "Три четверти справа",
        before: "/images/ba/caso4-tres-cuartos-der-antes.jpg",
        after: "/images/ba/caso4-tres-cuartos-der-despues.jpg",
      },
      {
        label: "Три четверти слева",
        before: "/images/ba/caso4-tres-cuartos-izq-antes.jpg",
        after: "/images/ba/caso4-tres-cuartos-izq-despues.jpg",
      },
      {
        label: "Снизу",
        before: "/images/ba/caso4-basal-antes.jpg",
        after: "/images/ba/caso4-basal-despues.jpg",
      },
      {
        label: "Сверху",
        before: "/images/ba/caso4-superior-antes.jpg",
        after: "/images/ba/caso4-superior-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-01",
    label: "Случай 05",
    title: "Ринопластика",
    detail: "Вид в профиль",
    views: [
      {
        label: "Вид в профиль",
        before: "/images/ba/rinoplastia-01-antes.jpg",
        after: "/images/ba/rinoplastia-01-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-02",
    label: "Случай 06",
    title: "Ринопластика",
    detail: "Вид в профиль",
    views: [
      {
        label: "Вид в профиль",
        before: "/images/ba/rinoplastia-02-antes.jpg",
        after: "/images/ba/rinoplastia-02-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-03",
    label: "Случай 07",
    title: "Ринопластика",
    detail: "Вид в профиль",
    views: [
      {
        label: "Вид в профиль",
        before: "/images/ba/rinoplastia-03-antes.jpg",
        after: "/images/ba/rinoplastia-03-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-04",
    label: "Случай 08",
    title: "Ринопластика",
    detail: "Вид в профиль",
    views: [
      {
        label: "Вид в профиль",
        before: "/images/ba/rinoplastia-04-antes.jpg",
        after: "/images/ba/rinoplastia-04-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-05",
    label: "Случай 09",
    title: "Ринопластика",
    detail: "Вид в профиль",
    views: [
      {
        label: "Вид в профиль",
        before: "/images/ba/rinoplastia-05-antes.jpg",
        after: "/images/ba/rinoplastia-05-despues.jpg",
      },
    ],
  },
  {
    id: "rinoplastia-06",
    label: "Случай 10",
    title: "Ринопластика",
    detail: "Профиль и три четверти",
    views: [
      {
        label: "Вид в профиль",
        before: "/images/ba/rinoplastia-06-antes.jpg",
        after: "/images/ba/rinoplastia-06-despues.jpg",
      },
      {
        label: "Вид в три четверти",
        before: "/images/ba/rinoplastia-07-antes.jpg",
        after: "/images/ba/rinoplastia-07-despues.jpg",
      },
    ],
  },
];

export const testimonialsIntro = {
  eyebrow: "Отзывы",
  title: "Что пишут пациенты.",
  moreOnGoogle: "Больше отзывов в Google →",
} as const;

/** Отзывы в Google — на экране 3, с ротацией на сайте. */
export const testimonials = [
  {
    quote:
      "У меня была искривлена носовая перегородка, и доктор Лопес Морис меня прооперировал. И он, и вся его команда очень внимательны во всём. Даже во время операции атмосфера была комфортной и доброжелательной. Очень рекомендую обращаться к этому врачу.",
    name: "Maria Casanegra",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Преданный своему делу специалист: с первой консультации был доброжелателен и терпелив и уделил столько времени, сколько нужно, чтобы подробно объяснить каждый этап процедуры. Отдельно отмечу доброжелательность и отзывчивость Флоренсии, его секретаря.",
    name: "Soledad Iglesias",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Мне сделали функциональную операцию на носу. Как только убрали тампоны, я сразу почувствовала, что дышу лучше. Вмешательство было малоинвазивным, и через несколько дней я вернулась к обычной жизни. Карлос всё объяснил заранее; я всегда чувствовала заботу.",
    name: "Sofia Ploschuk",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Отличный специалист. Уделяет время, чтобы ясно объяснить процедуры, и всегда на связи. Через неделю после функциональной и эстетической операции я очень доволен результатом. Очень рекомендую.",
    name: "",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Хочу поблагодарить доктора Карлоса за человечность и профессионализм. С первой встречи он выслушал, ответил на все вопросы и объяснил каждую деталь. Операция прошла в больнице CEMIC; я чувствовала поддержку на всём пути. Рекомендую без сомнений.",
    name: "",
    detail: "Google · 5.0",
  },
  {
    quote:
      "Превосходный врач, очень рекомендую. Внимательно слушает, отвечает на каждый вопрос и понятно объясняет диагноз и варианты лечения. Приём тёплый и вызывает доверие; видна серьёзная подготовка в оториноларингологии.",
    name: "",
    detail: "Google · 5.0",
  },
] as const;

export const faqsIntro = {
  eyebrow: "Вопросы",
  title: "Что у меня спрашивают чаще всего.",
  support: "Восстановление, уход, анестезия и сроки. Если вашего вопроса здесь нет, напишите мне.",
  disclaimer: "Это общие рекомендации. Ваш случай определяется на консультации.",
} as const;

export const faqs = [
  {
    question: "Сколько длится восстановление?",
    answer:
      "Поэтапно. Через 48 часов: передвижение по дому и лёгкие дела (не наклоняться и не напрягаться). Через 5–10 дней многие возвращаются к офисной работе или коротким выходам из дома. Спортзал или интенсивный спорт: обычно через 3 недели — 1 месяц, чтобы снизить риск кровотечения или отёка. Точный темп зависит от того, как идёт ваше восстановление.",
  },
  {
    question: "Какой уход необходим?",
    answer:
      "Первые 7 дней — щадящий режим или очень спокойные занятия; лежать в постели не обязательно. Аэробная нагрузка: примерно через 3 недели. Интенсивная анаэробная нагрузка: примерно через месяц.",
  },
  {
    question: "Сколько длится операция на носу?",
    answer:
      "Зависит от случая. Функциональная операция обычно занимает около 2 часов, эстетическая — около 3. Это средние значения: может быть меньше или больше в зависимости от объёма коррекции.",
  },
  {
    question: "Сколько нужно находиться в стационаре?",
    answer:
      "В большинстве случаев операция амбулаторная: примерно час до и три часа после вмешательства.",
  },
  {
    question: "Это больно?",
    answer:
      "Послеоперационный период после ринопластики обычно малоболезненный. Чаще всего ощущается заложенность или давление, как при простуде. При необходимости используются обычные обезболивающие (например, ибупрофен или диклофенак) по нашим рекомендациям.",
  },
  {
    question: "Какие обследования нужны перед ринопластикой?",
    answer:
      "Осмотр оториноларинголога, анализы крови (общий анализ, глюкоза, коагулограмма, функция почек) и ЭКГ с консультацией кардиолога. В зависимости от случая иногда нужны рентген грудной клетки или КТ носа и пазух.",
  },
  {
    question: "Под какой анестезией проводится ринопластика?",
    answer:
      "Под общей анестезией. Мы работаем с постоянной командой анестезиологов, сертифицированных Аргентинской ассоциацией анестезиологии, с опытом в лицевой хирургии.",
  },
  {
    question: "Когда виден окончательный результат?",
    answer:
      "После снятия шины (примерно через неделю) изменения уже заметны, хотя ещё есть отёк. Примерно через 2 месяца виден основной результат. Тонкие изменения могут продолжаться до года; для окружающих всё обычно достаточно стабилизируется после третьего месяца.",
  },
] as const;

export const contactIntro = {
  eyebrow: "Контакты",
  title: "Приём в Палермо и в CEMIC.",
  support:
    "Университетская больница CEMIC (Las Heras) и кабинет на Pereyra Lucena. WhatsApp или форма — отвечаю по тому же каналу.",
} as const;

export const locations = [
  {
    name: "Hospital Universitario CEMIC",
    address: "Av. Las Heras 2900, Palermo, Buenos Aires",
    hours: "Вт · Чт · Пт: 14:00 – 17:00",
  },
  {
    name: "Consultorio Dr. López Moris",
    address: 'Pereyra Lucena 2535, Pb "A", Palermo, Buenos Aires',
    hours: "Ср: 8:00 – 19:30",
  },
] as const;

export const contactForm = {
  eyebrow: "Запрос",
  title: "Напишите мне",
  lead: "Скоро отвечу в WhatsApp.",
  name: "Имя",
  phone: "Телефон",
  email: "Email",
  message: "Сообщение",
  messagePlaceholder: "Чем я могу помочь?",
  submit: "Отправить в WhatsApp",
  submitOpen: "Открыть WhatsApp",
  phoneOr: "Или позвоните",
  whatsappIntro: "Здравствуйте, д-р Лопес Морис! Хотел(а) бы связаться с вами.",
} as const;

export const bookingCopy = {
  eyebrow: "Запись",
  lead: "Мы откроем WhatsApp, чтобы подтвердить запись.",
  name: "Имя и фамилия",
  phone: "Телефон / WhatsApp",
  reason: "Причина обращения",
  reasonPlaceholder: "Дыхание, ринопластика…",
  message: "Сообщение (необязательно)",
  messagePlaceholder: "Кратко опишите, если хотите",
  submit: "Продолжить в WhatsApp",
  submitOpen: "Открыть WhatsApp",
  phoneOr: "Или",
  phoneCall: "позвоните",
  close: "Закрыть",
  closeForm: "Закрыть форму",
  whatsappIntro: "Здравствуйте, д-р Лопес Морис! Хотел(а) бы записаться на приём.",
} as const;

export const footerCopy = {
  navEyebrow: "Навигация",
  contactEyebrow: "Контакты",
  rights: "Все права защищены.",
  devCredit: "Разработка:",
  devAria: "Разработка: Agustin Ader — откроется в новой вкладке",
} as const;

export const ui = {
  close: "Закрыть",
  before: "До",
  after: "После",
  compare: "Сравнить",
  toggle: "Переключить",
  previous: "Назад",
  next: "Далее",
  caseLabel: "Случай",
  caseOf: "из",
  seeCase: "Смотреть случай",
  viewsDocumented: "задокументированных ракурсов",
  swipeCases: "Проведите пальцем только в этой области, чтобы увидеть другой случай",
  swipeAngles: "Проведите пальцем в этой области, чтобы увидеть другой ракурс",
  angles: "Ракурсы",
  enlargeDocument: "Увеличить документ",
  document: "Документ",
  previousDocument: "Предыдущий документ",
  nextDocument: "Следующий документ",
  closeDocument: "Закрыть документ",
  compareSlider: "Сравнить до и после",
  filterCredentials: "Фильтр сертификатов",
  goToCase: "Перейти к",
  langSwitch: "Язык",
  menuOpen: "Открыть меню",
  menuClose: "Закрыть меню",
  mobileNav: "Главное меню",
  mobileMenuLabel: "Меню",
} as const;
