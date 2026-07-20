import React, { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = (key) => {
    const parts = key.split(".");
    let value = translations[lang];
    for (const part of parts) {
      value = value?.[part];
    }
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
