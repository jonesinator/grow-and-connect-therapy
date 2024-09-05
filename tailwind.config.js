/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "background-orange": "#009688",
        "background-light": "#54b2a9",
        "background-muddy": "#35a79c",
        "theme-white": "#83d0c9",
        "theme-black": "#24201F",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        mono: ["var(--font-staatliches)"],
      },
      keyframes: {
        "slide-up": {
          from: {
            opacity: 0,
            transform: "translate3d(0, 200%, 0) skew(0, 20deg)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0) skew(0, 0)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.85s cubic-bezier(0.65, 0, 0.35, 1) both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        md: "1000px",
      },
    },
  },
  plugins: [],
};
