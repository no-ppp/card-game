/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-border": "pulseBorder 3s infinite",
      },
      keyframes: {
        pulseBorder: {
          "0%": { borderColor: "#FF6347" },
          "25%": { borderColor: "#FFD700" },
          "50%": { borderColor: "#32CD32" },
          "75%": { borderColor: "#1E90FF" },
          "100%": { borderColor: "#FF6347" },
        },
      },
      fontFamily: {
        frijole: ["Frijole"],
      },
      colors: {
        "main-theme": "#FFE48A",
        "second-theme": "#FAEAB6",
        "third-theme": "#C6BA94",
      },
    },
  },
  plugins: [],
};
