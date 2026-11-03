import React from "react";
import { Zap, Users, PlugZap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { workStacks, devStack } from "../data/work";

const icons = [Zap, Users, PlugZap];

export default function Work() {
  const { lang, t } = useLanguage();
  const cards = translations[lang].work.cards;

  return (
    <section className="mx-auto max-w-content px-5 pb-12">
      <h2 className="mb-3 text-center text-sm text-mute">{t("work.title")}</h2>

      <div className="grid gap-3 md:grid-cols-3">
        {cards.map((card, i) => {
          const Icon = icons[i];
          return (
            <article
              key={card.title}
              className="rounded-3xl border border-line bg-card p-5 shadow-card"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-chip text-accent">
                <Icon size={20} />
              </span>
              <h3 className="mb-1 mt-3 text-base font-medium">{card.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-soft">{card.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {workStacks[i].map((s) => (
                  <span key={s} className="rounded-md bg-chip px-2 py-1 text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-line bg-card px-6 py-4 shadow-card sm:rounded-full">
        <div>
          <p className="text-sm font-medium">{t("work.dev_title")}</p>
          <p className="mt-0.5 text-xs text-soft">{devStack.join(" · ")}</p>
        </div>
        <a href="#projects" className="text-sm text-accent">
          {t("work.dev_link")} ↗
        </a>
      </div>
    </section>
  );
}
