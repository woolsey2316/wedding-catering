module.exports = {
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'parisienne': ['Parisienne', 'serif'],
      'playfair' : ['Playfair Display', 'serif']
    },
    opacity: {
      '85': .85
    },
    extend: {
      screens: {
        xmd: '960px'
      },
      boxShadow: {
        'inner-opaque': 'inset 250px 250px 50px 0 rgba(255, 138, 101, 0)',
        'inner-full': 'inset 250px 250px 50px 0 rgba(255, 138, 101, 0.50)',
      },
      borderWidth: {
        '50': '50px',
      },
      margin: {
        '-2px': '-2px'
      },
      fontSize: {
        'h1': '50px',
        'h2': '42px',
        'h4': '27px',
      },
      backgroundImage: {
        'wedding-table': "url('../assets/home/g2-768x512.jpg')",
        'wedding-table-h': "linear-gradient(rgba(255,138,101,0.4),rgba(255,138,101,0.4)),url('../assets/home/g2-768x512.jpg')",
        'food-on-stump': "url('../assets/home/g1e-768x512.jpg')",
        'food-on-stump-h': "linear-gradient(rgba(255,138,101,0.4),rgba(255,138,101,0.4)),url('../assets/home/g1e-768x512.jpg')",
        'necklace': "url('../assets/home/g3-768x513.jpg')",
        'necklace-h': "linear-gradient(rgba(255,138,101,0.4),rgba(255,138,101,0.4)),url('../assets/home/g3-768x513.jpg')",
        'cupcake': "url('../assets/home/g4-768x613.jpg')",
        'cupcake-h': "linear-gradient(rgba(255,138,101,0.4),rgba(255,138,101,0.4)),url('../assets/home/g4-768x613.jpg')",
        'scene': "url('../assets/home/7.jpg')",
        'scene-tint': "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('../assets/home/7.jpg')",
        'platter-tint': "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('../assets/about us/g1e.jpg')",
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
        },
        gold: {
          '800': '#ffb74d'
        },
        rich_black: "#111111",
        
      },
      maxWidth: {
        '1230': '1230px',
        '1170': '1170px',
        '570': '570px',
        '555': '555px',
        '540': '540px',
        '615': '615px',
        '740': '740px'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
        '156': '39rem',
        '168': '42rem',
        '180': '45rem',
        'body': 'calc(100% - 21rem)'
      }
    }
  },
  variants: {
    fontSize: ['responsive', 'hover'],
    backgroundImage: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
