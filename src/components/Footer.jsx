import React from "react";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { socialData } from "../data/social";

const icons = { GitHub: Github, LinkedIn: Linkedin };

export default function Footer() {
  const { t } = useLanguage();
  const links = socialData.filter((s) => s.platform === "GitHub" || s.platform === "LinkedIn");

  return (
    <footer className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-3 px-5 pb-10 text-xs text-mute">
      <span>{t("footer.rights")}</span>
      <span className="flex gap-4">
        {links.map((l) => {
          const Icon = icons[l.platform];
          return (
            <a
              key={l.platform}
              href={l.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink"
            >
              <Icon size={15} />
              {l.platform}
            </a>
          );
        })}
      </span>
    </footer>
  );
}
