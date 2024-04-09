import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "overflow-hidden",
    "fill-white",
    "fill-black",
    "bg-sm-white",
    "bg-sm-green-light",
    "bg-white",
    "bg-black",
    "ring-white",
    "ring",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      size: {
        22: "5.5rem",
      },
      width: {
        22: "5.5rem",
      },
      height: {
        22: "5.5rem",
      },
      scale: {
        102: "1.02",
      },
      zIndex: {
        "-1": "-1",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        brandon: "Brandon Grotesque",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "3vw": ["3vw", { lineHeight: "3vw" }],
        "4vw": ["4vw", { lineHeight: "4vw" }],
        "5vw": ["5vw", { lineHeight: "5vw" }],
        "6vw": ["6vw", { lineHeight: "7vw" }],
        "8vw": ["8vw", { lineHeight: "9vw" }],
        "9vw": ["9vw", { lineHeight: "10vw" }],
        "10vw": "10vw",
        "11vw": "11vw",
        "12vw": "12vw",
        "13vw": "13vw",
        "14vw": "14vw",
        "15vw": "15vw",
        "16vw": "16vw",
        "18vw": "18vw",
        "20vw": "20vw",
      },
      colors: {
        "sm-white": "#F7F7F6",
        "sm-green-light": "#E6E9D6",
        "sm-green": "#4B7A0F",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
