import React, { useState } from "react";
import { BarChart3 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { implHeader, implementations, reports } from "../data/workProjects";

const pick = (value, lang) => (typeof value === "string" ? value : value?.[lang]);

function Tags({ tags, lang }) {
  return tags.map((tag) => {
    const label = pick(tag, lang);
    return (
      <span key={label} className="rounded-md bg-chip px-2 py-1 text-[11px]">
        {label}
      </span>
    );
  });
}

export default function Implementations() {
  const { lang } = useLanguage();
  const [active, setActive] = useState(implementations[0].id);
  const current = implementations.find((i) => i.id === active);

  return (
    <section id="implementations" className="mx-auto max-w-content scroll-mt-6 px-5 pb-12">
      <h2 className="mb-1 text-center text-sm text-mute">{implHeader.title[lang]}</h2>
      <p className="mb-4 text-center text-[13px] text-soft">{implHeader.intro[lang]}</p>

      <div className="rounded-2xl border border-line bg-card p-5 shadow-card sm:p-6">
        <div role="tablist" className="flex flex-wrap justify-center gap-2">
          {implementations.map((i) => (
            <button
              key={i.id}
              role="tab"
              aria-selected={i.id === active}
              onClick={() => setActive(i.id)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                i.id === active
                  ? "border-btn bg-btn text-btnink"
                  : "border-line bg-card text-ink hover:bg-chip"
              }`}
            >
              {i.tab[lang]}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-5 min-h-[120px] text-center">
          {current.clients && (
            <p className="text-sm font-medium">{current.clients.join(" · ")}</p>
          )}
          {current.about && (
            <p className="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-soft">
              {current.about[lang]}
            </p>
          )}
          <div className="mt-3 space-y-2">
            {current.groups.map((g, i) => (
              <div key={i} className="flex flex-wrap items-center justify-center gap-1.5">
                {g.label && <span className="text-xs text-mute">{g.label[lang]}</span>}
                <Tags tags={g.tags} lang={lang} />
                {g.note && <span className="text-[11px] text-mute">· {g.note[lang]}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 border-t border-line pt-4 text-xs text-soft">
          <BarChart3 size={14} className="text-accent" />
          {reports.title[lang]}
          <Tags tags={reports.tags} lang={lang} />
        </div>
      </div>
    </section>
  );
}
