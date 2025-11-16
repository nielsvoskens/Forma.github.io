// Controla la apertura exclusiva de los elementos FAQ para mantener la interfaz limpia.
const faqItems = document.querySelectorAll(".faq-list details");

faqItems.forEach((details) => {
  details.addEventListener("toggle", () => {
    if (details.open) {
      faqItems.forEach((item) => {
        if (item !== details) {
          item.removeAttribute("open");
        }
      });
    }
  });
});

// Alterna el idioma entre español e inglés en todo el sitio.
const heroLangButtons = document.querySelectorAll(".hero__lang-btn");
const i18nElements = document.querySelectorAll("[data-i18n]");

const translations = {
  es: {
    "hero.heading": "Tu primera vivienda no debería comprarse a ciegas.",
    "hero.subtitle": "Carga el plano y mira la luz a cualquier hora del día, sin dudas.",
    "hero.cta": "¡Pruébalo ya gratis!",
    "value.heading": "Ilumina tus decisiones con una experiencia inmersiva.",
    "value.card1.title": "Luz natural real",
    "value.card1.body1": "Descubre cómo entra el sol en tu futuro hogar.",
    "value.card1.body2":
      "Cambia la hora del día, la estación y la ubicación para ver exactamente cuánta luz tendrás en cada habitación.",
    "value.card2.title": "Espacio en 3D",
    "value.card2.body1": "Recorre cada sala como si ya vivieras allí.",
    "value.card2.body2":
      "Camina por el piso, abre puertas, mueve paredes y explora cada detalle de tu futuro hogar en un entorno 3D realista.",
    "value.card3.title": "Decisiones con confianza",
    "value.card3.body1": "Toma decisiones informadas y sin dudas.",
    "value.card3.body2":
      "Elige un piso que sabes que encaja contigo porque ya lo has visto, caminado y experimentado antes de comprar.",
    "story.heading": "Creado por necesidad.",
    "story.body1":
      "Todo empezó cuando fuimos a ver una obra nueva y el promotor simplemente giró un plano y dijo: “por aquí sale el sol, por aquí se pone”. Sin vídeos, sin imágenes, solo imaginación.",
    "story.body2":
      "Nos pareció absurdo decidir algo tan importante así, así que creamos una aplicación sencilla para ver la luz real de un piso sin saber de 3D.",
    "story.body3":
      "Es un MVP y sigue en desarrollo. La compartimos gratis porque queremos mejorarla con feedback real y construir algo que de verdad ayude a la gente a decidir mejor.",
    "cta.heading": "¿Listo para ver tu piso hoy?",
    "cta.body": "Descarga la app y vive la experiencia de tu próximo hogar antes de firmar.",
    "cta.button": "¡Descárgalo gratis!",
    "footer.copy": "© 2024 Forma. Todos los derechos reservados.",
  },
  en: {
    "hero.heading": "Your first home shouldn't be bought blind.",
    "hero.subtitle": "Upload the floor plan and watch the daylight at every hour with total confidence.",
    "hero.cta": "Try it free now!",
    "value.heading": "Illuminate your decisions with an immersive experience.",
    "value.card1.title": "Real natural light",
    "value.card1.body1": "See how sunlight flows into your future home.",
    "value.card1.body2":
      "Change the time of day, season, and location to understand exactly how much light every room receives.",
    "value.card2.title": "3D space",
    "value.card2.body1": "Walk through each room as if you already lived there.",
    "value.card2.body2":
      "Move around the floor plan, open doors, shift walls, and explore every detail in a realistic 3D environment.",
    "value.card3.title": "Decisions with confidence",
    "value.card3.body1": "Make informed choices without second thoughts.",
    "value.card3.body2":
      "Choose a place that fits you because you've already seen it, walked it, and experienced it before buying.",
    "story.heading": "Built out of necessity.",
    "story.body1":
      "It all started when we visited a new development and the promoter simply flipped a floor plan and said, “the sun rises here and sets over there.” No videos, no images—just imagination.",
    "story.body2":
      "It felt absurd to decide something so important that way, so we created a simple app to see a home's real light without needing any 3D skills.",
    "story.body3":
      "It's an MVP and still evolving. We're sharing it for free because we want real feedback and to build something that truly helps people decide better.",
    "cta.heading": "Ready to see your apartment today?",
    "cta.body": "Download the app and experience your next home before you sign.",
    "cta.button": "Download it free!",
    "footer.copy": "© 2024 Forma. All rights reserved.",
  },
};

let currentLang = null;

function applyTranslations(lang) {
  const langCopy = translations[lang];
  if (!langCopy) return;

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    const text = langCopy[key];
    if (typeof text === "string") {
      element.textContent = text;
    }
  });

  document.documentElement.setAttribute("lang", lang);
  heroLangButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function setLanguage(lang) {
  if (!lang || lang === currentLang || !translations[lang]) return;
  currentLang = lang;
  applyTranslations(lang);
}

heroLangButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage("es");
