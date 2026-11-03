import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { socialData } from "../data/social";

export default function Footer() {
  const { t } = useLanguage();
  const links = socialData.filter((s) => s.platform === "GitHub" || s.platform === "LinkedIn");

  return (
    <footer className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-3 px-5 pb-10 text-xs text-mute">
      <span>{t("footer.rights")}</span>
      <span className="flex gap-4">
        {links.map((l) => (
          <a key={l.platform} href={l.link} target="_blank" rel="noreferrer" className="hover:text-ink">
            {l.platform}
          </a>
        ))}
      </span>
    </footer>
  );
}
