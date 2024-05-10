module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}',],
  modules: ['vue-sweetalert2/nuxt'],
  sweetalert: {
    
    confirmButton: '800px'
  },
  theme: {
    screens: {
      'xs': '475px', // Extra small devices (portrait phones, less than 576px)
      'sm': '320px', // Small devices (landscape phones, 640px and up)
      'md': '768px', // Medium devices (tablets, 768px and up)
      'lg': '1024px', // Large devices (desktops, 1024px and up)
      'xl': '1280px', // Extra large devices (large desktops, 1280px and up)
      '2xl': '1536px', // 2X large devices (extra large desktops, 1536px and up)
    },
    extend: {
      animation: {
        'slide': 'slide 5s linear infinite',
      },
      keyframes: {
        slide: {
          '0%, 100%': {
            'margin-top': '-270px',
          },
          '5%, 33%': {
            'margin-top': '-180px',
          },
          '38%, 66%': {
            'margin-top': '-90px',
          },
          '71%, 99.99%': {
            'margin-top': '0px'
          }
        },
      },
    }
  },
  plugins: [require("daisyui")],
  
 
}