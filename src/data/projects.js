export const projectsData = [
  {
    id: "thesis",
    flagship: true,
    status: "thesis",
    title: {
      es: "Sistema Inteligente de Recomendación de Propiedades",
      en: "Intelligent Property Recommendation System",
    },
    about: {
      es: "Proyecto de tesis (UNIDA, 2025). Aplicación web con chatbot propio que interpreta consultas en lenguaje natural, conectado a un modelo LLM especializado (sqlcoder-7b-2), para recomendar propiedades del mercado inmobiliario paraguayo. Los datos se alimentan mediante web scraping automatizado diario sobre portales públicos.",
      en: "Thesis project (UNIDA, 2025). A web app with a custom chatbot that understands natural-language questions. It connects to a specialized LLM (sqlcoder-7b-2) to recommend properties in the Paraguayan real estate market. The data comes from daily automated web scraping of public listing sites.",
    },
    tags: ["Next.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "LLM"],
    github: "https://github.com/RealStateDev/backend_real_state_ai.git",
    githubSecondary: {
      label: { es: "Repo del scraper", en: "Scraper repo" },
      link: "https://github.com/RealStateDev/scraper-infocasas",
    },
    screenshots: [
      "/thesis/thesis-01-landing.png",
      "/thesis/thesis-02-quickstart.png",
      "/thesis/thesis-03-results.png",
    ],
  },
  {
    id: "ecomify",
    status: "personal",
    title: "Ecomify",
    about: {
      es: "Aplicación de comercio electrónico construida con React, Vite y Tailwind CSS. Permite buscar productos por título y categoría, y ver pedidos anteriores.",
      en: "An e-commerce app built with React, Vite, and Tailwind CSS. Users can search products by title and category, and see their past orders.",
    },
    tags: ["React", "Vite", "Tailwind CSS"],
    demo: "https://ecomify.netlify.app/",
    github: "https://github.com/milagromartino/e-commerce",
    image: "https://raw.githubusercontent.com/milagromartino/e-commerce/main/ecomify.png",
  },
  {
    id: "travel-sense",
    status: "personal",
    title: "Travel Sense",
    about: {
      es: "Aplicación fantasía de agencia de viajes que permite explorar destinos, construida con TailwindCSS.",
      en: "A fictional travel agency app to explore destinations, built with Tailwind CSS.",
    },
    tags: ["TailwindCSS"],
    demo: "https://anamdiazs.github.io/PlatziTravel/",
    github: "https://github.com/milagromartino/travel-sense",
    image: "https://raw.githubusercontent.com/milagromartino/travel-sense/master/travelsense.png",
  },
  {
    id: "music-player",
    status: "personal",
    title: "Music Player",
    about: {
      es: "Reproductor de música con controles básicos: reproducir, pausar, detener, y barra de progreso para navegar la canción.",
      en: "Music player with basic controls: play, pause, stop, and a progress bar to navigate the track.",
    },
    tags: ["JavaScript"],
    demo: "https://player-for-music.netlify.app/",
    github: "https://github.com/milagromartino/music-player",
    image: "https://raw.githubusercontent.com/milagromartino/music-player/main/music%20player.png",
  },
  {
    id: "todo-app",
    status: "personal",
    title: "To Do App",
    about: {
      es: "Aplicación simple de lista de tareas hecha con React y React Hooks.",
      en: "Simple to-do list application built with React and React Hooks.",
    },
    tags: ["React", "React Hooks"],
    demo: "https://milagromartino.github.io/todo-app/",
    github: "https://github.com/milagromartino/todo-app/tree/gh-pages",
    image: "https://raw.githubusercontent.com/milagromartino/todo-app/gh-pages/todoapp.png",
  },
];