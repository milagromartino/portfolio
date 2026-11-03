import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

function initialDark() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch (e) {
    // ignore
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(initialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0a0a11" : "#f4f5f9");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {
      // ignore
    }
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
