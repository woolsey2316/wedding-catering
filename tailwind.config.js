module.exports = {
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'parisienne': ['Parisienne', 'serif']
    },
    extend: {
      backgroundImage: {
        'wedding-table': "url('../assets/home/g2-768x512.jpg')",
        'wedding-table-h': "linear-gradient(rgba(255,138,101,0.4),rgba(255,138,101,0.4)),url('../assets/home/g2-768x512.jpg')",
        'food-on-stump': "url('../assets/home/g1e-768x512.jpg')",
        'food-on-stump-h': "linear-gradient(rgba(255,138,101,0.4),rgba(255,138,101,0.4)),url('../assets/home/g1e-768x512.jpg')",
      },
      colors: {
        coral: '#ff8a65',
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  },
  variants: {
    fontSize: ['responsive', 'hover'],
    backgroundImage: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
