/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Fraunces"],
        secondary: ["Commissioner"],
      },
      spacing: {
        112: "28rem",
      },
    },
  },
  plugins: [],
};
