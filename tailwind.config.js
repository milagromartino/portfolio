/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        ink: "var(--ink)",
        soft: "var(--soft)",
        mute: "var(--mute)",
        line: "var(--line)",
        chip: "var(--chip)",
        glass: "var(--glass)",
        accent: "var(--acc)",
        btn: "var(--btn)",
        btnink: "var(--btnink)",
        good: "var(--good)",
        goodsoft: "var(--goodsoft)",
        accsoft: "var(--accsoft)",
        amber: "var(--amber)",
        ambersoft: "var(--ambersoft)",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1040px",
      },
      boxShadow: {
        card: "var(--sh)",
      },
    },
  },
  plugins: [],
};
