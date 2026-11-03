import React from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section className="mx-auto max-w-content px-5 pb-16 pt-14 text-center sm:pb-20 sm:pt-20">
      <h1 className="text-[2.1rem] font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem]">
        <span className="text-mute">{t("hero.title_a")}</span>
        <br />
        <span>{t("hero.title_b")}</span>
        <span className="cursor-blink text-accent" aria-hidden="true">
          _
        </span>
      </h1>

      <p className="mt-4 text-sm text-soft sm:text-base">{t("hero.subtitle")}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#about"
          className="inline-flex items-center gap-3 rounded-full bg-btn py-1.5 pl-6 pr-1.5 text-sm text-btnink"
        >
          {t("hero.cta_about")}
          <span className="grid h-8 w-8 place-items-center rounded-full bg-btnink text-btn">
            <ArrowDown size={15} />
          </span>
        </a>
        <a
          href={lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf"}
          download
          className="rounded-full border border-line bg-glass px-6 py-3 text-sm"
        >
          {t("hero.cta_cv")}
        </a>
      </div>
    </section>
  );
}
