module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee3939",
        secondary: "#4080ff",
        light: "#9aa4c2",
        lighter: "#ebeefd",
        lighten: "#87ceeb",
        "common-bg": "#f7f9fe",
        "light-bg": "#f9f9f9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
