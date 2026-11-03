import React from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const links = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
];

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const { dark, toggleTheme } = useTheme();

  return (
    <header id="home" className="mx-auto max-w-content px-5 pt-5">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
        <span className="hidden w-24 sm:block" aria-hidden="true" />

        <nav
          aria-label={t("nav.menu")}
          className="order-3 flex w-full justify-center overflow-x-auto rounded-full border border-line bg-glass p-1 text-xs sm:order-none sm:w-auto sm:text-sm"
        >
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 transition-colors sm:px-4 ${
                i === 0 ? "bg-chip font-medium text-ink" : "text-soft hover:text-ink"
              }`}
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:ml-0 sm:w-28 sm:justify-end">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("nav.lang")}
            className="whitespace-nowrap rounded-full border border-line bg-glass px-3 py-1.5 text-xs"
          >
            <span className={lang === "es" ? "font-medium" : "text-mute"}>ES</span>
            <span className="text-mute"> · </span>
            <span className={lang === "en" ? "font-medium" : "text-mute"}>EN</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("nav.theme")}
            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-glass"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
}
