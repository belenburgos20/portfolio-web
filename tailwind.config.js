/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        "bg-secondary": "#111827",
        primary: "#ec4899",
        "primary-light": "#f472b6",
        accent: "#a78bfa",
        "text-main": "#f9fafb",
        "text-muted": "#9ca3af",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
