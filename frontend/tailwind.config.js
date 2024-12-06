/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translate(-50%, -50%)" },
          "100%": {
            transform:
              "translate(calc(-50% - var(--move-x)), calc(-50% - var(--move-y)))",
          },
        },
      },
      animation: {
        move: "move 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
