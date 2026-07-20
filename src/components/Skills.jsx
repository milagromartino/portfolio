import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { skillsData } from "../data/skills";

const groupTagClass = {
  frontend: "tag-blue",
  backend: "tag-teal",
  zoho: "tag-amber",
};

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="max-w-content mx-auto px-6 py-10 md:py-14">
      <div className="file-window">
        <div className="file-titlebar">
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-name">skills.tsx</span>
        </div>

        <div className="px-6 sm:px-10 py-9 sm:py-10">
          <p className="code-comment mb-5">// {t("skills.eyebrow").toLowerCase()}</p>
          <h2 className="font-display font-medium text-2xl text-ink mb-8">{t("skills.title")}</h2>

          <div className="space-y-7">
            {skillsData.map((group) => (
              <div key={group.id}>
                <p className="font-mono text-[11px] uppercase tracking-wide text-inkMuted mb-3">
                  {group.title[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`tag-chip ${groupTagClass[group.id] || "tag-neutral"}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
