// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#6366f1", // Indigo/Purple color from your image
//         secondary: "#8b5cf6",
//       },
//     },
//   },
//   plugins: [],
// }

// black theme
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#010409",
        cardBg: "#0d1117",
        borderGray: "#30363d",
        cyanNeon: "#58a6ff"
      }
    },
  },
  plugins: [],
}