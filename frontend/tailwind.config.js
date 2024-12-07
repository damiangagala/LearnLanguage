/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        move: "move 1.3s ease-in-out 0.1s forwards",
      },
    },
  },
  plugins: [],
};
