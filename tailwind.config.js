/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141625",
        secondary: "#1E2139",
        beaver: "#9277FF",
        sidebar: "#373B53",
        pending: "#2B2736",
        sbar: "#252945",
      },
    },
  },
  plugins: [],
};
