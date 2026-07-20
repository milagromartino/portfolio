# Milagro Martino — Portfolio

Portfolio personal construido con React + Vite + Tailwind CSS. Soporta español/inglés y descarga de CV.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

- `src/data/` — contenido editable: experiencia, skills, proyectos, textos (ES/EN), redes sociales.
- `src/components/` — cada sección del sitio (Hero, About, Experience, Skills, Projects, Contact).
- `src/context/LanguageContext.jsx` — maneja el idioma actual y la función `t()` para traducir.
- `public/cv-es.pdf` y `public/cv-en.pdf` — los PDFs que se descargan según el idioma activo. Reemplazalos cuando actualices tu CV (mismos nombres de archivo).

## Cómo agregar un proyecto nuevo

Editá `src/data/projects.js` y agregá un objeto nuevo al array con `id`, `title`, `about.es`/`about.en`, `tags`, y `demo`/`github`/`image` si aplican.

## Deploy en Vercel

Este repo ya está conectado a Vercel (mismo link: milagromartino-portfolio.vercel.app). Al migrar de create-react-app a Vite, tenés que avisarle a Vercel del cambio:

1. Reemplazá los archivos de tu repo local por los de esta carpeta (o copiá el contenido encima).
2. `git add . && git commit -m "Migrar a Vite + Tailwind, rediseño completo" && git push`
3. En el dashboard de Vercel → tu proyecto → **Settings → General → Build & Development Settings**: cambiá el "Framework Preset" de "Create React App" a **"Vite"** (Vercel a veces lo detecta solo al ver el `vite.config.js`, pero conviene confirmarlo).
4. Vercel redeploya automáticamente al hacer push. El link no cambia.
