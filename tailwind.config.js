/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        copper: "#b87333",
        "copper-light": "#d28c4b",
      },
      boxShadow: {
        copper: "0 4px 14px 0 rgba(184, 115, 51, 0.4)",
      },
    },
  },
  plugins: [],
};

