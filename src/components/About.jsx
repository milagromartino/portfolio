import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function About() {
  const { lang, t } = useLanguage();
  const paragraphs = translations[lang].about.paragraphs;

  return (
    <section id="about" className="mx-auto max-w-content scroll-mt-6 px-5 pt-8 pb-12">
      <h2 className="mb-3 text-center text-sm text-mute">{t("about.title")}</h2>
      <div className="rounded-3xl border border-line bg-card px-6 py-8 shadow-card sm:px-10">
        <div className="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-soft">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
