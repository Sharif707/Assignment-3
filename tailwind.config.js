/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-form': "url('/assets/bg.jpg')",

      },
    },
  },
  plugins: [],
};
