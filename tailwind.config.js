/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#12141A",
        bgRaised: "#181B23",
        bgDeep: "#15171F",
        bgCard: "#181B23",
        line: "#262A34",
        lineStrong: "#3A3F4B",
        ink: "#F2F3F5",
        inkSoft: "#9AA1AE",
        inkMuted: "#6B7280",
        accent: "#6C9BFF",
        accentSoft: "#1B2B4D",
        tealChip: "#123B31",
        tealChipText: "#6FD9B7",
        amberChip: "#3A2A12",
        amberChipText: "#E8A33D",
        blueChipText: "#8FB6FF",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
