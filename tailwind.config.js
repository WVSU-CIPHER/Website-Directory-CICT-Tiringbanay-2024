/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        chopsic: ['var(--font-chopsic)'],
      },
      boxShadow: {
        'text-custom': '0 4px 8px rgba(129, 236, 222, 0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          'text-shadow': '0 4px 8px rgba(129, 236, 222, 0.5)',
        },
      });
    },
  ],
};
