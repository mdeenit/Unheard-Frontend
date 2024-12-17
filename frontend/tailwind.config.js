/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all JSX/TSX files in src
      "./public/index.html" // Add the public index.html if needed
  ],
  theme: {
      extend: {}, // Use this section to extend default Tailwind styles
  },
  plugins: [],
};


