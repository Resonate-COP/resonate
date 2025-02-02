/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        primary: "#1B1B1B",
        secondary: "#A0A0A0",
        text: "#EAEAEA",
        accent: "#B85C38",
      },
    },
  },
  plugins: [],
};
