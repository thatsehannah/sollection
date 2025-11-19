/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus-Jakarta-Sans-Regular", "sans-serif"],
        "jakarta-bold": ["Plus-Jakarta-Sans-Bold", "sans-serif"],
        "jakarta-extra-bold": ["Plus-Jakarta-Sans-Extra-Bold", "sans-serif"],
        "jakarta-semi-bold": ["Plus-Jakarta-Sans-Semi-Bold", "sans-serif"],
        "jakarta-light": ["Plus-Jakarta-Sans-Light", "sans-serif"],
        "jakarta-medium": ["Plus-Jakarta-Sans-Medium", "sans-serif"],
        "jakarta-italic": ["Plus-Jakarta-Sans-Italic", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#1A1F2F",
          200: "#252C41",
          300: "#0A1436",
        },
        "primary-foreground": "#FAF9F6",
        accent: "#F67316",
      },
    },
  },
  plugins: [],
};
