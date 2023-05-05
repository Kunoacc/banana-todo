module.exports = {
  content: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
      },
      fontFamily: {}
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}