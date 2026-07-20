import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="max-w-content mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-inkMuted">
          © {year} Milagro Martino
        </p>
        <p className="font-mono text-[11px] text-inkMuted">{t("footer.built")}</p>
      </div>
    </footer>
  );
}
