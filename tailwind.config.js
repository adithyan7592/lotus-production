/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0b0b0b",
        card: "#141414",
      },
    },
  },
  plugins: [],
}

