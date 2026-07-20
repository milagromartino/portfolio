import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const tabs = [
    { href: "#about", label: "about.tsx" },
    { href: "#experience", label: "experience.tsx" },
    { href: "#skills", label: "skills.tsx" },
    { href: "#projects", label: "projects.tsx" },
    { href: "#contact", label: "contact.tsx" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="max-w-content mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-mono font-medium text-sm text-inkSoft">
          ~/milagro <span className="text-accent">$</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tItem) => (
            <a
              key={tItem.href}
              href={tItem.href}
              className="font-mono text-xs text-inkSoft hover:text-ink hover:bg-bgRaised px-3 py-1.5 rounded transition-colors"
            >
              {tItem.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="font-mono text-xs border border-line rounded px-3 py-1.5 flex items-center gap-1 hover:border-accent transition-colors"
          >
            <span className={lang === "es" ? "text-accent font-semibold" : "text-inkSoft"}>ES</span>
            <span className="text-line">|</span>
            <span className={lang === "en" ? "text-accent font-semibold" : "text-inkSoft"}>EN</span>
          </button>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center border border-line rounded"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <div className="w-4 space-y-1">
              <span className="block h-px bg-ink"></span>
              <span className="block h-px bg-ink"></span>
              <span className="block h-px bg-ink"></span>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-bg px-6 py-4 flex flex-col gap-3">
          {tabs.map((tItem) => (
            <a
              key={tItem.href}
              href={tItem.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-inkSoft"
            >
              {tItem.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
