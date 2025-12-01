/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Custom colors for PICT NSS theme - NSS Official Colors
      colors: {
        primary: "#dde1f8",      // Light Blue (soft blue for backgrounds)
        secondary: "#2e3191",    // NSS Blue (deep blue)
        accent: "#ec1c24",       // NSS Red (vibrant red for accents)
        white: "#FFFFFF",
        softGrey: "#F6F6F6",
        textDark: "#1A1A1A",
      },
      // Custom font family
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        'carousel-fade': 'carouselFade 0.7s ease-in-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        carouselFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      // Custom box shadows - Using NSS Blue
      boxShadow: {
        'card': '0 4px 6px -1px rgba(46, 49, 145, 0.1), 0 2px 4px -1px rgba(46, 49, 145, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(46, 49, 145, 0.15), 0 10px 10px -5px rgba(46, 49, 145, 0.08)',
        'dropdown': '0 10px 40px -10px rgba(46, 49, 145, 0.2)',
      },
      // Custom transitions
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
