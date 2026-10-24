/**
 * Tailwind CSS Preset for Herbox (Herbivore's Box)
 * Usage: In tailwind.config.js -> presets: [require('./tailwind.herbox.config.js')]
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        herbox: {
          red: '#ED5855',
          'red-hover': '#D94946',
          green: '#265A32',
          'green-dark': '#1C4525',
          ivory: '#F7F4E2',
          sage: '#9EBF81',
          terracotta: '#E17A65',
          charcoal: '#1C1C1C',
          border: '#ECE8D7',
        },
      },
      fontFamily: {
        display: ['Shrimp', 'Fredoka', 'Outfit', 'sans-serif'],
        body: ['Coves', 'Nunito', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        'hb-sm': '6px',
        'hb-md': '12px',
        'hb-lg': '20px',
        'hb-xl': '32px',
      },
      boxShadow: {
        'hb-subtle': '0px 2px 8px rgba(38, 90, 50, 0.06)',
        'hb-raised': '0px 8px 20px rgba(38, 90, 50, 0.10)',
        'hb-floating': '0px 16px 36px rgba(28, 28, 28, 0.14)',
      },
    },
  },
};
