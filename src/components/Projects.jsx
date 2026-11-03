import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { projectsData } from "../data/projects";

const pick = (value, lang) => (typeof value === "string" ? value : value?.[lang]);

function Button({ href, icon: Icon, children, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-[11.5px] ${
        primary ? "bg-btn text-btnink" : "border border-line bg-card text-ink"
      }`}
    >
      <Icon size={12} />
      {children}
    </a>
  );
}

export default function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-content scroll-mt-6 px-5 pb-12">
      <h2 className="mb-4 text-center text-sm text-mute">{t("projects.title")}</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((p) => {
          const cover = p.screenshots ? p.screenshots[0] : p.image;
          const title = pick(p.title, lang);
          return (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-card"
            >
              {cover && (
                <img
                  src={cover}
                  alt={title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="aspect-[16/10] w-full border-b border-line bg-chip object-cover object-top"
                />
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="flex flex-wrap items-center gap-2 text-sm font-medium leading-snug">
                  {title}
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-normal ${
                      p.flagship ? "bg-goodsoft text-good" : "bg-ambersoft text-amber"
                    }`}
                  >
                    {p.flagship ? t("projects.thesis_badge") : t("projects.personal_badge")}
                  </span>
                </h3>
                <p className="mt-2 line-clamp-5 flex-1 text-[13px] leading-relaxed text-soft">
                  {pick(p.about, lang)}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-chip px-2 py-1 text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.github && (
                    <Button href={p.github} icon={Github}>
                      {p.githubLabel ? pick(p.githubLabel, lang) : t("projects.code")}
                    </Button>
                  )}
                  {p.githubSecondary && (
                    <Button href={p.githubSecondary.link} icon={Github}>
                      {pick(p.githubSecondary.label, lang)}
                    </Button>
                  )}
                  {p.demo && (
                    <Button href={p.demo} icon={ExternalLink} primary>
                      {t("projects.demo")}
                    </Button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
