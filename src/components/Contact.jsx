import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { socialData } from "../data/social";

const linkOf = (platform) => socialData.find((s) => s.platform === platform)?.link;

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-content scroll-mt-6 px-5 pb-10">
      <div className="cta-glow rounded-3xl border border-line px-6 py-12 text-center shadow-card">
        <h2 className="mx-auto max-w-lg text-2xl font-medium tracking-tight sm:text-3xl">
          {t("contact.title")}
        </h2>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={linkOf("Email")}
            className="inline-flex items-center gap-2 rounded-full bg-btn px-6 py-3 text-sm text-btnink"
          >
            <Mail size={16} />
            {t("contact.cta_email")}
          </a>
          <a
            href={linkOf("WhatsApp")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-glass px-6 py-3 text-sm"
          >
            <MessageCircle size={16} />
            {t("contact.cta_whatsapp")}
          </a>
        </div>
      </div>
    </section>
  );
}
