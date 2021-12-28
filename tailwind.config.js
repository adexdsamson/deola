module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    fontSize: {
      'body1': '.865rem',
      'body2': '.765rem',
      'subheader2': '.95rem'
    },
    extend: {
      spacing: {
        '82': '50rem',
        '83': '25rem',
        '97': '30rem',
        '98': '35rem',
        '99': '55rem'
      },
      minWidth: {
        'i4': '14rem'
      },
      fontSize: {
        'xs': '.58rem',
        'sm': '.68rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      animation: {
        'pings': 'pings 2s cubic-bezier(0, 0, 0.2, 1) infinite;'
      },
      keyframes: {
        pings: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0,
          }
        }
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
