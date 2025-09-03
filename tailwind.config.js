/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // pages 라우터 안 쓰면 있어도 무방
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        brand: { 50: "#eef2ff", 100: "#e0e7ff", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca" },
      },
      boxShadow: { soft: "0 4px 16px rgba(0,0,0,0.06)" },
      borderRadius: { xl2: "1rem" },
    },
  },
  plugins: [],
};
