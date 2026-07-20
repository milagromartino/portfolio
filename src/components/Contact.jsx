import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { socialData } from "../data/social";

export default function Contact() {
  const { t } = useLanguage();
  const whatsapp = socialData.find((s) => s.platform === "WhatsApp");
  const email = socialData.find((s) => s.platform === "Email");

  return (
    <section id="contact" className="max-w-content mx-auto px-6 py-10 md:py-16">
      <div className="file-window">
        <div className="file-titlebar">
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-dot"></span>
          <span className="file-name">contact.tsx</span>
        </div>

        <div className="px-6 sm:px-10 py-10 sm:py-12">
          <p className="code-comment mb-5">// {t("contact.eyebrow").toLowerCase()}</p>
          <h2 className="font-display font-medium text-3xl text-ink mb-4">{t("contact.title")}</h2>
          <p className="font-body text-inkSoft max-w-md mb-8 leading-relaxed">{t("contact.body")}</p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            {whatsapp && (
              <a
                href={whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-accent text-bg font-display font-medium text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
              >
                {t("contact.cta")}
              </a>
            )}
            {email && (
              <a
                href={email.link}
                className="inline-flex items-center border border-line font-display font-medium text-sm px-5 py-2.5 rounded hover:border-accent hover:text-accent transition-colors"
              >
                {t("contact.cta_email")}
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-6">
            {socialData
              .filter((s) => s.platform !== "WhatsApp" && s.platform !== "Email")
              .map((s) => (
                <a
                  key={s.platform}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-wide text-inkMuted hover:text-accent transition-colors"
                >
                  {s.platform}
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
