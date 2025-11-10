/** @type {import('tailwindcss').Config} */
export default {
  // ✅ Scan both index.html and React source files
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // ❌ Remove dark mode for now
  darkMode: false,

  theme: {
    extend: {
      // ✅ Custom Color Palette
      colors: {
        brand: {
          light: "#6366F1", // Indigo 500
          DEFAULT: "#4F46E5", // Indigo 600
          dark: "#1E3A8A", // Indigo 900
        },
        surface: {
          light: "rgba(255,255,255,0.45)",
        },
        bg: {
          light: "#F9FAFB",
        },
        text: {
          light: "#1E293B",
        },
      },

      // ✅ Custom keyframes for smooth fade
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },

  plugins: [],
};
