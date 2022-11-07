/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rootColors: {
          color1: "var(color1)",
          color2: "var(color2)",
          color3: "var(color3)",
        },
        objBackground: {
          base: "var(--object-background)",
        },
      },
    },
    plugins: [],
  },
};
