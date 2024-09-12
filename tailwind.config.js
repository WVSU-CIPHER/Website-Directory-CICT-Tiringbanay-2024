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
      backgroundImage: {
        'sea2': 'url("https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")',
        'tiringbanay': "url('./src/app/public/assets/images/background.jpg')"
      },
      boxShadow: {
        'text-custom': '0 4px 8px rgba(129, 236, 222, 0.5)', //Blue shadow
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
