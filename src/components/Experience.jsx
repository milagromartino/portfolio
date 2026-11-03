import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { experienceData } from "../data/experience";

export default function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section className="mx-auto max-w-content px-5 pb-12">
      <h2 className="mb-3 text-center text-sm text-mute">{t("experience.title")}</h2>
      <div className="flex flex-col gap-3">
        {experienceData.map((job) => (
          <article
            key={job.id}
            className={`rounded-3xl border bg-card p-5 shadow-card sm:p-6 ${
              job.current ? "border-accent" : "border-line"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <div>
                <h3 className="flex items-center gap-2 text-base">
                  <Briefcase size={16} className="shrink-0 text-soft" aria-hidden="true" />
                  {job.role[lang]}
                </h3>
                <p className="mt-1 flex flex-wrap items-center gap-2 text-sm font-medium">
                  {job.company}
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-goodsoft px-2.5 py-0.5 text-[11px] font-normal text-good">
                      <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-good" />
                      </span>
                      {t("experience.current")}
                    </span>
                  )}
                </p>
              </div>
              <div className="space-y-1 text-xs text-soft sm:text-right">
                <p className="flex items-center gap-1.5 sm:justify-end">
                  <Calendar size={13} aria-hidden="true" />
                  {job.date[lang]}
                </p>
                <p className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin size={13} aria-hidden="true" />
                  {job.location[lang]}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-soft">{job.summary[lang]}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.skills[lang].map((s) => (
                <span key={s} className="rounded-md border border-line bg-chip px-2 py-1 text-[11px]">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
