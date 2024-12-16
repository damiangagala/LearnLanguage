/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blush-pink": "#FFC7C7",
        "pale-peach": "#FFE2E2",
        "soft-white": "#F6F6F6",
        "muted-lavender": "#8785A2",
        "light-gray": "#E0E0E0",
      },
      keyframes: {
        move: {
          "0%": { visibility: "hidden" },
          "100%": {
            transform:
              "translate(calc(-50% - var(--move-x)), calc(-50% - var(--move-y)))",
            visibility: "visible",
          },
        },
      },
      animation: {
        move: "move .8s ease-in-out 0.1s forwards",
      },
    },
  },
  plugins: [],
};
