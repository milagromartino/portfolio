import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { projectsData } from "../data/projects";

const statusLabel = {
  live: { es: "En producción", en: "In production" },
  thesis: { es: "Proyecto de tesis", en: "Thesis project" },
  personal: { es: "Proyecto personal", en: "Personal project" },
};

function StatusPill({ status, lang }) {
  const cls =
    status === "thesis" ? "status-thesis" : status === "live" ? "status-live" : "status-personal";
  return <span className={`status-pill ${cls}`}>{statusLabel[status][lang]}</span>;
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const flagship = projectsData.find((p) => p.flagship);
  const rest = projectsData.filter((p) => !p.flagship);

  return (
    <section id="projects" className="max-w-content mx-auto px-6 py-10 md:py-14">
      <div className="file-window mb-6">
        <div className="file-titlebar">
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-name">projects.tsx</span>
        </div>
        <div className="px-6 sm:px-10 py-9 sm:py-10">
          <p className="code-comment mb-5">// {t("projects.eyebrow").toLowerCase()}</p>
          <h2 className="font-display font-medium text-2xl text-ink">{t("projects.title")}</h2>
        </div>
      </div>

      {/* Flagship: thesis */}
      {flagship && (
        <div className="card-hover border border-line rounded-lg bg-bgCard p-7 md:p-9 mb-6">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <StatusPill status={flagship.status} lang={lang} />
            <span className="font-mono text-[11px] text-inkMuted">sqlcoder-7b-2 · LLM</span>
          </div>

          <h3 className="font-display font-medium text-xl sm:text-2xl text-ink mb-3">{flagship.title[lang]}</h3>
          <p className="font-body text-inkSoft leading-relaxed max-w-2xl mb-5">
            {flagship.about[lang]}
          </p>

          {flagship.screenshots && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {flagship.screenshots.map((src, i) => (
                <div
                  key={src}
                  className="rounded-lg overflow-hidden border border-line bg-bgDeep aspect-[4/3]"
                >
                  <img
                    src={src}
                    alt={`${flagship.title[lang]} — screenshot ${i + 1}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {flagship.tags.map((tag) => (
              <span key={tag} className="tag-chip tag-blue">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={flagship.github}
              target="_blank"
              rel="noreferrer"
              className="font-display text-sm font-medium text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              {t("projects.code")} →
            </a>
            {flagship.githubSecondary && (
              <a
                href={flagship.githubSecondary.link}
                target="_blank"
                rel="noreferrer"
                className="font-display text-sm font-medium text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {flagship.githubSecondary.label[lang]} →
              </a>
            )}
          </div>
        </div>
      )}

      {/* Grid: other projects */}
      <div className="grid sm:grid-cols-2 gap-5">
        {rest.map((p) => (
          <div key={p.id} className="card-hover border border-line rounded-lg bg-bgCard overflow-hidden flex flex-col">
            {p.image && (
              <div className="h-40 bg-bgDeep overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-3">
                <StatusPill status={p.status} lang={lang} />
              </div>
              <h3 className="font-display font-medium text-lg text-ink mb-2">{p.title}</h3>
              <p className="font-body text-sm text-inkSoft leading-relaxed mb-4 flex-1">
                {p.about[lang]}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag-chip tag-neutral">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-sm font-medium text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
                  >
                    {t("projects.demo")} →
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-sm font-medium text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
                  >
                    {t("projects.code")} →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}