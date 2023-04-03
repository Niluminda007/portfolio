/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      aspectRatio: {
        "10/16": "10 / 16",
      },
      animation: {
        "screen-animation": "pan-overlay 22s infinite linear",
        "image-animation": "pan-image 22s infinite linear",
        "text-animation": "glow 1s ease-in-out infinite alternate",
      },

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
        9: "100% 9px !important",
        300: "300% !important",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        purple: "#802BB1",
        dark: "#121212",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      height: {
        512: "31.25rem",
        256: "18.75rem",
        128: "12.5rem",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      screens: {
        xs: { max: "639px" },
        // sm: { min: "640px", max: "767px" },
        // // => @media (min-width: 640px and max-width: 767px) { ... }

        // md: { min: "768px", max: "1023px" },
        // // => @media (min-width: 768px and max-width: 1023px) { ... }

        // lg: { min: "1024px", max: "1279px" },
        // // => @media (min-width: 1024px and max-width: 1279px) { ... }

        // xl: { min: "1280px", max: "1535px" },
        // // => @media (min-width: 1280px and max-width: 1535px) { ... }

        // "2xl": { min: "1536px" },
        // // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
