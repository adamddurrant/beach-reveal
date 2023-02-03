/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-pattern": "url('/public/images/background.svg')",
        beach: "url('/public/images/beach.svg')",
      },
    },
  },
  plugins: [],
};
