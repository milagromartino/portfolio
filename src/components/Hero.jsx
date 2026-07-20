import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, lang } = useLanguage();
  const flow = t("hero.flow");

  return (
    <section id="top" className="max-w-content mx-auto px-6 pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="file-window">
        <div className="file-titlebar">
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-name">hero.tsx</span>
        </div>

        <div className="flex">
          <div className="hidden sm:block font-mono text-xs text-inkMuted text-right px-3 py-9 bg-bgDeep leading-[2rem] select-none">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n}>{n}</div>
            ))}
          </div>

          <div className="px-6 sm:px-10 py-9 sm:py-12 flex-1">
            <p className="code-comment mb-4">// {t("hero.role").toLowerCase()}</p>

            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-ink leading-tight tracking-tight">
              {t("hero.title")}
              <span className="text-accent cursor-blink">_</span>
            </h1>

            <p className="font-body text-sm sm:text-base text-inkSoft mt-4 max-w-lg leading-relaxed">
              {t("hero.pitch")}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {Array.isArray(flow) &&
                flow.map((step, i) => {
                  const classes = ["tag-blue", "tag-teal", "tag-amber"];
                  return (
                    <span key={step} className={`tag-chip ${classes[i % classes.length]}`}>
                      {step}
                    </span>
                  );
                })}
            </div>

            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#projects"
                className="inline-flex items-center bg-accent text-bg font-display font-medium text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
              >
                {t("hero.cta_projects")}
              </a>
              <a
                href={lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf"}
                download
                className="inline-flex items-center gap-2 border border-line font-display font-medium text-sm px-5 py-2.5 rounded hover:border-accent hover:text-accent transition-colors"
              >
                {t("hero.cta_cv")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
