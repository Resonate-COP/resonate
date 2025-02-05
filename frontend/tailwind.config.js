/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#242423",
        primary: "#333533",
        secondary: "#cfdbd5",
        text: "#e8eddf",
        accent: "#f5cb5c",
        accentTwo: "#f7ce68",
      },
    },
  },
  plugins: [],
};
