import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { experienceData } from "../data/experience";

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="max-w-content mx-auto px-6 py-10 md:py-14">
      <div className="file-window">
        <div className="file-titlebar">
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-name">experience.tsx</span>
        </div>

        <div className="px-6 sm:px-10 py-9 sm:py-10">
          <p className="code-comment mb-5">// {t("experience.eyebrow").toLowerCase()}</p>
          <h2 className="font-display font-medium text-2xl text-ink mb-8">{t("experience.title")}</h2>

          <div className="space-y-9">
            {experienceData.map((job, i) => (
              <div key={job.id} className="flex gap-4">
                <span className="code-index pt-1 select-none">[{i}]</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display font-medium text-base text-ink">
                      {job.role[lang]} <span className="text-inkSoft font-normal">· {job.company}</span>
                      {job.current && (
                        <span className="tag-chip tag-teal ml-2 align-middle">active</span>
                      )}
                    </h3>
                    <span className="font-mono text-xs text-inkMuted whitespace-nowrap">{job.date[lang]}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {job.bullets[lang].map((b, bi) => (
                      <li key={bi} className="font-body text-sm text-inkSoft leading-relaxed flex gap-2">
                        <span className="text-accent mt-1.5">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
