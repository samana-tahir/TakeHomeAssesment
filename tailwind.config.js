/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // ✅ Pages and route handlers
    "./lib/**/*.{js,ts,jsx,tsx}",       // ✅ You use lib/prisma.ts
    "./components/**/*.{js,ts,jsx,tsx}" // ✅ Future-proof for shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

