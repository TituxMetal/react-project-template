const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.js'],
    options: {
      safelist: ['dark']
    }
  },
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            color: colors.trueGray[900],
            a: {
              color: colors.blue[700],
              '&:hover': {
                color: colors.blue[700]
              }
            }
          }
        },
        dark: {
          css: {
            color: colors.trueGray[300],
            a: {
              color: colors.green[500],
              '&:hover': {
                color: colors.green[500]
              }
            },
            h1: {
              color: colors.trueGray[300]
            },
            h2: {
              color: colors.trueGray[300]
            },
            h3: {
              color: colors.trueGray[300]
            },
            h4: {
              color: colors.trueGray[300]
            },
            h5: {
              color: colors.trueGray[300]
            },
            h6: {
              color: colors.trueGray[300]
            },
            strong: {
              color: colors.trueGray[300]
            },
            code: {
              color: colors.trueGray[300]
            },
            figcaption: {
              color: colors.trueGray[500]
            }
          }
        }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        orange: colors.orange,
        rose: colors.rose
      }
    }
  },
  variants: {
    extend: { typography: ['dark'] }
  },
  plugins: [require('@tailwindcss/typography')]
}
