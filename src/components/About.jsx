import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const facts = t("about.facts");

  const keys = ["education", "languages", "location"];

  return (
    <section id="about" className="max-w-content mx-auto px-6 py-10 md:py-14">
      <div className="file-window">
        <div className="file-titlebar">
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-name">about.tsx</span>
        </div>

        <div className="px-6 sm:px-10 py-9 sm:py-10">
          <p className="code-comment mb-5">// {t("about.eyebrow").toLowerCase()}</p>
          <h2 className="font-display font-medium text-2xl text-ink mb-6">{t("about.title")}</h2>

          <p className="font-body text-inkSoft leading-relaxed text-sm sm:text-base max-w-2xl mb-8">
            {t("about.body")}
          </p>

          <div className="font-mono text-xs sm:text-sm bg-bgDeep border border-line rounded p-4 sm:p-5 max-w-xl">
            {Array.isArray(facts) &&
              facts.map((f, i) => (
                <div key={f.label} className="py-1">
                  <span className="text-accent">{keys[i] || "field"}</span>
                  <span className="text-inkMuted">: </span>
                  <span className="text-tealChipText">"{f.value}"</span>
                  <span className="text-inkMuted">,</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
